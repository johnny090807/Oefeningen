
const url = 'https://randomuser.me/api/?nationality=nl&results=20';

fetch(url)
.then((response) => response.json())
.then(function(data) {
	let users = data.results;
		return users.map(function(user){
		console.log(user);
			var main_div = document.getElementById("main");

			let template = `
			<img src="${user.picture.large}" />
			<p class="name">
				${user.name.first} ${user.name.last}<br />
				${user.cell}
			</p>
			`

			main_div.insertAdjacentHTML('beforeend', template);
		});

	
});
