async function getWeather(city) {
    const API_KEY = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.querySelector(".errorDisplay").style.display = "none";

        document.querySelector(".cityDisplay").textContent = data.name;
        document.querySelector(".temperatureDisplay").textContent = `${data.main.temp}°C`;
        document.querySelector(".humidityDisplay").textContent = `Humidity: ${data.main.humidity}%`;
        document.querySelector(".descriptionDisplay").textContent = data.weather[0].description;
        document.querySelector(".realFeelDisplay").textContent = `Feels like: ${data.main.feels_like}°C`;
        document.querySelector(".windSpeedDisplay").textContent = `Wind: ${data.wind.speed} km/h`;

        const iconCode = data.weather[0].icon;
        const emojiMap = {
            "01": "☀️", "02": "🌤️", "03": "☁️", "04": "☁️", 
            "09": "🌧️", "10": "🌦️", "11": "🌩️", "13": "❄️", "50": "🌫️"
        };
        const emoji = emojiMap[iconCode.slice(0, 2)];
        document.querySelector(".emojiDisplay").textContent = emoji;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".errorDisplay").style.display = "block";
    }
}

const cityInput = document.getElementById("cityInput");
document.getElementById("submitButton").onclick = () => {
    getWeather(cityInput.value);
};