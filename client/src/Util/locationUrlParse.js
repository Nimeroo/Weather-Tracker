export const locationURLParse = (location) => {
    let splitLocation = location.split(" ");
    let rejoinedLocation = splitLocation.join("+")
    return rejoinedLocation;
  }