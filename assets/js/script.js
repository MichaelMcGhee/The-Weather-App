function getApi ()
var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=cf537d8e3051c7c36ef703aacf79c34b'
fetch (requestUrl) 
.then(function (response) {
    return response.json();
  })