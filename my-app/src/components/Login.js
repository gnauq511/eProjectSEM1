import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './style3.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });          
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.username) {
      newErrors.username = "Email is required!";
    } 

    if (!formData.password) {
      newErrors.password = "Password is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
  
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: formData.username, // Chú ý: Backend sử dụng username, không phải email
          password: formData.password
        })
      });
  
      if (response.ok) {
        const userData = await response.json();
        
        // Kiểm tra kết quả trả về từ backend
        if (userData.result === true && userData.data !== null) {
          // Đăng nhập thành công
          setMessage("Login successful!");
          localStorage.setItem("loggedInUser", JSON.stringify(userData.data));
          setErrors({});
          navigate("/");
          window.location.reload();
        } else {
          // Đăng nhập thất bại
          setErrors({ username: "Wrong username or password!", password: "Wrong username or password!" });
          setMessage("");
        }
      } else {
        // Lỗi HTTP (không phải 200 OK)
        setErrors({ email: "Login failed!", password: "Login failed!" });
        setMessage("Server error. Please try again later.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed. Please try again later.");
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.imageSection}></div>
      <div style={styles.formSection}>
        <div style={styles.loginBox}>
          <form onSubmit={handleSubmit}>
            <br></br>
            <br></br>
            <h2 style={styles.formTitle}>Login</h2>
            <div>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                style={{
                  ...styles.formInput,
                  border: errors.username ? "2px solid red" : "1px solid #ccc",
                }}
              />
              {errors.email && <p style={styles.errorText}>{errors.email}</p>}
            </div>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  ...styles.formInput,
                  border: errors.password ? "2px solid red" : "1px solid #ccc",
                }}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              />
            </div>
            {errors.password && <p style={styles.errorText}>{errors.password}</p>}
            {message && <p style={styles.successMessage}>{message}</p>}
            <button type="submit" style={styles.formButton}>Login</button>
            <p style={styles.formFooter}>
              Are you new to our shop? <a href="/registration" style={styles.formLink}>Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
    marginTop: "-50px",
  },
  imageSection: {
    flex: "1",
    backgroundImage: "url('BJ3.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",  
  },
  formSection: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBox: {
    background: "white",
    padding: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "650px",
    height: "100vh",
    textAlign: "center",
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  formInput: {
    width: "60%",
    height: "50px",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "15px",
    fontSize: "14px",
  },
  passwordContainer: {
    position: "relative",
    alignItems: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: "8rem",
    top: "1rem",
    color: "#000", 
    cursor: "pointer",
    fontSize: "18px",
  },
  formButton: {
    width: "50%",
    height: "50px",
    background: "#6b7280",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  formFooter: {
    marginTop: "15px",
    fontSize: "14px",
  },
  formLink: {
    fontWeight: "bold",
    color: "#000",
    textDecoration: "none",
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

export default Login;