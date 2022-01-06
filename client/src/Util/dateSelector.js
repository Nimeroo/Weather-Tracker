//Removes the time from the LocalTime format leaving the date remaining.
//The dashes that seperate the month, day and year are then replaced with slashes instead.

export const dateSelector = (localtime) => {
    let splitLocaltime = localtime.split(" ");
    let date = splitLocaltime[0];
    date.replace("-", "/") 
    return date;
}