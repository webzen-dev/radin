import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProjects = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    country: "", // فیلد جدید برای کشور
  });
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Handle input field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      const selectedFiles: File[] = Array.from(fileList);

      if (selectedFiles.length > 5) {
        toast.warning("You can only upload a maximum of 5 images.");
        setFiles(selectedFiles.slice(0, 5));
      } else {
        let validFiles = true;
        selectedFiles.forEach((file) => {
          const fileType = file.type.split("/")[0];
          if (fileType !== "image") {
            toast.error("Please select only image files.");
            validFiles = false;
          }
          if (file.size > 5 * 1024 * 1024) {
            toast.error("Each image must be less than 5MB.");
            validFiles = false;
          }
        });

        if (validFiles) {
          setFiles(selectedFiles);
        }
      }
    }
  };
  const simulateProgress = () => {
    const duration = 2000; // 2 seconds
    const interval = 20; // update every 20ms
    const increment = 100 / (duration / interval); // how much to increment per step

    let currentProgress = 0;
    setUploadProgress(0);

    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        clearInterval(timer);
        setUploadProgress(100);
        setLoading(false);
        setSuccess("Project added successfully!");
        toast.success("Project added successfully!");
        setFormData({ name: "", description: "", brand: "", category: "", country: "" });
        setFiles([]);
      } else {
        setUploadProgress(Math.min(currentProgress, 100));
      }
    }, interval);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (files.length === 0) {
      setError("Please upload at least one image.");
      setLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("brand", formData.brand);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("country", formData.country); // اضافه کردن کشور به FormData

      files.forEach((file) => {
        formDataToSend.append("file", file);
      });

      const response = await fetch("/api/projects", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Project added successfully!");
        toast.success("Project added successfully!");
        setFormData({ name: "", description: "", brand: "", category: "", country: "" });
        setFiles([]);
      } else {
        setError(data.error || "Failed to add project.");
        toast.error(data.error || "Failed to add project.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Something went wrong.");
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
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
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            placeholder="Category of product"
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            placeholder="Country of product"
          />
        </div>
        <div className="input-box">
          <label>Upload Images</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            multiple
            accept="image/png, image/jpeg, image/jpg"
          />
        </div>
        <button type="submit">Submit</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>

      {loading && (
        <div className="uploading-modal">
          <div className="box">
            <div className="title"></div>
            <span>{Math.round(uploadProgress)}%</span>
            <div className="count">Files uploaded: {files.length}</div>
          </div>
        </div>
      )}

      <ToastContainer theme="dark" />
    </div>
  );
};

export default AddProjects;
