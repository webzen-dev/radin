import { useState } from "react";
import axios from "axios";

const AddProjects = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    image: "",
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
      const response = await axios.post("/api/projects", formData, {
        headers: {
          "Content-Type": "application/json", 
        },
      });

      setSuccess("Project added successfully!");
      setFormData({ name: "", description: "", brand: "", category: "", image: "" });
    } catch (error) {
      setError("Error submitting the form");
    }
  };

  return (
    <div className="Projects">
      <h2>Adding New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name of product"
          />
        </div>
        <div className="input-box">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Description"
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            placeholder="Brand of product"
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="image" // اضافه کردن نام فیلد برای تصویر
            value={formData.image}
            onChange={handleChange}
            required
            placeholder="URL for image"
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            placeholder="Category of product"
          />
        </div>
        <button type="submit">Submit</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  );
};

export default AddProjects;
