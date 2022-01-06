//Inserts "+" between seperate words in locations to pass as a search parameter in API url 

export const locationURLParse = (location) => {
    let splitLocation = location.split(" ");
    let rejoinedLocation = splitLocation.join("+")
    return rejoinedLocation;
  }