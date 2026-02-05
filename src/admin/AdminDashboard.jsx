import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <div className="flex gap-16">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
