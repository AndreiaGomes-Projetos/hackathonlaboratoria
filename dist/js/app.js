$(document).ready(function(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=campinas,br&APPID=fe9fa986796faa87ef8b7a803ed0197d&units=metric&lang=pt")
    .then(function(response) { return response.json(); })
    .then(function(data) { createAll(weathers.list) });
});
$(document).ready(function() {
    var weatherToday = [];
    for (i = 0;i < weather.length;i++) {
      weatherList = weather[i]['list'];
      weatherToday.push(weatherList);
    }
})
