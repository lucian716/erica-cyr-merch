import React from "react";
import { useNavigate } from "react-router-dom"; 

const AdminDashboard = () => {
  const navigate = useNavigate(); 


  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard">
      <h2>Welcome to Admin Dashboard</h2>
 {/* ADD CONTENT MANAGEMENT FOR ADMIN  */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
