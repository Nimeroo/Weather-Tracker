# Weather-Tracker

[Deployed Site](https://xenodochial-brahmagupta-473261.netlify.app/)

App Title: Weather Tracker

[Wireframe](https://wireframe.cc/7UGprf)

[Mobile Wireframe](https://wireframe.cc/Cmhwta)

Languages/Frameworks Used: HTML, CSS, Javascript and React.

App Description: Once the user enters either their city, zip code or postcode into the search bar, Weather Tracker displays the current temperature and weather along with the temperature and weather forecast for the next 2 days.

API: Weather Tracker uses the weather api from https://www.weatherapi.com/ for its data.

API Snippet:

`{

"current": {

        "last_updated_epoch": 1642937400,
        
        "last_updated": "2022-01-23 06:30",
        
        "temp_c": -2.8,
        
        "temp_f": 27.0,
        
        "is_day": 0,
        
        "condition": {
        
            "text": "Clear",
            
            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
            
            "code": 1000
            
        },
        "wind_mph": 12.5,
        
        "wind_kph": 20.2,
        
}`


MVP:
- Renders weather based on what location is searched.
- Renders weather of a specific day once the container representing that day is clicked.
