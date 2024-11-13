import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const RequestBuy = ({ projectinfo, closeModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleRequestToBuy = async (e) => {
    e.preventDefault();

    try {
      const content = `User ${username} requested to buy the product ${projectinfo.name} (ID: ${projectinfo.id}).`;

      await axios.post("/api/message", {
        content,
        email,
        username,
      });

      toast.success("Your purchase request has been successfully sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      closeModal();
    } catch (error) {
      toast.error(
        "An error occurred while sending your purchase request. Please try again later.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
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
          <button type="submit">Send</button>
          <button className="last-btn" onClick={() => closeModal()}>
            cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestBuy;
