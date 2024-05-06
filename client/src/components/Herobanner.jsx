import React from "react";

function Herobanner() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl px-4 grid grid-cols-2 gap-x-40">
        {/* content  */}
        <div className="flex flex-col gap-y-5 justify-center">
          <div>
            <h2 className="text-6xl text-gray-800 font-semibold">
              50% off For Your <br /> First Shopping
            </h2>
          </div>
          <div>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              minima quisquam dolore amet incidunt culpa sint quidem laboriosam
              laborum quam!
            </p>
          </div>
          <div>
            <button className="bg-theme-red px-10 py-3 rounded-md text-white font-semibold">
                Shop Now
            </button>
          </div>
        </div>
        {/* img  */}
        <div className="h-96 w-96 ">
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src="https://bazaar.ui-lib.com/assets/images/products/nike-black.png"
            alt="bazaar"
          />
        </div>
      </div>
    </section>
  );
}

export default Herobanner;
