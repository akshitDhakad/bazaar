import React, { useState } from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

function calculateOriginalPrice(discountedPrice, discountPercentage) {
  return discountedPrice / (1 - discountPercentage / 100);
}

const CarouselGrid = () => {
  const items = [
    {
      id: 1,
      title: "NikeCourt Zoom Vapor Cage ",
      price: "187.50",
      off: "25",
      rating: "4.5",
      imgURl:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1080&q=75",
    },
    {
      id: 2,
      title: "Classic Rolex Watch",
      price: "297.50",
      off: "15",
      rating: "4.5",
      imgURl:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1080&q=75",
    },
    {
      id: 3,
      title: "IPhone 12 Pro Max 256GB",
      price: "108.00",
      off: "28",
      rating: "4.5",
      imgURl:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=1080&q=75",
    },
    {
      id: 4,
      title: "MI Led Smart Watch",
      price: "142.20",
      off: "21",
      rating: "4.5",
      imgURl:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1080&q=75",
    },
    {
      id: 5,
      title: "NikeCourt Zoom Vapor Cage ",
      price: "187.50",
      off: "25",
      rating: "4.5",
      imgURl:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1080&q=75",
    },
    {
      id: 6,
      title: "Classic Rolex Watch",
      price: "297.50",
      off: "15",
      rating: "4.5",
      imgURl:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=1080&q=75",
    },
    {
      id: 7,
      title: "IPhone 12 Pro Max 256GB",
      price: "108.00",
      off: "28",
      rating: "4.5",
      imgURl:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=1080&q=75",
    },
    {
      id: 8,
      title: "MI Led Smart Watch",
      price: "142.20",
      off: "21",
      rating: "4.5",
      imgURl:
        "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=1080&q=75",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex  <= 0) {
      setActiveIndex(3);
      return;
    }
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 4;
      return newIndex < 0 ? items.length - 4 : newIndex;
    });
  };

  const handleNext = () => {
    if (activeIndex + 4 >= items.length) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative  ">
      <div className="grid  grid-cols-4  gap-x-4 mt-2 mb-1">
        {items.slice(activeIndex, activeIndex + 4).map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-start p-2 justify-center gap-2 py-2  rounded-md shadow-md hover:shadow-md cursor-pointer bg-white"
          >
            <div className="absolute top-2 left-2">
              <button className="bg-theme-red font-thin text-white text-xs px-2 py-1 rounded-2xl">
                {item.off}% off
              </button>
            </div>
            <div className="h-72 ">
              <img
                loading="lazy"
                className="h-full w-auto object-cover object-center"
                src={`${item.imgURl}`}
                alt={`Havenhub-${item.name}-${item.imgURl}`}
              />
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <p className=" text-md">{item.title}</p>
              <p className="text-xs">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star text-xs bg-yellow-700"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star text-xs bg-yellow-700"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star text-xs bg-yellow-700"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star text-xs bg-yellow-700"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <span className="text-theme-red font-semibold">
                    ${parseFloat(item.price).toFixed(2)}
                  </span>
                  <span className="line-through text-gray-600 text-sm">
                    $
                    {calculateOriginalPrice(
                      parseFloat(item.price),
                      item.off
                    ).toFixed(2)}
                  </span>
                </div>
                <div>
                  <p className="p-1 border border-theme-red hover:border-red-900 rounded-md">
                    <FaPlus className="text-theme-red" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="absolute left-1 top-1/2 ">
        <IoIosArrowDropleftCircle className="text-4xl text-theme-red hover:text-red-900" />
      </button>
      <button onClick={handleNext} className="absolute right-1 top-1/2  ">
        <FaCircleChevronRight className="text-4xl text-theme-red hover:text-red-900" />
      </button>
    </div>
  );
};

export default CarouselGrid;
