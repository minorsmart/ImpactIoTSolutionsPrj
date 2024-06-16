// Weather API code
function weatherBalloon(cityID) {
    var key = '8a3c97ba81c6e34c4bf42b8e2af9e682';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var description = d.weather[0].description;
    
    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
    
    if (description.indexOf('rain') > 0) {
        document.body.className = 'rainy';
    } else if (description.indexOf('cloud') > 0) {
        document.body.className = 'cloudy';
    } else if (description.indexOf('clear') > 0) {
        document.body.className = 'sunny';
    }
}

// Use addEventListener to ensure both functions run on window load
window.addEventListener('load', function() {
    weatherBalloon(1835847); // ID of Seoul
});
