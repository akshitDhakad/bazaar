import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Topbanner() {
  return (
    <section className="bg-theme-blue">
      <div className="max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* left  */}
        <div className="flex items-center gap-x-3">
          <div>
            <button className="bg-theme-red font-bold text- px-3 rounded-xl text-white">
              HOT
            </button>
          </div>
          <div>
            <p className="text-xs text-white font-semibold">
              Free Express Shipping
            </p>
          </div>
        </div>
        {/* right  */}
        <div className="flex items-center gap-x-3 text-white">
          <div></div>
          <div>
            <Link to={""}>
              <FaInstagram />
            </Link>
          </div>
          <div>
            <Link to={""}>
              <FaFacebook />
            </Link>
          </div>
          <div>
            <Link to={""}>
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topbanner