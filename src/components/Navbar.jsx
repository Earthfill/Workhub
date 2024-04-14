import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, toggleSidebar, toggleTheme } from "../features/user/userSlice";
import logo from '../images/logo.svg';
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { isSidebarOpen } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  }

  return (
    <div className="navbar md:p-8">
      <div className="navbar-start">
        <button onClick={toggle} className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </button>
      </div>

      <div className="navbar-center -ml-24 md:hidden">
        <img src={logo} alt="" className="w-36"/>
      </div>

      <div className="navbar-center hidden md:block">
        <a className="btn btn-ghost text-xl tracking-wider">Dashboard</a>
      </div>

      <div className="navbar-end pr-4">
        <div className="flex flex-col">
          <div
            className="flex gap-3 cursor-pointer items-center bg-primary text-base-100 rounded-md py-1 px-3 capitalize"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name.split(' ')[0]}
            <FaCaretDown />
          </div>
          <div className={`transition-all duration-300 ${showLogout ? 'absolute right-6 top-[80px] lg:right-12' : 'hidden'}`}>
            <Link 
              to="/landing"
              className="font-semibold text-primary rounded-md bg-accent py-1 px-[36px] lg:mt-2"
              onClick={() => dispatch(logoutUser('Logging out...'))}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar