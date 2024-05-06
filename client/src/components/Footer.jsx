import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      {/* upper footer  */}
      <div className="footer bg-theme-blue p-10  text-gray-200 grid-cols-5 gap-x-10">
        <aside className="col-span-2">
          <Link to={"/"}>
            <img src="/assets/logo-white.svg" alt="bazaar" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </p>
          <div className="mt-2 flex gap-x-5 items-center gapx">
            {/* google store paly button  */}
            <div className="flex bg-base-200 px-5 py-1 rounded-md items-center gap-x-2">
              <div className=" row-span-2">
                <img
                  loading="lazy"
                  className="h-6 auto object-cover"
                  src="/assets/icons/google-play.png"
                  alt="Bazaar Google Play Icon"
                />
              </div>
              <div>
                <p className="text-xs font-thin text-white">Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </div>
            {/* Apple store play button  */}
            <div className="flex bg-base-200 px-5 py-1 rounded-md items-center gap-x-2">
              <div className=" row-span-2">
                <img
                  loading="lazy"
                  className="h-6 auto object-cover"
                  src="/assets/icons/app-store.png"
                  alt="Bazaar Google Play Icon"
                />
              </div>
              <div>
                <p className="text-xs font-thin text-white">Download on the</p>
                <p className="font-bold">App Store</p>
              </div>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <Link to={"/brading"} className="link link-hover">
            Branding
          </Link>
          <Link to={"/design"} className="link link-hover">
            Design
          </Link>
          <Link to={"/marketing"} className="link link-hover">
            Marketing
          </Link>
          <Link to={"/advertisements"} className="link link-hover">
            Advertisement
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <Link to={"/about-us"} className="link link-hover">
            About us
          </Link>
          <Link to={"/contact-us"} className="link link-hover">
            Contact us
          </Link>
          <Link to={"/jobs"} className="link link-hover">
            Jobs
          </Link>
          <Link to={""} className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Legal</h6>
          <Link to={"/terms-conditions"} className="link link-hover">
            Terms of use
          </Link>
          <Link to={"/privacy-policy"} className="link link-hover">
            Privacy policy
          </Link>
          <Link to={"/cookies-policy"} className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </div>
      {/* Lowert footer  */}
      <div>
        <div className="bg-theme-blue p-5 text-gray-200">
          <p className="text-center">
            &copy; 2021 Bazaar. All rights reserved. Designed by
            <span className="text-theme-red"> UI Lib</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
