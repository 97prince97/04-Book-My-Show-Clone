import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const HomePage = () => {
  return (
    <>
      <div className="mx-auto px-28">
        <h1 className="text-2xl font-bold text-gray-800 my-3 pl-4">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
    </>
  );
};

export default HomePage;
