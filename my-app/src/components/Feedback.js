import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name) {
      newErrors.name = "Name is required!";
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format!";
    }

    if (!formData.message) {
      newErrors.message = "Message cannot be empty!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    localStorage.setItem("feedback", JSON.stringify(formData));
    setMessage("Thank you for your feedback!");
    setErrors({});
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formSection}>
        <div style={styles.feedbackBox}>
          <form onSubmit={handleSubmit}>
            <h1 style={styles.formTitle}>Feedback</h1>
            <h3>We would love to hear from you!</h3>
            <br></br>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={{ ...styles.formInput, border: errors.name ? "2px solid red" : "1px solid #ccc" }}
              />
              {errors.name && <p style={styles.errorText}>{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={{ ...styles.formInput, border: errors.email ? "2px solid red" : "1px solid #ccc" }}
              />
              {errors.email && <p style={styles.errorText}>{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={{ ...styles.formTextarea, border: errors.message ? "2px solid red" : "1px solid #ccc" }}
              />
              {errors.message && <p style={styles.errorText}>{errors.message}</p>}
            </div>
            {message && <p style={styles.successMessage}>{message}</p>}
            <button type="submit" style={styles.formButton}>Submit</button>
          </form>
        </div>
      </div>
      <div style={styles.imageSection}></div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f3f4f6",
    marginTop: "-50px",
  },
  formSection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageSection: {
    flex: 1,
    backgroundImage: "url('BJ2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  feedbackBox: {
    background: "white",
    padding: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "650px",
    height: "100vh",
    textAlign: "center",
  },
  formTitle: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  formInput: {
    width: "80%",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "15px",
    fontSize: "14px",
  },
  formTextarea: {
    width: "80%",
    height: "250px",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "15px",
    fontSize: "14px",
  },
  formButton: {
    width: "80%",
    background: "#6b7280",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  errorText: {
    color: "red",
    fontSize: "0.9rem",
  },
  successMessage: {
    color: "green",
    fontSize: "14px",
    marginTop: "10px",
  },
};

export default Feedback;
