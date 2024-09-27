import { useState, useEffect } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [openMessageId, setOpenMessageId] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // مدیریت صفحه‌ی فعلی
  const messagesPerPage = 5; // تعداد پیام‌ها در هر صفحه

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/message");
        const data = await response.json();
        const sortedMessages = data.sort((a, b) => a.isRead - b.isRead);
        setMessages(sortedMessages);
        const unreadMessages = sortedMessages.filter(
          (msg) => !msg.isRead
        ).length;
        setUnreadCount(unreadMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  const handleOpenMessage = async (id) => {
    setOpenMessageId(openMessageId === id ? null : id);
    const message = messages.find((msg) => msg.id === id);
    if (!message.isRead) {
      try {
        await fetch(`http://localhost:3000/api/message/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isRead: true }),
        });
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === id ? { ...msg, isRead: true } : msg
          )
        );
        setUnreadCount((prevCount) => prevCount - 1);
      } catch (error) {
        console.error("Error updating message:", error);
      }
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/message/${id}`, {
        method: "DELETE",
      });
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== id)
      );
      const deletedMessage = messages.find((msg) => msg.id === id);
      if (!deletedMessage.isRead) {
        setUnreadCount((prevCount) => prevCount - 1);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => toast.success("Email copied to clipboard!"))
      .catch(() => toast.error("Failed to copy email."));
  };

  const nextPage = () => {
    if ((currentPage + 1) * messagesPerPage < messages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // پیام‌های فعلی برای صفحه فعلی
  const currentMessages = messages.slice(
    currentPage * messagesPerPage,
    (currentPage + 1) * messagesPerPage
  );

  return (
    <div className="Messages">
      <ToastContainer theme="dark" />
      <h2>
        {unreadCount > 0
          ? `You have ${unreadCount} new message(s)`
          : "Messages"}
      </h2>
      <div className="messages-box">
        {currentMessages.map((message) => (
          <div
            key={message.id}
            className={`message-item ${!message.isRead && "isReadFalse"}`}
            style={
              !message.isRead ? { background:"#8a8a8a3b" } : { border: "none" }
            }
          >
            {!message.isRead && <div className="circle" />}
            <div className="box">
              <div className="one-box">
                <div className="user">
                  <span>Username : </span>
                  {message.username}
                </div>
                <div
                  className="email"
                  onClick={() => handleCopyEmail(message.email)}
                >
                  <span>Email : </span>
                  {message.email}
                </div>
              </div>
              <button onClick={() => handleOpenMessage(message.id)}>
                {openMessageId === message.id ? "Hide message" : "Show message"}
                {openMessageId === message.id ? (
                  <FaRegEyeSlash />
                ) : (
                  <FaRegEye />
                )}
              </button>
              <button onClick={() => handleDeleteMessage(message.id)}>
                Delete
                <MdDeleteOutline />
              </button>
            </div>
            {openMessageId === message.id && (
              <div className="show-message">
                <div className="content">{message.content}</div>
                <div className="date">
                  <span>Date :</span>{" "}
                  {new Date(message.createdAt).toLocaleDateString()}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <button



          
          onClick={nextPage}
          disabled={(currentPage + 1) * messagesPerPage >= messages.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Messages;
