import { FaRegEyeSlash, FaRegUserCircle, FaUnlockAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { CiLock, CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { LiaEyeSolid } from "react-icons/lia";

const AddAdmin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:3000/api/user", {
        ...formData,
        role: "ADMIN",
      });
      setSuccess("Admin added successfully!");
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || "An error occurred");
      } else {
        setError("An error occurred");
      }
    }
  };

  return (
    <div className="AddAdmin">
      <h2>Adding New Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <FaRegUserCircle />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <MdAlternateEmail />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
        <FaUnlockAlt />
        <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="eyes" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <LiaEyeSolid /> : <FaRegEyeSlash />}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddAdmin;
