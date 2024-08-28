import { NavLink } from "react-router-dom";
import calc_icon from "/calc_icon.png";
import verse_icon from "/verse_icon.png";
import house_icon from "/house_icon.png";

export default function MobileBottomNav() {
  return (
    <div className="bottom-0 left-0 w-full p-2 bg-black lg:hidden sticky z-50">
      <div className="mx-auto flex justify-evenly">
        <NavLink
          to="/"
          type="button"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
              : "hover:bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
          }
        >
          <img src={house_icon} className="w-10" />
        </NavLink>
        <NavLink
          to="/calculator"
          type="button"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
              : "hover:bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
          }
        >
          <img src={calc_icon} className="w-10" />
        </NavLink>
        <NavLink
          to="/verses"
          type="button"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
              : "hover:bg-gradient-to-tr from-red-500 to-amber-700 flex items-center rounded-lg p-2"
          }
        >
          <img src={verse_icon} className="w-10" />
        </NavLink>
      </div>
    </div>
  );
}
