import React from "react";

function HeadLineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4 ">Sun's out BOGO's Out</p>
            <p className="px-2">Through 8/29</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[200px] md:mx-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/2345975/pexels-photo-2345975.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
      </div>
      {/* cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4 ">New Restaurant</p>
            <p className="px-2">Added Daily</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[200px] md:mx-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
      </div>
      {/* cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4 ">Fresh Testy Food</p>
            <p className="px-2">Best Treat</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
        className="max-h-[200px] md:mx-h-[200px] w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
      </div>
    </div>
  );
}

export default HeadLineCards;
