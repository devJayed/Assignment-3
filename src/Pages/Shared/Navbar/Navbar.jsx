import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mb-4">
      <div className="navbar-start">
        {/* Dropdown for small size */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        {/* Left side website name */}
        <Link to={"/"}>
          <a className="btn btn-ghost text-xl">Boi Bitan</a>
        </Link>
      </div>
      {/* center items  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      {/* right side button  */}
      <div className="navbar-end">
        <a className="btn mr-2">Buy Book</a>
        <a className="btn">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
