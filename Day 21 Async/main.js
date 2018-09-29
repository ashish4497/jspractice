var searchbtn = document.querySelector(".btn");
var username = document.querySelector(".usr-name");
var user = document.querySelector(".user");
var repo = document.querySelector(".user-repo");
var follower = document.querySelector(".user-follower");
var following = document.querySelector(".user-following");
var profile = document.querySelector(".user-img");
profile.style.display = 'none';

function findusername(){
	profile.style.display = 'inline-block';
	var value = username.value;
	var link = `https://api.github.com/users/${value}`;
	fetch(link)
	.then(
		response => {
			return response.json()
		})
	.then(data =>{
		if (data.message) {
			user.innerHTML = "User Not Found With This Username"
		} else {
			user.innerHTML = data.name;
			repo.innerHTML =`Publis Repos: ${data.public_repos}`;
			follower.innerHTML =`Followers: ${data.followers}`;
			following.innerHTML =` Following: ${data.following}`;
			profile.src =data.avatar_url;
		}
	})
username.value = "";
}
searchbtn.addEventListener("click",findusername);