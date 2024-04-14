import { useSelector } from "react-redux";
import logo from '../images/logo.svg';
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <div className={`${isSidebarOpen ? '' : 'hidden'} min-h-screen h-full transition-all`}>
      <header>
        <img src={logo} alt="" className="w-48" />
      </header>
      <NavLinks />
    </div>
  )
}

export default BigSidebar