import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logoutUser();
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown z-50">
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
              className="menu menu-lg dropdown-content bg-white bg-opacity-70 backdrop-blur-md rounded-box z-[100] mt-3 w-80 p-2 shadow-lg"
            >
              <li>
                <a href="/" className="transition duration-200 text-black hover:text-gray-700">Home</a>
              </li>
              <li>
                <a href="/available-foods" className="transition text-black duration-200 hover:text-gray-700">Available Foods</a>
              </li>
              {user && (
                <>
                  <li>
                    <a href="/add-food" className="transition text-black duration-200 hover:text-gray-700">Add Food</a>
                  </li>
                  <li>
                    <a href="/manage-foods" className="transition text-black duration-200 hover:text-gray-700">Manage My Foods</a>
                  </li>
                  <li>
                    <a href="/my-requests" className="transition text-black duration-200 hover:text-gray-700">My Food Request</a>
                  </li>
                </>
              )}
              {!user && (
                <>
                  <li>
                    <a href="/login" className="transition text-black duration-200 hover:text-gray-700">Login</a>
                  </li>
                  <li>
                    <a href="/signup" className="transition text-black duration-200 hover:text-gray-700">Signup</a>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold text-white" href="/">
          Nazirabazar
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/available-foods">Available Foods</a>
            </li>
            {user && (
              <>
                <li>
                  <a href="/add-food">Add Food</a>
                </li>
                <li>
                  <a href="/manage-foods">Manage My Foods</a>
                </li>
                <li>
                  <a href="/my-requests">My Food Request</a>
                </li>
              </>
            )}
            {!user && (
              <>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/signup">Signup</a>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.photoURL || "/default-profile.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <a href="/login" className="btn btn-primary btn-sm">
                Login
              </a>
              <a href="/signup" className="btn btn-secondary btn-sm">
                Signup
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
