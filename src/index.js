function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value.trim(); // Trim whitespace from the input

  // Update the temperature and city name
  getWeather(city);
}

function getWeather(city) {
  let apiKey = "b7t0a82d419b3c6081406ebbfco23a77";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(temp);
}
//function to change temperature
function temp(response) {
  let temp1 = Math.round(response.data.temperature.current);
  let city = response.data.city;

  let newtemp = document.querySelector(".current-temperature-value");
  newtemp.innerHTML = `${temp1}`; // Update temperature value with units

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = city;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

/*let apiKey = "b7t0a82d419b3c6081406ebbfco23a77";
let city = search();
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(temp);*/
