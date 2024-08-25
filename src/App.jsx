import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MobileBottomNav from "./components/MobileBottomNav";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-300 ">
      <Sidebar />
      <div className="text-center m-auto">
        <Outlet />
      </div>
      <footer className="bottom-0 mb-4 text-center text-gray-700 font-light text-sm">
        ©{new Date().getFullYear()} Zul Fahri Baihaqi
      </footer>
      <MobileBottomNav />
    </div>
  );
}

export default App;
