import React, { useState } from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

function calculateOriginalPrice(discountedPrice, discountPercentage) {
  return discountedPrice / (1 - discountPercentage / 100);
}

const CollectionGrid = () => {
  const items = [
    {
      id: 1,
      title: "Nike Shoes",
      price: "187.50",
      off: "25",
      rating: "4.5",
      imgURl: [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a8f819fc-8762-4cfc-80ea-994c82c760fc/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-cS7wct.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wIWpZbZyjshir37wijvobXdVfn6fOMbNfQ&s",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fb3501a-ed53-422a-a454-1bf116a13324/impact-4-basketball-shoes-CcJxBx.png",
      ],
    },
    {
      id: 2,
      title: "Rolex Watch",
      price: "297.50",
      off: "15",
      rating: "4.5",
      imgURl: [
        "https://hips.hearstapps.com/hmg-prod/images/best-rolex-watches-for-men-1592238259.jpg?crop=0.500xw:1.00xh;0.500xw,0&resize=640:*",
        "https://www.swisswatchexpo.com/images/custom-catalog-content/header/rolex-mens-vintage.jpg",
        "https://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/d4/4e/d44e11dd-fe4d-47fc-9801-7a8da853f1d2/rolex-cellini-time-everose-gold.jpg__760x0_q75_crop-scale_subsampling-2_upscale-false.jpg",
      ],
    },
    {
      id: 3,
      title: "IPhone 12",
      price: "108.00",
      off: "28",
      rating: "4.5",
      imgURl: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-max-silver-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202946000",
        "https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png",
        "https://d2xamzlzrdbdbn.cloudfront.net/products/82743929-739e-4ec3-806b-2d57fbc76344_416x416.jpg",
      ],
    },
    {
      id: 4,
      title: "Smart Watch",
      price: "142.20",
      off: "21",
      rating: "4.5",
      imgURl: [
        "https://images.meesho.com/images/products/118057648/b9piv_512.webp",
        "https://m.media-amazon.com/images/I/514cBZZxi3L._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/I/51h8V-4nsjL._AC_UF1000,1000_QL80_.jpg",
      ],
    },
    {
      id: 5,
      title: "Earphones",
      price: "187.50",
      off: "25",
      rating: "4.5",
      imgURl: [
        "https://m.media-amazon.com/images/I/61aocNxAWLL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
        "https://zebronics.com/cdn/shop/products/Zeb-Yoga-2-pic12.jpg?v=1635857414&width=1200",
        "https://m.media-amazon.com/images/I/61ijir6ozPL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      ],
    },
    {
      id: 6,
      title: "Sun Glasses",
      price: "297.50",
      off: "15",
      rating: "4.5",
      imgURl: [
        "https://www.urbanmonkey.com/cdn/shop/files/airplane-mode-006-sunglass-03.jpg?v=1705060475",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGv_TPjNqnfIc-nLHZ5DPtJzQbwnOjfvl0g&s",
        "https://rukminim2.flixcart.com/image/850/1000/l1zc6fk0/sunglass/d/e/z/medium-range-sunglasses-gainx-original-imagdezytckqth5z.jpeg?q=20&crop=false",
      ],
    },
    {
      id: 7,
      title: "Hp Laptop",
      price: "108.00",
      off: "28",
      rating: "4.5",
      imgURl: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCGoaCuLeawzVfD7cF0WSRfPIwXdJrM30FA&s",
        "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-5-Platinum-001-1:VP1-539x440",
        "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
      ],
    },
    {
      id: 8,
      title: "Toy Car",
      price: "142.20",
      off: "21",
      rating: "4.5",
      imgURl: [
        "https://t4.ftcdn.net/jpg/02/35/70/21/360_F_235702111_KkocG4AsR4dHy97wo8eQscrn4bKOXT4i.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA_YXECn3OBThBXUBxIw9iQxNqwos8tgg-uHm_pG3k4Q&s",
        "https://www.shutterstock.com/image-vector/toy-car-cartoon-vector-illustration-600nw-636992845.jpg",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex <= 0) {
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
      <div className="grid grid-cols-3 gap-x-10   mt-2 mb-1">
        {items.slice(activeIndex, activeIndex + 3).map((item) => (
          <div
            key={item.id}
            className="relative grid grid-cols-3 rounded-xl overflow-hidden hover:opacity-60 border shadow-md hover:shadow-md cursor-pointer bg-white"
          >
            <div className="absolute top-2 left-2">
              <button className="bg-theme-blue text-white text-xs px-2 py-1 rounded-2xl">
                {item.title}
              </button>
            </div>
            <div className="h-36 w-full">
              <img
                loading="lazy"
                className="h-full w-full object-cover object-center"
                src={`${item?.imgURl[0]}`}
                alt={`Havenhub-${item.name}-${item?.imgURl[0]}`}
              />
            </div>
            <div className="h-36 w-full">
              <img
                loading="lazy"
                className="h-full w-full  object-cover object-center"
                src={`${item?.imgURl[1]}`}
                alt={`Havenhub-${item.name}-${item?.imgURl[1]}`}
              />
            </div>
            <div className="h-36 w-full">
              <img
                loading="lazy"
                className="h-full w-full  object-cover object-center"
                src={`${item?.imgURl[2]}`}
                alt={`Havenhub-${item.name}-${item?.imgURl[2]}`}
              />
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="absolute left-1 top-1/3 ">
        <IoIosArrowDropleftCircle className="text-4xl text-theme-blue hover:text-base-900" />
      </button>
      <button onClick={handleNext} className="absolute right-1 top-1/3  ">
        <FaCircleChevronRight className="text-4xl text-theme-blue hover:text-base-900" />
      </button>
    </div>
  );
};

export default CollectionGrid;
