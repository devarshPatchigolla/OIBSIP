const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");
const tempTo = document.querySelector("#temp-to");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

function convertToCelsius() {
  let inputValue = degree.value;

if (tempType.value === "fahrenheit"  && tempTo.value === "celsius") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
  } 
  else if(tempType.value === "fahrenheit"  && tempTo.value === "kelvin"){
    const FahrenheitToKelvin = (inputValue - 32) / (1.8) + 273.15;
    celsiusElem.innerHTML = `${FahrenheitToKelvin.toFixed(3)} k`;
  }
  else if (tempType.value === "celsius" && tempTo.value === "fahrenheit") {
    const CelsiusToFahrenheit = (inputValue * 1.8) +32;
    celsiusElem.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;F`;
  } 
  else if (tempType.value === "celsius" && tempTo.value === "kelvin") {
    const CelsiusToKelvin = inputValue + 273.15;
    celsiusElem.innerHTML = `${CelsiusToKelvin.toFixed(3)} k`;
  } 
  else if (tempType.value === "kelvin" && tempTo.value === "celsius") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
  }
  else if (tempType.value === "kelvin" && tempTo.value === "fahrenheit") {
    const KelvinToFahrenheit = (inputValue * 1.8) - 459.67;
    celsiusElem.innerHTML = `${KelvinToFahrenheit.toFixed(3)} &deg;F`;
  }
  else if (tempType.value === "kelvin" && tempTo.value === "kelvin") {
    const KelvinToKelvin = inputValue;
    celsiusElem.innerHTML = `${KelvinToKelvin.toFixed(3)} k`;
  }
  else if (tempType.value === "celsius" && tempTo.value === "celsius") {
    const CelsiusToCelsius = inputValue;
    celsiusElem.innerHTML = `${CelsiusToCelsius.toFixed(3)} &deg;c`;
  }
  else if (tempType.value === "fahrenheit" && tempTo.value === "fahrenheit") {
    const FahrenheitToFahrenheit = inputValue;
    celsiusElem.innerHTML = `${FahrenheitToFahrenheit.toFixed(3)} &deg;F`;
  }
}