import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // CSS مربوط به toastify

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [openMessageId, setOpenMessageId] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0); // برای ذخیره تعداد پیام‌های جدید

  useEffect(() => {
    // Fetch messages from the API
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/message");
        const data = await response.json();
        
        // مرتب‌سازی پیام‌ها: پیام‌های خوانده‌نشده را ابتدا نشان دهید
        const sortedMessages = data.sort((a, b) => a.isRead - b.isRead);
        setMessages(sortedMessages);

        // محاسبه تعداد پیام‌های خوانده‌نشده
        const unreadMessages = sortedMessages.filter((msg) => !msg.isRead).length;
        setUnreadCount(unreadMessages);

      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  // Function to handle opening a message and marking it as read
  const handleOpenMessage = async (id) => {
    setOpenMessageId(openMessageId === id ? null : id);

    const message = messages.find((msg) => msg.id === id);
    if (!message.isRead) {
      // Send a PUT request to update the isRead status
      try {
        await fetch(`http://localhost:3000/api/message/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isRead: true }),
        });

        // Update the local state to reflect the change
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === id ? { ...msg, isRead: true } : msg
          )
        );

        // Update unread count
        setUnreadCount((prevCount) => prevCount - 1);
      } catch (error) {
        console.error("Error updating message:", error);
      }
    }
  };

  // Function to handle deleting a message
  const handleDeleteMessage = async (id) => {
    try {
      // Send a DELETE request to the API to remove the message from the database
      await fetch(`http://localhost:3000/api/message/${id}`, {
        method: "DELETE",
      });

      // Remove the message from the local state
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));

      // اگر پیامی که حذف شده خوانده نشده باشد، تعداد پیام‌های خوانده‌نشده را به‌روزرسانی کنید
      const deletedMessage = messages.find((msg) => msg.id === id);
      if (!deletedMessage.isRead) {
        setUnreadCount((prevCount) => prevCount - 1);
      }

    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  // Function to handle email copying
  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email)
      .then(() => {
        toast.success("Email copied to clipboard!"); // Show success toast
      })
      .catch((error) => {
        console.error("Failed to copy email:", error);
        toast.error("Failed to copy email.");
      });
  };

  return (
    <div className="Messages">
      <ToastContainer theme="dark" />
      <h2>{unreadCount > 0 ? `You have ${unreadCount} new message(s)` : "Messages"}</h2>
      <div className="messages-box">
        {messages.map((message) => (
          <div key={message.id} className="message-item" style={!message.isRead ?{border:'2px solid red' ,background:"#a0a0a0"}:{border:"none"}}>
            {/* Circle is shown only if the message is unread */}
            {!message.isRead && <div className="circle" />} {/* Circle for unread messages */}
            <div className="box">
              <div className="one-box">
                <div className="user">
                  <span>Username : </span>
                  {message.username}
                </div>
                {/* ایمیل کلیک‌پذیر و قابلیت کپی */}
                <div className="email" onClick={() => handleCopyEmail(message.email)}>
                  <span>Email : </span>
                  {message.email} {/* ایمیل را کلیک‌پذیر کنید */}
                </div>
              </div>
              <button onClick={() => handleOpenMessage(message.id)}>
                {openMessageId === message.id ? "Hide message" : "Show message"}
              </button>
              <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
            </div>
            {openMessageId === message.id && (
              <div className="show-message">
                <div className="content">{message.content}</div>
                <div className="date">
                  <span>Date :</span> {new Date(message.createdAt).toLocaleDateString()}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
