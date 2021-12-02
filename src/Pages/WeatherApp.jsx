import React, { useEffect, useState } from "react";
import { GeoLoacation } from "./GeoLoacation";

function WeatherCard(props) {
  const [d, setD] = useState("");
  useEffect(() => {
    var p = new Date(props.dt);
    p.toDateString();
    setD(p);
  });

  return (
    <div className="w-11/12 h-10 flex bg-red-300 m-2">
      {d}
      {/* <h1>{next[1].dt_txt}</h1> */}
      <h1 className="text-xs pt-2 text-black">
        {/* {next[1].main.temp_min}°Cel |Max:
        {next[1].main.temp_max} °Cel */}
      </h1>
    </div>
  );
}

export default function WeatherApp() {
  const [city, setCity] = useState("Rajpura");
  const [data, SetData] = useState(null);
  const [next, setNext] = useState(null);
  const [index, setIndex] = useState(1);
  const location = GeoLoacation();

  console.log(location);

  function change() {
    alert("Data showing for next 3 Hours");
    setIndex(index + 3);
  }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=8c76c7d1d7b4800b9fe79b295295cb57`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.city.name);
      SetData(resJson);
      setNext(resJson.list);
    };
    location.loaded ? fetchApi() : console.log("not loaded");
  }, [location]);

  return (
    <>
      {data && next ? (
        <div>
          <div className=" w-auto h-auto -mt-16 flex items-center place-content-center flex-col bg-red-200">
            <div className=" h-auto w-80 rounded-3xl search shadow-2xl flex flex-col items-center pb-6  opacity-50">
              {!data ? (
                <p className="text-3xl mt-10 ">No data found</p>
              ) : (
                <div>
                  <div className=" font-semibold items-center mt-10 flex flex-col">
                    <div>{data.list[0].dt_txt}</div>
                    <div className="text-4xl">
                      {city === "" ? null : (
                        <i className=" bounce fas fa-street-view text-white"></i>
                      )}
                      {city}
                    </div>
                    {city === "" ? null : (
                      <h1 className="text-xl mt-4">
                        {data.list[0].main.temp}°Cel
                      </h1>
                    )}

                    <h1>{data.list[0].dt_txt}</h1>
                  </div>
                </div>
              )}
              <button
                className="cursor-pointer hover:text-green-700 hover:bg-black"
                onClick={change}
              >
                Next 3 Hours
              </button>

              <div className="w-11/12 p-1 h-auto flex justify-between rounded-md  bg-yellow-300 m-2">
                <h1>{next[index].dt_txt}</h1>
                <div className="text-md h-10 w-10 -mt-2">
                  <img
                    src={`http://openweathermap.org/img/wn/${next[index].weather[0].icon}@2x.png`}
                    alt="s"
                  />
                </div>
                <h1 className="text-xs pt-1 text-black">
                  {next[index].main.temp_min}°F |{next[index].main.temp_max} °F
                </h1>
              </div>
              <div className="w-11/12 p-1 rounded-md h-auto flex justify-between bg-yellow-300 m-2">
                <h1>{next[index + 1].dt_txt}</h1>
                <div className="text-md h-10 w-10 -mt-2">
                  <img
                    src={`http://openweathermap.org/img/wn/${
                      next[index + 1].weather[0].icon
                    }@2x.png`}
                    alt="s"
                  />
                </div>
                <h1 className="text-xs pt-1 text-black">
                  {next[index + 1].main.temp_min}°F |
                  {next[index + 1].main.temp_max} °F
                </h1>
              </div>
              <div className="w-11/12 h-auto flex p-1 rounded-md justify-between bg-yellow-300 m-2">
                <h1>{next[index + 2].dt_txt}</h1>
                <div className="text-md h-10 w-10 -mt-2">
                  <img
                    src={`http://openweathermap.org/img/wn/${
                      next[index + 2].weather[0].icon
                    }@2x.png`}
                    alt="s"
                  />
                </div>
                <h1 className="text-xs pt-1 text-black">
                  {next[index + 2].main.temp_min}°F |
                  {next[index + 2].main.temp_max} °F
                </h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>waiting</div>
      )}
    </>
  );
}
