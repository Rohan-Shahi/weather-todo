import React, { useEffect, useState } from "react";

export default function CityWeather() {
  const [city, setCity] = useState("Kathmandu");
  const [data, setData] = useState([]);
  const [temperature, setTemperature] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [weather, setWeather] = useState("");

  const [input, setInput] = useState("");

  //Fetch weather function
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d658e90445324acbf1e47cbdeda342e`
      );
      const data = await response.json();
      //   console.log(data.main.temp)
      setData(data);
      setTemperature(data.main.temp);
      setMinTemp(data.main.temp_min);
      setMaxTemp(data.main.temp_max);
      setWeather(data.weather[0].main);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  let icon = null;
  switch (weather) {
    case "Clouds":
      icon = "cloud";
      break;
    case "Thunderstrom":
      icon = "cloud-lightning";
      break;
    case "Drizzle":
      icon = "cloud-drizzle";
      break;
    case "Rain":
      icon = "cloud-light-rain";
      break;
    case "Snow":
      icon = "cloud-snow";
      break;
    default:
        icon = "wind"  
  }


  //Accessing data & time

  let dateObj = new Date();
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();
  const day = dateObj.toLocaleString("default", {weekday:'long'});
  const month = dateObj.toLocaleString("default", {month:'long'});

  let time = dateObj.toLocaleString([] , {
      hour : '2-digit',
      minute : '2-digit',
      second : '2-digit'
  })

  const handleSubmit = (e) => {
      e.preventDefault();
      setCity(input);
  }


  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center">
              <img
                src={`https://source.unsplash.com/600x900/?${weather}`}
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="City Name"
                      aria-label="City Name"
                      aria-describedby="basic-addon2"
                      name = "city"
                      value={input}
                      onChange = {(e) => { setInput(e.target.value)}}
                    />
                    <button
                      type="submit"
                      className="input-group-text"
                      id="basic-addon2"
                    >
                      <i className="bx bx-search"></i>
                    </button>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">
                  <h3 className="card-title">{data.name}</h3>
                  <p className="card-text">{day}, {month} {date}, {year}</p>
                  <hr />
                  <i
                    className={`bx bx-${icon}`}
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <h1 className="fw-bolder mb-5">
                    {(temperature - 273.15).toFixed(2)} &deg;C
                  </h1>
                  <p className="lead fw-bolder mb-0">{weather}</p>
                  <p className="lead">
                    {(minTemp - 273.15).toFixed(2)} &deg;C |{" "}
                    {(maxTemp - 273.15).toFixed(2)} &deg;C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
