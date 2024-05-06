import React from "react";
import Layout from "../../components/Layout";
import Herobanner from "../../components/Herobanner";
import CollectionGrid from "../../components/CollectionGrid";
// icons
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import CarouselGrid from "../../components/Carousel";
import { MdFlashOn } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";

export default function Home() {
  return (
    <Layout>
      <Herobanner />
      {/* flash grid  */}
      <section>
        <div className="max-w-7xl px-4 py-10">
          <div className="flex items-center gap-x-2">
            <span>
              <MdFlashOn className="rotate-[30deg] text-4xl text-theme-red" />
            </span>
            <span className="text-2xl font-bold text-gray-800">
              Flash Deals
            </span>
          </div>
          <div>
            <CarouselGrid />
          </div>
        </div>
      </section>
      {/* CollectionGrid  */}
      <section>
        <div className="max-w-7xl px-4 py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <span>
                <AiFillProduct className="text-4xl text-theme-red" />
              </span>
              <span className="text-2xl font-bold text-gray-800">
                Top Categories
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>View All</span>
              <span>
                <IoMdArrowDropright />
              </span>
            </div>
          </div>
          <div>
            <CollectionGrid />
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl px-4 py-10 grid grid-cols-4 gap-x-10">
          {/* Worldwide Delivery */}
          <div className="h-72 bg-white border shadow-md rounded-lg p-10 flex flex-col items-center gap-y-2 justify-center  ">
            <div className="p-3 rounded-full bg-theme-slate border shadow hover:bg-gray-200 hover:cursor-pointer">
              <FaTruckFast className="text-4xl text-gray-700" />
            </div>
            <h2 className="text-center text-xl font-semibold whitespace-nowrap">
              Worldwide Delivery
            </h2>
            <p className="text-gray-600 text-sm text-center">
              We offer competitive prices on our 100 million plus product any
              range.
            </p>
          </div>
          {/* Safe Payment */}
          <div className="h-72 bg-white border shadow-md rounded-lg p-10 flex flex-col items-center gap-y-2 justify-center  ">
            <div className="p-3 rounded-full bg-theme-slate border shadow hover:bg-gray-200 hover:cursor-pointer">
              <RiSecurePaymentLine className="text-4xl text-gray-700" />
            </div>
            <h2 className="text-center text-xl font-semibold whitespace-nowrap">
              Safe Payment
            </h2>
            <p className="text-gray-600 text-sm text-center">
              We offer competitive prices on our 100 million plus product any
              range.
            </p>
          </div>
          {/* Shop With Confidence */}
          <div className="h-72 bg-white border shadow-md rounded-lg p-10 flex flex-col items-center gap-y-2 justify-center  ">
            <div className="p-3 rounded-full bg-theme-slate border shadow hover:bg-gray-200 hover:cursor-pointer">
              <IoShieldCheckmarkOutline className="text-4xl text-gray-700" />
            </div>
            <h2 className="text-center text-xl font-semibold whitespace-nowrap">
              Shop With Confidence
            </h2>
            <p className="text-gray-600 text-sm text-center">
              We offer competitive prices on our 100 million plus product any
              range.
            </p>
          </div>
          {/* 24/7 Support */}
          <div className="h-72 bg-white border shadow-md rounded-lg p-10 flex flex-col items-center gap-y-2 justify-center  ">
            <div className="p-3 rounded-full bg-theme-slate border shadow hover:bg-gray-200 hover:cursor-pointer">
              <BiSupport className="text-5xl text-gray-700" />
            </div>
            <h2 className="text-center text-xl font-semibold whitespace-nowrap">
              24/7 Support
            </h2>
            <p className="text-gray-600 text-sm text-center">
              We offer competitive prices on our 100 million plus product any
              range.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
