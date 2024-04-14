import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'all jobs', path: '/all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'add job', path: '/add-job', icon: <FaWpforms /> },
  { id: 4, text: 'profile', path: '/profile', icon: <ImProfile /> },
];

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div>
      {links.map((link) => {
        const { id, path, text, icon } = link;
        return (
          <NavLink 
            to={path}
            key={id}
            onClick={toggleSidebar} 
            className={({ isActive }) => {
              return isActive ? 'flex gap-x-4 pb-5 capitalize items-center justify-start pl-6 hover:p-5 hover:bg-accent' : 'flex gap-x-4 pb-5 capitalize items-center justify-start pl-6 hover:text-primary'
            }}
          >
            <span className="text-primary">{icon}</span>
            {text}  
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavLinks