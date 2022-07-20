// setting current date
const date = document.querySelector(".date");
const currentDate = new Date();
const day = currentDate.toLocaleString("en-us", {
  weekday: "long",
});
const month = currentDate.toLocaleString("en-us", {
  month: "long",
});
const cdate = currentDate.getDate();
date.textContent = `${day} ${cdate} ${month}`;

// getting target
const key = "d0024f89e1af8c6b9d0e91d4089f5da2";
const temp = document.querySelector(".temp");
const info = document.querySelector(".weather-info");
const form = document.querySelector("form");
const changeCity = document.querySelector(".change-city");
const high = document.querySelector(".high h2");
const wind = document.querySelector(".wind h2");
const sunrise = document.querySelector(".sunrise h2");
const low = document.querySelector(".low h2");
const rain = document.querySelector(".rain h2");
const sunset = document.querySelector(".sunset h2");
const icon = document.querySelector(".icon");
const city = document.querySelector(".city");
const overlay = document.querySelector(".overlay");
const cast_box = document.querySelector(".cast-boxs");
const state = document.querySelector(".state");
const wrapper = document.querySelector(".wraffer");

function Loading(loading = true) {
  if (loading) {
    overlay.classList.add("loading");
    wrapper.style.filter= 'blur(4px)'
  } else {
    overlay.classList.remove("loading");
    wrapper.style.filter= 'blur(0)'
  }
}

Loading();

const format = (unix) => {
  let formated = new Date(unix * 1000);
  let hours = formated.getHours() % 12 || 12;
  let ampm = hours >= 12 ? hours + " pm" : hours + " am";
  let minute = formated.getMinutes();
  return hours + ":" + minute + ampm;
};

// fetch api for fordcast
const fordcast = (data) => {
  [...data].slice(0, 9).forEach((element) => {
    let html = `<div class="single-cast">
                    <span class="time">${format(element.dt)}</span>
                    <span class="weather"><img src="http://openweathermap.org/img/w/${
                      element.weather[0].icon
                    }.png" alt="icon"></span>
                    <span class="degree do">${Math.ceil(
                      element.temp - 273.14
                    )}</span>
                  </div>`;
    cast_box.innerHTML += html;
  });
};
// getting user location through Geolocation

const showPositon = async (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  // fetch api for current location
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
  await fetch(api)
    .then((response) => response.json())
    .then((data) => {
      // process data
      let unix = data.sys.sunset;
      let unit = data.sys.sunrise;

      // setting data through json data
      city.setAttribute("placeholder", data.name);
      changeCity.textContent = data.name;
      temp.textContent = Math.ceil(data.main.temp - 273.14);
      info.textContent = data.weather[0].description;
      high.textContent = Math.ceil(data.main.temp_max - 273.14);
      wind.textContent = `${data.wind.speed} mph`;
      sunrise.textContent = format(unit);
      low.textContent = Math.floor(data.main.temp_min - 273.15);
      rain.textContent = `${data.main.humidity} %`;
      sunset.textContent = format(unix);
      const iconcode = data.weather[0].icon;
      icon.setAttribute(
        "src",
        "http://openweathermap.org/img/w/" + iconcode + ".png"
      );
    })
    .catch((error) => {
      console.error(error);
    });

  const forcast_api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${key}`;
  await fetch(forcast_api)
    .then((response) => response.json())
    .then((data) => {
      fordcast(data.hourly);
    });
  Loading(false);
};

(function geoLocacion(showPositon) {
  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPositon)
  }
})(showPositon);

// feth on form event
form.addEventListener("submit", async (e) => {
  let lat, lon;
  cast_box.innerHTML = ''
  e.preventDefault();
  let city = document.querySelector(".city").value;
  if (city == "") return;
  Loading(true);
  try {
    const api_for_state = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    await fetch(api_for_state)
      .then((response) => response.json())
      .then((data) => {
        if (!data) return;
        if (data.cod === 404) return;
        lat = data.coord.lat;
        lon = data.coord.lon;
        let { sunset, sunrise } = data.sys;

        // setting data through json data
        changeCity.textContent = `${data.name}`;
        temp.textContent = Math.ceil(data.main.temp - 273.14);
        info.textContent = data.weather[0].description;
        high.textContent = Math.ceil(data.main.temp_max - 273.14);
        wind.textContent = `${data.wind.speed} mph`;
        sunrise.textContent = format(sunrise);
        low.textContent = Math.floor(data.main.temp_min - 273.15);
        rain.textContent = `${data.main.humidity} %`;
        sunset.textContent = format(sunset);
        const iconcode = data.weather[0].icon;
        icon.setAttribute(
          "src",
          "http://openweathermap.org/img/w/" + iconcode + ".png"
        );
      })
      .catch((err) => {
        Loading(false);
        console.error(err);
      });
  } catch (error) {
    Loading(false);
  }

  if (lat && lon) {
    const forcast_api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}`;
    await fetch(forcast_api)
      .then((response) => response.json())
      .then((data) => {
        fordcast(data.hourly);
        Loading(false)
      });
  }
});
