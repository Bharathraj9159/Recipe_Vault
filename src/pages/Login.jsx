import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// importing thr login seprate css style
import "../pages/styles/Login.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      ? navigate("/recipes")
      : setError("Invalid credentials");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* LEFT */}
        <div className="login-card">
          <h2>Welcome !</h2>
          <p className="login-subtitle">
            Sign in to explore and save your favorite recipes
          </p>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Sign In</button>
          </form>

          {error && <p className="error">{error}</p>}
          <p className="demo">
            {/* Hardcoded credentials for login */}
            Credentials : bharath@demo.com / cook123
          </p>

          {/* ALready user section*/}

          <p className="auth-switch">
            New user? <span>Create an account</span>
          </p>

          <p className="auth-switch">
             <span>Sign in</span>
          </p>
        </div>

        {/* right side section */}
        <div className="login-illustration">
          <img src="../src/assets/cook.jpg" alt="Cooking illustration" />
        </div>
      </div>
    </div>
  );
}
