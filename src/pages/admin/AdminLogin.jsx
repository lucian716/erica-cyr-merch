import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcrypt";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  const adminUsername = "admin";
  const adminPasswordHash = await bcrypt.hash("adminpassword123", 10); 

  if (
    username === adminUsername &&
    (await bcrypt.compare(password, adminPasswordHash))
  ) {
    history.push("/admin/dashboard");
  } else {
    setErrorMessage("Invalid username or password");
  }
};

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
