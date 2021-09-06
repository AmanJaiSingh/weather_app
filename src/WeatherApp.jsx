import React, { useEffect, useState } from "react";
import Menu from "./menu";
import Aman from "./imgs/Aman.jpg";
import Chhavi from "./imgs/Chhavi.jpg";

export default function WeatherApp() {
  const [city, setCity] = useState("Mumbai");
  const [data, SetData] = useState(null);
  const [bg, setBg] = useState("");

  const CityChange = (event) => {
    const data = event.target.value;
    if (data === "Gangoh") {
      setBg(Chhavi);
    } else if (data === "Roorkee") {
      setBg(Aman);
    } else {
      setBg("");
    }
    setCity(data);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5d27c3654c10dcacf05f7e4988870a6e`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      SetData(resJson.main);
    };
    fetchApi();
  }, [city]);

  return (
    <>
      <div>
        <div
          className=" w-screen h-screen flex items-center place-content-center flex-col bg-red-200"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <h1 className="text-3xl text-gray-400 drop-shadow-2xl -pt-5 pb-10">
            Wheather app
          </h1>
          <div className=" h-96 w-72 rounded-3xl search shadow-2xl flex flex-col items-center pb-6  opacity-50">
            <input
              className=" mt-2 p-2 focus:outline-none rounded-full h-8 w-36"
              type="search"
              name=""
              id=""
              value={city}
              onChange={CityChange}
            />
            {!data ? (
              <p className="text-3xl mt-10 ">No data found</p>
            ) : (
              <div>
                <div className=" font-semibold items-center mt-28 flex flex-col">
                  <div className="text-4xl">
                    {city === "" ? null : (
                      <i className=" bounce fas fa-street-view text-white"></i>
                    )}
                    {city}
                  </div>
                  {city === "" ? null : (
                    <h1 className="text-xl mt-4">{data.temp}°Cel</h1>
                  )}
                  {city === "" ? null : (
                    <h1 className="text-xs pt-2 text-black">
                      Min: {data.temp_min}°Cel |Max: {data.temp_max} °Cel
                    </h1>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
