import { NavLink } from "react-router-dom";
import calc_icon from "/calc_icon.png";
import verse_icon from "/verse_icon.png";
import house_icon from "/house_icon.png";

export default function MobileBottomNav() {
  return (
    <div className="bottom-0 left-0 w-full p-2 bg-black sm:hidden sticky">
      <div className="mx-auto flex justify-evenly">
        <NavLink
          to="/"
          type="button"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-100 flex items-center rounded-lg p-2"
              : "hover:border-2 hover:bg-slate-100 flex items-center rounded-lg p-2"
          }
        >
          <img src={house_icon} className="w-10" />
        </NavLink>
        <NavLink
          to="/calculator"
          type="button"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-100 flex items-center rounded-lg p-2"
              : "hover:border-2 hover:bg-slate-100 flex items-center rounded-lg p-2"
          }
        >
          <img src={calc_icon} className="w-10" />
        </NavLink>
        <NavLink
          to="/verses"
          type="button"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-100 flex items-center rounded-lg p-2"
              : "hover:border-2 hover:bg-slate-100 flex items-center rounded-lg p-2"
          }
        >
          <img src={verse_icon} className="w-10" />
        </NavLink>
      </div>
    </div>
  );
}
