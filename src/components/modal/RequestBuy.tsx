import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const RequestBuy = ({ projectinfo, closeModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // برای مدیریت وضعیت در حال ارسال

  const handleRequestToBuy = async (e) => {
    e.preventDefault();

    // نمایش toast برای نشان دادن وضعیت "در حال ارسال"
    const loadingToast = toast.loading("Sending your request...", {
      position: "top-right",
      autoClose: false, // این بار باید تا زمانی که درخواست تمام شود باز بماند
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
    });

    try {
      const content = `User ${username} requested to buy the product ${projectinfo.name} (ID: ${projectinfo.id}).`;

      setIsSubmitting(true); // هنگام ارسال درخواست، حالت "در حال ارسال" فعال می‌شود

      await axios.post("/api/message", {
        content,
        email,
        username,
      });

      toast.update(loadingToast, {
        render: "Your purchase request has been successfully sent!",
        type: "success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      closeModal();
    } catch (error) {
      toast.update(loadingToast, {
        render: "An error occurred while sending your purchase request. Please try again later.",
        type: "error",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="request-box">
      <div className="box">
        <div className="title">Do you want to buy this product?</div>
        <form onSubmit={handleRequestToBuy}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isSubmitting}>Send</button>
          <button className="last-btn" onClick={() => closeModal()} disabled={isSubmitting}>
            cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestBuy;
