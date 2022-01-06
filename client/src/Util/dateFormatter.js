//changes the dashes into slashes.

export const dateFormatter = (date) => {
    while(date.includes("-")){
        date = date.replace("-", "/")
    }
    return date;
}