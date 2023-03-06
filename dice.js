function rollDice(){
	var diceValue = parseInt(Math.random()*6)+1;

	document.getElementById("diceFace").innerHTML = diceValue;

	if (diceValue > 3){
		document.getElementById("diceMsg").innerHTML = "You rolled "+  diceValue +". You <span class='text-primary'> won </span>! :3 Congratulations, anon-san!~ >w<";
	}

	else{
		document.getElementById("diceMsg").innerHTML = "You rolled "+ diceValue +". <span class='text-danger'>wahhaha</span>";
	}
}