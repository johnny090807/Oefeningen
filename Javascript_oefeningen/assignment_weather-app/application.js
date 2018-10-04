const clearWatchBtn = document.getElementById("clearBtn");
const main_div = document.getElementById("main");
const searchWeather = document.getElementById("searchWeather");
const apiKey = "42da0072ca2c4bed9cf25359bb41ae70";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
const date = new Date();
const monthName = months[date.getMonth()];
const dayName = days[date.getDay()];
let weatherResponse;

function myPosition (position){

	const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat="+ position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=" + apiKey + "&units=metric";
	fetch(weatherUrl)
		.then(response => {
			return response.json();
		}).then(weatherResponse => {
			let main_div = document.getElementById("main");
				let template = `
					<div class="weather">
						<img src="http://openweathermap.org/img/w/${weatherResponse.weather[0].icon}.png"></img>
						<h3 class="weather__name">${weatherResponse.name}</h3>
						<div class="dayholder">
							<h3>${dayName} |</h3>
							<h3>${monthName} ,</h3>
							<h3>${date.getDay()} |</h3>
							<h3>${date.getHours()}:</h3>
							<h3>${date.getMinutes()}</h3>
						</div>
						<div class="tempholder">
							<h5 class="tempholder__temp--min">${weatherResponse.main.temp_min}</h5>
							<h2 class="tempholder__temp">${weatherResponse.main.temp}&#8451;</h2>
							<h5 class="tempholder__temp--max">${weatherResponse.main.temp_max}</h5>
						</div>

					</div>
				`;
			main_div.insertAdjacentHTML("beforeend", template);
		})
		.catch(error => {
			console.log(error)
		});
}
function searchPosition (location){
	const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + apiKey + "&units=metric" ;
	fetch(weatherUrl)
		.then(response => {
			return response.json();
		}).then(weatherResponse => {
			let search_div = document.getElementById("searched");
			search_div.innerHTML = "";
				let template = `
					<div class="weather">
						<img src="http://openweathermap.org/img/w/${weatherResponse.weather[0].icon}.png"></img>
						<h3 class="weather__name">${weatherResponse.name}</h3>
						<div class="dayholder">
							<h3>${dayName} |</h3>
							<h3>${monthName} ,</h3>
							<h3>${date.getDay()} |</h3>
							<h3>${date.getHours()}:</h3>
							<h3>${date.getMinutes()}</h3>
						</div>
						<div class="tempholder">
							<h5 class="tempholder__temp--min">${weatherResponse.main.temp_min}</h5>
							<h2 class="tempholder__temp">${weatherResponse.main.temp}&#8451;</h2>
							<h5 class="tempholder__temp--max">${weatherResponse.main.temp_max}</h5>
						</div>

					</div>
				`;
			search_div.insertAdjacentHTML("beforeend", template);
		})
		.catch(error => {
			let search_div = document.getElementById("searched");
			let template = `
				<div class="weather"><br/>
					<h3 class="weather__name">Kan deze stad niet vinden...</h3>
					<div class="dayholder">
						<h3>Error: ${error}</h3>
					</div>
					<div class="tempholder">
						</div>
				</div>
			`;
			search_div.insertAdjacentHTML("beforeend", template)
		});
}

function error(error) {
	document.write(error);
}

searchWeather.addEventListener("change", function(event){
	searchPosition(event.target.value);
});


navigator.geolocation.getCurrentPosition(myPosition, error);
