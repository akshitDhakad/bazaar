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
        {/* SERVICES */}
        <nav>
          <h6 className="footer-title text-white">SERVICES</h6>
          <Link to={"/brading"} className="link link-hover">
            Careers
          </Link>
          <Link to={"/design"} className="link link-hover">
            Our Stores
          </Link>
          <Link to={"/marketing"} className="link link-hover">
            Terms & Conditions
          </Link>
          <Link to={"/advertisements"} className="link link-hover">
            Privacy Policy
          </Link>
        </nav>
        {/* Customer Care */}
        <nav>
          <h6 className="footer-title text-white">Customer Care</h6>
          <Link to={"/about-us"} className="link link-hover">
            Help Center
          </Link>
          <Link to={"/contact-us"} className="link link-hover">
            Track Your Order
          </Link>
          <Link to={"/jobs"} className="link link-hover">
            Corporate & Bulk Purchasing
          </Link>
          <Link to={""} className="link link-hover">
            Returns & Refunds
          </Link>
        </nav>
        {/* contact us  */}
        <nav>
          <h6 className="footer-title text-white">Contact Us</h6>
          <Link to={"/terms-conditions"} className="link link-hover">
            70 Washington Square South, New York, NY 10012, United States
          </Link>
          <Link to={"/privacy-policy"} className="link link-hover">
            Email: bazaar.help@gmail.com
          </Link>
          <Link to={"/cookies-policy"} className="link link-hover">
            Phone: +91 8871713348
          </Link>
        </nav>
      </div>
      {/* Lowert footer  */}
      <div>
        <div className="bg-theme-blue p-5 text-gray-200">
          <p className="text-center">
            &copy; 2021 Bazaar. All rights reserved. Designed by
            <span className="text-theme-red mx-2">Webart Tech.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
