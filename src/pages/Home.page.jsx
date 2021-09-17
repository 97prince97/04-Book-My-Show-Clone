import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Premier from "../components/Premier/Premier.component";

const HomePage = () => {
  return (
    <>
      <div className=" flex flex-col gap-16">
        <div className="container mx-auto px-28">
          <h1 className="text-2xl font-bold text-gray-800 my-3 pl-4">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-navBarColor-900 py-8">
          <div className="container mx-auto px-28 flex flex-col gap-3">
            <div className="hidden md:flex pl-4 pb-12">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Premier"
                className="w-full h-full"
              />
            </div>
            <Premier />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
