import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300 ">
      <Sidebar />
      <div className="text-center m-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
