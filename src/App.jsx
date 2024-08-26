import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MobileBottomNav from "./components/MobileBottomNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-300 ">
      <Sidebar />
      <div className="text-center m-auto">
        <Outlet />
      </div>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;
