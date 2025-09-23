import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import logo from "../imgs/icon-bookshare.png";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const greenPages = [""];

  const bgClass = greenPages.includes(location.pathname)
    ? "bg-verde"
    : "bg-bege";

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Sobre", path: "/sobre" },
  ];

  return (
    <header
      className={`${bgClass} sticky top-0 z-50 transition-shadow duration-300 overflow-visible`}
    >
      <nav className="flex justify-between items-center h-[80px] px-6 md:px-20">
        <div className="hover:cursor-pointer" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="w-auto h-16 object-contain" />
        </div>
        <ul className="hidden md:flex gap-8 text-black">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`hover:underline underline-offset-[5px] transition-all duration-300 ${
                location.pathname === item.path
                  ? "opacity-100 underline"
                  : "opacity-50"
              }`}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon size={28} /> : <ListIcon size={28} />}
        </button>
      </nav>

      <div
        className={`${bgClass} md:hidden flex flex-col items-center gap-6 text-black text-lg transform transition-all duration-300 ease-in-out origin-top absolute top-[80px] left-0 w-full z-40 ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 scale-y-100 py-6 shadow-nav-scroll"
            : "max-h-0 opacity-0 scale-y-0 overflow-hidden"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`hover:underline underline-offset-[5px] transition-all duration-300 ${
              location.pathname === item.path
                ? "opacity-100 underline"
                : "opacity-50"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default NavBar;
