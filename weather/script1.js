
console.log("=== Weather Info Fetcher Project===");
const cityCoords = {
    "banglore": { lat: 12.97, lon: 77.59 },
    "delhi": { lat: 28.61, lon: 77.20 },
    "mumbai": { lat: 19.07, lon: 72.87 },
    "london": { lat: 51.51, lon: -0.13 },
    "newyork": { lat: 40.71, lon: -74.01 },
    "paris": { lat: 48.85, lon: 2.35 },
    "anantapur": { lat: 14.68, lon: 77.60 },
    "tadipatri": { lat: 14.92, lon: 77.55 }
};

document.getElementById("fetchBtn").addEventListener("click",function()  {
    let city = document.getElementById("cityInput").value.toLowerCase();
    if(!cityCoords[city]) {
        document.getElementById("weather").innerHTML="City not in list!";
        return;
    }   
    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
     
    fetch(url)
    .then(res => res.json())
    .then(data => {
      if(data.current_weather) {
        document.getElementById("weather").innerHTML = `
        <h3>Waether in ${city}</h3>
        <p>Temp: ${data.current_weather.temperature}°C</p>
        <p>Wind: ${data.current_weather.windspeed} km/h</p>
        <Time> ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "Weather data not available.";
      }
    })
    .catch(err => {
        console.error(error);
        document.getElementById("weather").innerHTML = "Error fetching weather data.";
    });
});
    

