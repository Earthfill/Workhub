import { useSelector } from "react-redux";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <main className="flex overflow-hidden">
      {/* Small Sidebar */}
      <div className="md:hidden"> {/* Hide on smaller screens */}
        <SmallSidebar />
      </div>

      {/* Big Sidebar (conditionally rendered based on isSidebarOpen) */}
      {isSidebarOpen && (
        <div className="w-64 hidden md:block">
          <BigSidebar />
        </div>
      )}

      <div className="flex-1">
        {/* Navbar */}
        <div className="">
          <Navbar />
        </div>

        {/* Outlet (main content area) */}
        <div className="2xl:max-w-full md:mx-auto md:max-w-screen-2xl md:px-12 bg-gray-50 h-full align-element py-8">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default SharedLayout;