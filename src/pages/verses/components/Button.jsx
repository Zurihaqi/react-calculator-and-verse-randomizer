import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function Button({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-400 to-blue-600 group-hover:from-purple-400 group-hover:to-blue-600 hover:text-white mt-4 group-active:bg-gray-900"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
        <FontAwesomeIcon icon={icon} />
      </span>
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.func,
};
