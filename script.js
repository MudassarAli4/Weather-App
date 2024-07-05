const apiKey = "0865b911402a597dc7ad3a7dfcb2f4af";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    let weather = data.weather[0].main;
    changeBackground(weather);

    if (weather == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (weather == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (weather == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (weather == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (weather == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (weather == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

function changeBackground(weather) {
  const card = document.querySelector(".card");
  if (weather == "Clouds") {
    card.style.background = "linear-gradient(to top, #bdc3c7 0%, #2c3e50 100%)";
  } else if (weather == "Clear") {
    card.style.background = "linear-gradient(to top, #30cfd0 0%, #330867 100%)";
  } else if (weather == "Rain") {
    card.style.background = "linear-gradient(to top, #3a6073 0%, #16222a 100%)";
  } else if (weather == "Drizzle") {
    card.style.background = "linear-gradient(to top, #3a6073 0%, #16222a 100%)";
  } else if (weather == "Mist") {
    card.style.background = "linear-gradient(to top, #757f9a 0%, #d7dde8 100%)";
  } else if (weather == "Snow") {
    card.style.background = "linear-gradient(to top, #e6dada 0%, #274046 100%)";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  setTimeout(1000);
  searchBox.value = "";
});
