const url = 'https://randomuser.me/api/?nationality=nl&results=10';
let allUsers;
let singleUser;

fetch(url)
.then((response) => response.json())
.then(function(data) {
	allUsers = data.results;
	fillDiv(allUsers);
});

function fillDiv(users){
	return users.map(function(user){
		const main_div = document.getElementById("main");
		let template = `
		<div class="usersholder" onclick="getDetail(this)">
			<img src="${user.picture.large}" class="usersholder__image"/>
				<p class="name">
					${user.name.first} ${user.name.last}<br />
					${user.cell}
			</p>
		</div>
		`
		main_div.insertAdjacentHTML('beforeend', template);
	});
}
function fillUser(user){
		const main_div = document.getElementById("main");
		console.log(user);
		let template = `
		<div class="userholder" onclick="closeDetail()">
		<h1>Click to go back:</h1>
			<img src="${user.picture.large}" class="userholder__image"/>
				<p class="name">
				<p>${user.name.first}</p> 
				<p>${user.name.last}</p> 
				<p>${user.cell}</p> 
				<p>${user.dob.age}</p> 
				<p>${user.dob.date}</p> 
				<p>${user.email}</p> 
				<p>${user.gender}</p> 
				<p>${user.id.name}${user.id.value}</p> 
				<p>${user.location.city}</p> 
				<p>${user.location.state}</p> 
				<p>${user.location.street}</p> 
				<p>${user.login.username}</p> 
				<p>${user.login.password}</p> 
				<p>${user.registered.date}</p> 
			</p>
		</div>
		`
		main_div.insertAdjacentHTML('beforeend', template);
}
function getDetail(user){
	let main_div = document.getElementById("main");
	let main_image = user.querySelector(".usersholder__image").src;
	main_div.innerHTML = "";
	allUsers.forEach( function(element, index) {
		if(element.picture.large == main_image){
			fillUser(element);
		}
	});
	let search = document.getElementById("search");
	search.innerHTML= "";
}
function closeDetail(){
	let search = document.getElementById("search");

	let main_div = document.getElementById("main");
	main_div.innerHTML = "";
	fillDiv(allUsers);
	let searchDiv = document.getElementById("search");
	const template = `
		<input type="input" name="profile_search" placeholder="Search" />
	`;
	searchDiv.insertAdjacentHTML("beforeend", template);

}
