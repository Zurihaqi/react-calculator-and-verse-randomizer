import { NavLink } from "react-router-dom";
import calc_icon from "/calc_icon.png";
import verse_icon from "/verse_icon.png";
import house_icon from "/house_icon.png";

export default function Sidebar() {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-50 w-20 h-screen transition-transform -translate-x-full lg:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-black">
        <div className="flex flex-row justify-evenly mb-4">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
                  : "hover:bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
              }
            >
              <img src={house_icon} className="w-10" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
                  : "hover:bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
              }
            >
              <img src={calc_icon} className="w-10" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/verses"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
                  : "hover:bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
              }
            >
              <img src={verse_icon} className="w-10" />
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
