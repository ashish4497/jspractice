var firstInput =document.querySelector(".player-1-input");
var submitInput =document.querySelector(".player-1-btn");
var secondInput = document.querySelector(".player-2-input");
var secondButton = document.querySelector(".player-2-btn");
var battelButton = document.querySelector("#battleStart")

var playerone;
var playertwo;

// function to display player one details

   function display(user){
		playerone=user;
      // console.log(user)
    var playerOneDetail =document.querySelector(".player-one-detail");
      playerOneDetail.innerHTML=
	   ` <li class="user-detail">
		<h1>${user.name}</h1>
		<img src="${user.avatar_url}"/>
		</li>`
   }   

//function to display the seconduser detail

function userDisplay(user){
	 playertwo=user;
    var playerTwoDetail = document.querySelector(".player-two-detail");
    playerTwoDetail.innerHTML=
    ` <li class="user-detail">
    <h1>${user.name}</h1>
    <img src="${user.avatar_url}"/>
   </li>`
    battleStart.style.display ="block";
    battleStart.textContent=" Start battel"

}

//function to user battel
 function battel () {
	let score1 = playerone.followers + playerone.following * 2;
	let score2 = playertwo.followers + playertwo.following * 2;
	var result =document.createElement("h1")
	if( score1>score2)
	result.innerHTML = "player 1 is winner";
	else{
		result.innerHTML = "player 2 is winner";
	}
	winner.appendChild(result);
 }

//function to search user

function searchuser(e){
    // console.log(e);
    var data = fetch(`https://api.github.com/users/${firstInput.value}`).then((d)=>d.json())
    .then((res)=> display(res));
    // console.log(playerone);
}

//function to search user second

function searchuser2() {
    var data2 = fetch(`https://api.github.com/users/${secondInput.value}`).then((info)=>info.json())
    .then((resp)=> userDisplay(resp));
    // console.log(playertwo);
}


submitInput.addEventListener('click',searchuser);
secondButton.addEventListener('click',searchuser2);
battelButton.addEventListener('click',battel);