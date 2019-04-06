var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var resetbutton = document.querySelector("#rs");
var p1Span = document.querySelector("#p1span");
var p2Span = document.querySelector("#p2span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click",function(){

	if(!gameOver){
		p1Score++;
		p1Span.textContent = p1Score;
		if(p1Score === winningScore){
			p1Span.style.color = "green";
			gameOver = true;
		}
	}
	
	

});

p2button.addEventListener("click",function(){

	if(!gameOver){
		p2Score++;
		p2Span.textContent = p2Score;
		if(p2Score === winningScore){
			p2Span.style.color = "green";
			gameOver = true;
		}
	}

});

resetbutton.addEventListener("click",function(){

	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Span.textContent = "0";
	p2Span.textContent = "0";
	p1Span.style.color = "black";
	p2Span.style.color = "black";


});