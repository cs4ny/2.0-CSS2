// Global Variables
var user;


function main() {
	var uChoice = user;
	var cChoice = computerChoices();
		
	// Compare choices and display results
	compare(uChoice,cChoice);

}

function computerChoices(){
	var comp = Math.floor((Math.random() * 3) + 1);
	if (comp === 1){
		computerChoice = 1;
	} else if (comp === 2){
		computerChoice = 2;
	} else if (comp === 3){
		computerChoice = 3;
	} else {
		alert("Invalid Choice");
	}
	return computerChoice;
}

function compare(user,comp){
	if (user === 1){
        if ( comp === 1) {
            alert("User chooses rock, Computer chooses rock, Draw");
		} else if ( comp === 2 ){
            alert("User chooses rock, Computer chooses paper,Computer wins");
		} else if ( comp === 3 ){
            alert("User chooses rock, Computer chooses scissors,User wins");
		} else {
            alert();
		}
	
	} else if ( user === 2 ){
        if (comp === 1){
            alert("User chooses paper, Computer chooses rock, User wins");
		} else if ( comp === 2 ){
            alert("User chooses paper, Computer chooses paper,Draw");
		} else if ( comp === 3){
            alert("User chooses paper, Computer chooses scissors,Computer wins");
		} else{
            alert();
		}
	
	} else if ( user === 3 ){
        if ( comp === 1){
            alert("User chooses scissors, Computer chooses rock, Computer wins");
		} else if ( comp === 2){
            alert("User chooses scissors, Computer chooses paper,User wins");
		} else if ( comp === 3 ){
            alert("User chooses scissors, Computer chooses scissors,Draw");
		}else{
            alert();
		}
	}else{
        alert("Error");
	}
}

		
