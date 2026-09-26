import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FcAbout } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-6 lg:px-8">

        <div className="flex h-full items-center">
          <NavLink to="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border-0.5 border-black bg-gradient-to-br from-indigo-600 to-violet-600 shadow-md shadow-indigo-200 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-indigo-300">
              <span className="text-lg font-extrabold text-white">B</span>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
                Book<span className="text-indigo-600">Hub</span>
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                Book Management
              </p>
            </div>
          </NavLink>
        </div>

        <div>
          <ul className="flex items-center gap-1 rounded-2xl border border-blue-50 bg-slate-50/80 px-3 py-1.5 shadow-sm">

            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `group flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "bg-gray-200 text-slate-600 shadow-black hover:bg-white hover:text-indigo-600 hover:shadow-sm"
                  }`
                }
              >
                <FaHome />
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/add-book"
                className={({ isActive }) =>
                  `group flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "bg-gray-200 text-slate-600 shadow-black hover:bg-white hover:text-indigo-600 hover:shadow-sm"
                  }`
                }
              >
                <IoIosAdd />
                ADD BOOK
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `group flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                      : "bg-gray-200 text-slate-600 shadow-black hover:bg-white hover:text-indigo-600 hover:shadow-sm"
                  }`
                }
              >
                <FcAbout />
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;