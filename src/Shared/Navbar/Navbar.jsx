import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link>Statistics </Link>
      </li>
      <li>
        <Link>Applied Jobs </Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 md:px-10 md:py-8 py-4">
        <div className="navbar-start">
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
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <span className="md:text-xl font-bold font-Manrope">
              Career Hub
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-[#7e98fe] to-[#9873ff] text-white btn-sm md:btn-md">
            Start Applying
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
