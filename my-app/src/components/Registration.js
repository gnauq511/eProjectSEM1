import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password does not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await axios.post("http://localhost:8080/api/auth/create", formData); 
      alert("Register success!");
      console.log(response.data); 
      navigate("/login");
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.imageSection}></div>
      <div style={styles.formSection}>
        <div style={styles.registrationBox}>
          <form onSubmit={handleSubmit}>
            <br></br>
            <br></br>
            <h2 style={styles.formTitle}>Register</h2>
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
              {errors.username && <p style={styles.errorText}>{errors.username}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  ...styles.formInput,
                  border: errors.email ? "2px solid red" : "1px solid #ccc",
                }}
              />
              {errors.email && <p style={styles.errorText}>{errors.email}</p>}
            </div>

            {/* Mật khẩu */}
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

            {/* Xác nhận mật khẩu */}
            <div style={styles.passwordContainer}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{
                  ...styles.formInput,
                  border: errors.confirmPassword ? "2px solid red" : "1px solid #ccc",
                }}
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeIcon}
              />
            </div>
            {errors.confirmPassword && <p style={styles.errorText}>{errors.confirmPassword}</p>}

            <button type="submit" style={styles.formButton}>Register</button>
            <p style={styles.formFooter}>
              Already have an account? <a href="/login" style={styles.formLink}>Login</a>
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
    float: "right",
  },
  formSection: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  registrationBox: {
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
  

};

export default Registration;
