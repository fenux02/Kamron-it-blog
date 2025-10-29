import { Link, NavLink } from "react-router-dom";
import { headerLinks } from "../data";

const Header = () => {
  return (
    <header className="fixed w-full bg-gray-800/95 backdrop-blur-sm z-50 shadow-xl">
      <div className="container mx-auto px-6 py-4  justify-between items-center">
        <div className="mx-auto px-6 py-4 flex justify-between items-center">
          <Link to={"/"} className="text-[25px]  font-bold text-[#fff]  space-x-2 transition-transform hover:scale-105 header-logo  gradient-text">
            Kamron It Blog
          </Link>

          <nav className="flex items-center gap-5">
            {headerLinks.map((el) => (
              <NavLink className={({ isActive }) => isActive ? "text-gray-300 text-[15px]" : "flex items-center space-x-2 text-[20px] text-[#fff] transition-transform hover:scale-105 header-logo hover:text-gray-300 "} key={el.id} to={el.to}>
                {el.text}
              </NavLink>
            ))}
          </nav>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-gray-800 px-6 py-4">
          <div class="flex flex-col space-y-4">
            <a href="#home" class="hover:gradient-text transition-colors">Home</a>
            <a href="javascript:void(0);" onclick="openProjectsPage()" class="hover:gradient-text transition-colors">Projects</a>
            <a href="#contact" class="hover:gradient-text transition-colors">Contact</a>
          </div>
        </div>
        </div>

    </header>
  );
};

export default Header;
