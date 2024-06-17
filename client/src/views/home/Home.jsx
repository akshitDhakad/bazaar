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
import { GiStarGate } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";

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
            <span className="text-2xl font-semibold text-gray-800">
              Flash Deals
            </span>
          </div>
          <div>
            <CarouselGrid />
          </div>
        </div>
        {/* CollectionGrid */}
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
      {/* Top Rating and Freatured Brand */}
      <section>
        <div className="max-w-7xl px-4 py-10">
          <div className="grid grid-cols-2 gap-x-10">
            {/* Top Rating  */}
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <span>
                    <GiStarGate className="text-4xl text-yellow-600" />
                  </span>
                  <span className="text-2xl font-semibold text-gray-800">
                    Top Categories
                  </span>
                </div>
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <span>View All</span>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                </div>
              </div>
              <div className="h-56 bg-white grid grid-cols-4 gap-x-5 p-4">
                {/* card 1 */}
                <div className="flex flex-col gap-y-2">
                  <div className="h-24 border border-gray-300 bg-gray-100 rounded-lg overflow-hidden relative hover:cursor-pointer  hover:opacity-30 transition-opacity duration-300">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="https://media.istockphoto.com/id/96826250/photo/digital-camera-with-clipping-path.jpg?s=612x612&w=0&k=20&c=ceAF827zi_UfczajJAWkXowWxdu5tfisZHRoCiSq94w="
                      alt="Bazaare"
                    />
                  </div>
                  <div className="p-1 flex flex-col gap-2 items-center justify-between">
                    <div className="flex items-center text-xs gap-x-1 text-yellow-700">
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>{"()"}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Camera</h3>
                    </div>
                    <div>
                      <h3 className="font-semibold text-theme-red">
                        $3,300.00
                      </h3>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="flex flex-col gap-y-2">
                  <div className="h-24 border border-gray-300 bg-gray-100 rounded-lg overflow-hidden relative hover:cursor-pointer hover:opacity-75 transition-opacity duration-300">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="https://t3.ftcdn.net/jpg/01/21/81/86/360_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg"
                      alt="Bazaare"
                    />
                  </div>
                  <div className="p-1 flex flex-col gap-2 items-center justify-between">
                    <div className="flex items-center text-xs gap-x-1 text-yellow-700">
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>{"()"}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Shoes</h3>
                    </div>
                    <div>
                      <h3 className="font-semibold text-theme-red">
                        $1,400.00
                      </h3>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className="flex flex-col gap-y-2">
                  <div className="h-24 border border-gray-300 bg-gray-100 rounded-lg overflow-hidden relative hover:cursor-pointer hover:opacity-75 transition-opacity duration-300">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png"
                      alt="Bazaare"
                    />
                  </div>
                  <div className="p-1 flex flex-col gap-2 items-center justify-between">
                    <div className="flex items-center text-xs gap-x-1 text-yellow-700">
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>{"()"}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                    </div>
                    <div>
                      <h3 className="font-semibold text-theme-red">
                        $10,600.00
                      </h3>
                    </div>
                  </div>
                </div>
                {/* card 4 */}
                <div className="flex flex-col gap-y-2">
                  <div className="h-24 border border-gray-300 bg-gray-100 rounded-lg overflow-hidden relative hover:cursor-pointer hover:opacity-75 transition-opacity duration-300">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                      src="https://img0.junaroad.com/uiproducts/18689620/zoom_0-1669009918.jpg"
                      alt="Bazaare"
                    />
                  </div>
                  <div className="p-1 flex flex-col gap-2 items-center justify-between">
                    <div className="flex items-center text-xs gap-x-1 text-yellow-700">
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>
                        <IoIosStar />
                      </span>
                      <span>{"()"}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Watch</h3>
                    </div>
                    <div>
                      <h3 className="font-semibold text-theme-red">
                        $3,300.00
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Featured Brand  */}
            <div className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <span>
                    <IoIosStar className="text-4xl text-yellow-600" />
                  </span>
                  <span className="text-2xl font-semibold text-gray-800">
                    Top Categories
                  </span>
                </div>
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <span>View All</span>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                </div>
              </div>
              <div className="h-56 bg-white grid grid-cols-2 gap-x-5 p-4">
                {/* card 1 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="h-48 rounded-xl overflow-hidden">
                    <img
                      className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdQg7KS2bAYmNhowp-xoT7jHQ7iRMNzmJ5A&s"
                      alt="Loandon Britches"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                  <div className="mt-2">
                    <p>Loandon Britches</p>
                  </div>
                </div>
                {/* card 2 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="h-48 rounded-xl overflow-hidden ">
                    <img
                      className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakeP4ZqHtnG10ioaRrHidQCxxCV5o0K4ACg&s"
                      alt="Loandon Britches"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                  <div className="mt-2">
                    <p>Loandon Britches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Arrivals */}
      <section>
        <div className="max-w-7xl px-4 py-10">
          {/* Featured Brand  */}
          <div className="w-full flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <span>
                  <IoIosStar className="text-4xl text-yellow-600" />
                </span>
                <span className="text-2xl font-semibold text-gray-800">
                  Top Categories
                </span>
              </div>
              <div className="flex items-center gap-x-2 cursor-pointer">
                <span>View All</span>
                <span>
                  <IoMdArrowDropright />
                </span>
              </div>
            </div>
            <div className=" bg-white grid grid-cols-6 gap-x-5 p-4">
              {/* card 1 */}
              <div className=" group overflow-hidden rounded-xl">
                <div className="relative h-42 rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGv_TPjNqnfIc-nLHZ5DPtJzQbwnOjfvl0g&s"
                    alt="Loandon Britches"
                  />
                  <div className="absolute  inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-xl"></div>
                </div>
                <div className="mt-2 text-center md:text-start">
                  <p className="font-semibold">Sun Glasses</p>
                  <h3 className="font-semibold text-sm text-theme-red">
                    $150.00
                  </h3>
                </div>
              </div>
              {/* card 2 */}
              <div className=" group overflow-hidden rounded-xl">
                <div className="relative h-42 rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://www.theushop.in/cdn/shop/products/27182_S1-8901030826900_600x.jpg?v=1631876273"
                    alt="Loandon Britches"
                  />
                  <div className="absolute  inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-xl"></div>
                </div>
                <div className="mt-2 text-center md:text-start">
                  <p className="font-semibold">Make Up</p>
                  <h3 className="font-semibold text-sm text-theme-red">
                    $3,300.00
                  </h3>
                </div>
              </div>
              {/* card 3 */}
              <div className=" group overflow-hidden rounded-xl">
                <div className="relative h-42 rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://m.media-amazon.com/images/I/61Famx7xQwL._AC_UF1000,1000_QL80_.jpg"
                    alt="Loandon Britches"
                  />
                  <div className="absolute  inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-xl"></div>
                </div>
                <div className="mt-2 text-center md:text-start">
                  <p className="font-semibold">Smart Watches</p>
                  <h3 className="font-semibold text-sm text-theme-red">
                    $3,300.00
                  </h3>
                </div>
              </div>
              {/* card 4 */}
              <div className=" group overflow-hidden rounded-xl">
                <div className="relative h-42 rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://images.mamaearth.in/catalog/product/t/u/tulip_magenta_swatch_copy.jpg?format=auto&height=600"
                    alt="Loandon Britches"
                  />
                  <div className="absolute  inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-xl"></div>
                </div>
                <div className="mt-2 text-center md:text-start">
                  <p className="font-semibold">Lipsticks</p>
                  <h3 className="font-semibold text-sm text-theme-red">
                    $300.00
                  </h3>
                </div>
              </div>
              {/* card 5 */}
              <div className=" group overflow-hidden rounded-xl">
                <div className="relative h-42 rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://cdn.shopify.com/s/files/1/0507/3754/5401/t/1/assets/C28-4893_LOL_preset_proflowers-mx-tile-wide-lv-new.jpeg?v=1647905473&width=1920"
                    alt="Loandon Britches"
                  />
                  <div className="absolute  inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-xl"></div>
                </div>
                <div className="mt-2 text-center md:text-start">
                  <p className="font-semibold">Green Plant</p>
                  <h3 className="font-semibold text-sm text-theme-red">
                    $3,300.00
                  </h3>
                </div>
              </div>
              {/* card 6 */}
              <div className=" group overflow-hidden rounded-xl">
                <div className="relative h-42 rounded-xl overflow-hidden">
                  <img
                    className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdQg7KS2bAYmNhowp-xoT7jHQ7iRMNzmJ5A&s"
                    alt="Loandon Britches"
                  />
                  <div className="absolute  inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-xl"></div>
                </div>
                <div className="mt-2 text-center md:text-start">
                  <p className="font-semibold">Loandon Britches</p>
                  <h3 className="font-semibold text-sm text-theme-red">
                    $3,300.00
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Collection Grid  */}
      <section>
        <div className="max-w-7xl px-4 py-10 flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <span>
                <AiFillProduct className="text-4xl text-theme-red" />
              </span>
              <span className="text-2xl font-semibold text-gray-800">
                Categories
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <span>View All</span>
              <span>
                <IoMdArrowDropright />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-5 gap-y-5">
            {/* card 1  */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F7.DenimClassicBlueJeans.png&w=128&q=75"
                  alt="Denim Classic Blue Jeans"
                />
              </div>
              <div className="flex-1">Automobile</div>
            </div>
            {/* card 2  */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=128&q=75"
                  alt="Denim Classic Blue Jeans"
                />
              </div>
              <div className="flex-1">Dress</div>
            </div>
            {/* card 3  */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FJewellery%2F8.IndianPearlThreadEarrings.png&w=128&q=75"
                  alt="Ear rings"
                />
              </div>
              <div className="flex-1 ">Ear rings</div>
            </div>
            {/* card 4  */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FJewellery%2F21.FeathersandBeadsBohemianNecklace.png&w=128&q=75"
                  alt="neckles"
                />
              </div>
              <div className="flex-1 ">Neckles</div>
            </div>
            {/* card 5  */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FShoes%2F11.Flowwhite.png&w=128&q=75"
                  alt="shoes"
                />
              </div>
              <div className="flex-1 ">shoes</div>
            </div>
            {/* card 6  */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F1.SaktiSambarPowder.png&w=128&q=75"
                  alt="Ear rings"
                />
              </div>
              <div className="flex-1 ">Glocery</div>
            </div>
            {/* card 7 */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F27.SardinesPack.png&w=128&q=75"
                  alt="Soap"
                />
              </div>
              <div className="flex-1 ">Soap</div>
            </div>
            {/* card 8 */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F14.ACIProducts.png&w=128&q=75"
                  alt="Ear rings"
                />
              </div>
              <div className="flex-1 ">Glocery</div>
            </div>
            {/* card 9 */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FHealth%26Beauty%2F12.BeautySocietyantiacnemask.png&w=128&q=75"
                  alt="Ear rings"
                />
              </div>
              <div className="flex-1 ">Electronics</div>
            </div>
            {/* card 10 */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FHealth%26Beauty%2F25.MarioBadescuSkinCareShampoo.png&w=128&q=75"
                  alt="Ear rings"
                />
              </div>
              <div className="flex-1 ">Electronics</div>
            </div>
            {/* card 11 */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FHome%26Garden%2F13.GardenRosesinBlueVase.png&w=128&q=75"
                  alt="Ear rings"
                />
              </div>
              <div className="flex-1 ">Electronics</div>
            </div>
            {/* card 12 */}
            <div className="h-20  bg-white p-4 border shadow flex items-center justify-between hover:cursor-pointer">
              <div className="h-full w-16">
                <img
                  loading="lazy"
                  className="h-full w-full object-center object-cover"
                  src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F12.Xiaomimiband2.png&w=128&q=75"
                  alt="Ear rings"
                />
              </div>
              <div className="flex-1 ">Electronics</div>
            </div>
          </div>
        </div>
      </section>
      {/* More For you  */}
      <section>
        <div className="max-w-7xl px-4 py-10">
          <div className="flex items-center gap-x-2">
            <span className="text-2xl font-semibold text-gray-800">
              More For You
            </span>
          </div>
          <div>
            <CarouselGrid />
          </div>
        </div>
        {/* CollectionGrid */}
      </section>
      {/*  Worldwide Delivery */}
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
