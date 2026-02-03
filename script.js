

const API_KEY = "ed0ee1e90715c8eedb92b9e5e4b184b7";

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("API Response:", data); // 👈 DEBUG

    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}


function displayWeather(data) {
  const div = document.getElementById("weatherResult");

  if (data.cod === 200) {
    div.innerHTML = `
      <h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } else {
    div.innerHTML = "City not found!";
  }
}
