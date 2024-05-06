import React from "react";
import logo from "/assets/logo.svg";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl m-auto px-4 py-3">
        <div className="flex gap-x-56 items-center justify-between">
          {/* Brand Logo  */}
          <div>
            <img src={logo} alt="bazaar " />
          </div>
          {/* search button  */}
          <div className="flex grow items-center gap-x-2 px-5 bg-theme-slate">
            <div className="h-full">
              <IoSearch className="text-2xl" />
            </div>
            <div className="h-6 border border-gray-300"></div>
            <div className="grow h-full">
              <input
                className="h-10 w-full border-none outline-none bg-theme-slate"
                type="text"
                placeholder="Searching for ..."
              />
            </div>
            <div className="h-8 border border-gray-300"></div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="h-8 flex gap-x-2 items-center justify-between whitespace-nowrap  py-o m-0"
              >
                <div>all categories</div>
                <div>
                  <MdChevronRight  className="rotate-90"/>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-1 dropdown-content bg-white z-[1] menu p-2   rounded-md w-36 border-xl border-gray-300 shadow-lg"
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
            <div>
              <button className="p-2 rounded-full hover:bg-theme-slate">
                <FaRegUser className="text-xl" />
              </button>
            </div>
            <div>
              <button className="p-2 rounded-full hover:bg-theme-slate">
                <IoBagOutline className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
