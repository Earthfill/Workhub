import logo from '../images/logo.svg';
import { FaTimes } from "react-icons/fa";
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="lg:hidden">
      {/* Sidebar container with conditional visibility */}
      <aside className={`fixed inset-0 z-50 bg-black bg-opacity-70 transition-opacity ${isSidebarOpen ? 'block' : 'hidden'}`}>
        {/* Sidebar content */}
        <div className="flex items-center justify-center h-5/6 bg-white mt-12 mx-5 rounded-lg">
          <div className="flex flex-col items-center bg-white rounded-lg max-w-md -mt-36">
            {/* Close button */}
            <button 
              onClick={toggle} 
              className="absolute top-[50px] left-6 text-red-700 text-2xl cursor-pointer"
            >
              <FaTimes />
            </button>
            {/* Logo */}
            <header className="text-center mb-8">
              <img src={logo} alt="Logo" className="w-52" />
            </header>
            {/* Navigation links */}
            <nav className="text-center">
              <NavLinks toggleSidebar={toggle} />
            </nav>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default SmallSidebar