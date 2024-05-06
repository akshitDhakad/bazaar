import React from "react";
import logo from "/assets/logo.svg";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-7xl m-auto px-4 py-3">
        <div className="flex gap-x-56 items-center justify-between">
          {/* catagories */}
          <div className="flex items-center gap-x-2 px-2 bg-theme-slate">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="h-8 w-56 flex gap-x-2 items-center justify-between whitespace-nowrap m-0"
              >
                <div className="flex items-center gap-x-2 py-1 text-md text-gray-800">
                  <BiCategory className="text-2xl" /> <span>Categories</span>
                </div>
                <div>
                  <MdChevronRight className="hover:rotate-90" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-1 w-56 dropdown-content bg-white z-[1] menu px-2   rounded-md  border-xl border-gray-300 shadow-lg"
              >
                <li>
                  <Link>All Categories</Link>
                </li>
                <li>
                  <Link>Car</Link>
                </li>
                <li>
                  <Link>Clothes</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Tv</Link>
                </li>
                <li>
                  <Link>Electronics</Link>
                </li>
                <li>
                  <Link>Toy</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons  */}
          <div className="flex items-center gap-x-">
            {/* Home  */}
            <div className="flex items-center gap-x-2 px-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="h-8  flex gap-x-5 items-center justify-between whitespace-nowrap   m-0"
                >
                  <div className="flex items-center gap-x-2 rounded-lg text-gray-800 text-sm">
                    <span>Home</span> <FaAngleDown className="text-xs" />
                  </div>
                  <div></div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-1 w-56 dropdown-content bg-white z-[1] menu px-2   rounded-md  border-xl border-gray-300 shadow-lg"
                >
                  <li>
                    <Link>All Categories</Link>
                  </li>
                  <li>
                    <Link>Car</Link>
                  </li>
                  <li>
                    <Link>Clothes</Link>
                  </li>
                  <li>
                    <Link>Laptop</Link>
                  </li>
                  <li>
                    <Link>Mobile</Link>
                  </li>
                  <li>
                    <Link>Tv</Link>
                  </li>
                  <li>
                    <Link>Electronics</Link>
                  </li>
                  <li>
                    <Link>Toy</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Mega Menu */}
            <div className="flex items-center gap-x-2 px-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="h-8  flex gap-x-2 items-center justify-between whitespace-nowrap   m-0"
                >
                  <div className="flex items-center gap-x-2 rounded-lg text-gray-800 text-sm">
                    <span> Mega Menu</span> <FaAngleDown className="text-xs" />
                  </div>
                  <div></div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-1 w-56 dropdown-content bg-white z-[1] menu px-2   rounded-md  border-xl border-gray-300 shadow-lg"
                >
                  <li>
                    <Link>All Categories</Link>
                  </li>
                  <li>
                    <Link>Car</Link>
                  </li>
                  <li>
                    <Link>Clothes</Link>
                  </li>
                  <li>
                    <Link>Laptop</Link>
                  </li>
                  <li>
                    <Link>Mobile</Link>
                  </li>
                  <li>
                    <Link>Tv</Link>
                  </li>
                  <li>
                    <Link>Electronics</Link>
                  </li>
                  <li>
                    <Link>Toy</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Full Screen Menu */}
            <div className="flex items-center gap-x-2 px-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="h-8  flex gap-x-2 items-center justify-between whitespace-nowrap   m-0"
                >
                  <div className="flex items-center gap-x-2 rounded-lg text-gray-800 text-sm">
                    <span> Full Screen Menu</span>{" "}
                    <FaAngleDown className="text-xs" />
                  </div>
                  <div></div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-1 w-56 dropdown-content bg-white z-[1] menu px-2   rounded-md  border-xl border-gray-300 shadow-lg"
                >
                  <li>
                    <Link>All Categories</Link>
                  </li>
                  <li>
                    <Link>Car</Link>
                  </li>
                  <li>
                    <Link>Clothes</Link>
                  </li>
                  <li>
                    <Link>Laptop</Link>
                  </li>
                  <li>
                    <Link>Mobile</Link>
                  </li>
                  <li>
                    <Link>Tv</Link>
                  </li>
                  <li>
                    <Link>Electronics</Link>
                  </li>
                  <li>
                    <Link>Toy</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* pages */}
            <div className="flex items-center gap-x-2 px-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="h-8  flex gap-x-2 items-center justify-between whitespace-nowrap   m-0"
                >
                  <div className="flex items-center gap-x-2 rounded-lg text-gray-800 text-sm">
                    <span>Pages</span> <FaAngleDown className="text-xs" />
                  </div>
                  <div></div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-1 w-56 dropdown-content bg-white z-[1] menu px-2   rounded-md  border-xl border-gray-300 shadow-lg"
                >
                  <li>
                    <Link>All Categories</Link>
                  </li>
                  <li>
                    <Link>Car</Link>
                  </li>
                  <li>
                    <Link>Clothes</Link>
                  </li>
                  <li>
                    <Link>Laptop</Link>
                  </li>
                  <li>
                    <Link>Mobile</Link>
                  </li>
                  <li>
                    <Link>Tv</Link>
                  </li>
                  <li>
                    <Link>Electronics</Link>
                  </li>
                  <li>
                    <Link>Toy</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* User Account */}
            <div className="flex items-center gap-x-2 px-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="h-8  flex gap-x-2 items-center justify-between whitespace-nowrap   m-0"
                >
                  <div className="flex items-center gap-x-2 rounded-lg text-gray-800 text-sm">
                    <span> User Account</span>{" "}
                    <FaAngleDown className="text-xs" />
                  </div>
                  <div></div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-1 w-56 dropdown-content bg-white z-[1] menu px-2   rounded-md  border-xl border-gray-300 shadow-lg"
                >
                  <li>
                    <Link>All Categories</Link>
                  </li>
                  <li>
                    <Link>Car</Link>
                  </li>
                  <li>
                    <Link>Clothes</Link>
                  </li>
                  <li>
                    <Link>Laptop</Link>
                  </li>
                  <li>
                    <Link>Mobile</Link>
                  </li>
                  <li>
                    <Link>Tv</Link>
                  </li>
                  <li>
                    <Link>Electronics</Link>
                  </li>
                  <li>
                    <Link>Toy</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Vendor Account */}
            <div className="flex items-center gap-x-2 px-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="h-8  flex gap-x-2 items-center justify-between whitespace-nowrap   m-0"
                >
                  <div className="flex items-center gap-x-2 rounded-lg text-gray-800 text-sm">
                    <span> Vendor Account</span>{" "}
                    <FaAngleDown className="text-xs" />
                  </div>
                  <div></div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-1 w-56 dropdown-content bg-white z-[1] menu px-2   rounded-md  border-xl border-gray-300 shadow-lg"
                >
                  <li>
                    <Link>All Categories</Link>
                  </li>
                  <li>
                    <Link>Car</Link>
                  </li>
                  <li>
                    <Link>Clothes</Link>
                  </li>
                  <li>
                    <Link>Laptop</Link>
                  </li>
                  <li>
                    <Link>Mobile</Link>
                  </li>
                  <li>
                    <Link>Tv</Link>
                  </li>
                  <li>
                    <Link>Electronics</Link>
                  </li>
                  <li>
                    <Link>Toy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
