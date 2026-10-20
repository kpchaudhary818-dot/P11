
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    `rounded-lg px-4 py-2 font-medium transition ${
      isActive
        ? "bg-white text-indigo-700"
        : "text-white hover:bg-indigo-500"
    }`;

  return (
    <nav className="flex flex-wrap items-center justify-center gap-3 bg-indigo-600 p-4 shadow-lg">
      <NavLink to="/" className={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/about" className={linkStyle}>
        About
      </NavLink>

      <NavLink to="/contact" className={linkStyle}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
