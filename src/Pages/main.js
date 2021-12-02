import React from "react";
import WeatherApp from "./WeatherApp";
import City from "./City";
import ER from "./ER";

function Main() {
  return (
    <div className="h-screen w-screen bg-red-200 flex flex-col p-20 items-center">
      <h1 className="text-3xl text-gray-400 drop-shadow-2xl -pt-5 pb-10">
        Wheather app
      </h1>
      <div className="flex  justify-center items-center ">
        <WeatherApp />
        <div className="flex flex-col mt-5">
          <City />
          <ER />
        </div>
      </div>
    </div>
  );
}

export default Main;
