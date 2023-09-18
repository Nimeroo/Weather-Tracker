import cities from "cities.json";

const toUpperCase = (input) => {
  let uppercaseInput = "";
  let splitInput = input.split("");
  let firstLetter = splitInput[0].toUpperCase();
  uppercaseInput = firstLetter + input.slice(1, splitInput.length);
  return uppercaseInput;
};

const cityList = () => {
  let cityNames = [];
  for (let i = 0; i < cities.length; i++) {
    cityNames.push(cities[i].name);
  }
  
  return cityNames;
};

//returns a list of city names which match the input given.
const citySuggestion = (input) => {
  let upperInput = toUpperCase(input);
  let suggestedCities = [];
  let cityNames = cityList();
  let splitInput = "";
  if (typeof input === "string") {
    splitInput = upperInput.split("");
  }
  for (let i = 0; i < cityNames.length; i++) {
    let splitCity = cityNames[i].split("");
    let cityCheck = splitCity.slice(0, splitInput.length);
    if (
      cityCheck.join() == splitInput.join() &&
      suggestedCities.includes(cityNames[i]) == false &&
      suggestedCities.length < 4
    ) {
      suggestedCities.push(cityNames[i]);
    }
  }
  return(suggestedCities);
};

export default citySuggestion;
