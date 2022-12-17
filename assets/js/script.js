var userFormEl = document.querySelector("#local-form");
var cityButtonsEl = document.querySelector("#city-buttons");
var cityInputEl = document.querySelector("#cityName");
var cityContainerEl = document.querySelector("#local-container");
var citySearchTerm = document.querySelector("#local-search-term");

var nameSubmitler = function (event) {
    event.preventDefault();

    var cityName = cityInputEl.ariaValueMax.trim();

    if (cityName) {
        getCityName(cityName);

        cityContainerEl.textContent = "";
        cityInputEl.value = "";
    } else {
        alert("Please Enter a City Name Or Select an Available Choice");
    }
};

var buttonClickler = function (event) {
    var cities = event.target.getAttribute("city-button");

    if (cities) {
        getSearchCities(cities);

        cityContainerEl.textContent = "";
    }
};

// var getUserRepos = function (user) {
// 	var apiUrl = "https://api.github.com/users/" + user + "/repos";

// 	fetch(apiUrl)
// 		.then(function (response) {
// 			if (response.ok) {
// 				console.log(response);
// 				response.json().then(function (data) {
// 					console.log(data);
// 					displayRepos(data, user);
// 				});
// 			} else {
// 				alert("Error: " + response.statusText);
// 			}
// 		})
// 		.catch(function (error) {
// 			alert("Unable to connect to GitHub");
// 		});
// };
var getCityName = function (user) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={60f078b7b7579e6d3184b2d9b2fa9b5f}";

    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                console.log(data);
                displayCities(data, user);
            });
        } else {
            alert("Err: " + response.statusText);
        }
    })
    .catch(function (error) {
        alert("Unable to get Weather Dashboard Functions!");
    });
};