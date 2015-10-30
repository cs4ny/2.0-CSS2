//Cipher Program (Translated from Python)
var userInput;
//main()
function main(){
	//Create a lsit of alphabets as references
	var alList = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];

	//Check to see if they want enscription or decription
	if (userInput === 1 ){
		var userMessage = prompt("Please enter a code you would want to encrypt(lower case letters only): ");
		var amountShift = Number(prompt("Please enter the amount of shift(enter a number): "));
		var nMessage = ("Your encrypted code is " + encryption(userMessage,amountShift,alList));
		alert(nMessage);
	}else if (userInput === 2){
		var userMessage = prompt("Please enter a code you would want to decrypt(lower case letters only): ");
		var amountShift = Number(prompt("Please enter the amount of shift(enter a number): "));
		alert("Your decrypted code is " +decryption(userMessage,amountShift,alList));
	}else {
		alert("False Input")
	}

}

//encryption()
function encryption(uMessage,amtShift,refList){
	//Create an empty list
	var nMeList = []
	
	//Change string to lsit
	var uMeInput = uMessage.split("");
	
	//Loop for each elements in the list
	for(var index =0; index<uMeInput.length; index++){
		//Check index of userMessage from the referenceList
		var orIndex = refList.indexOf(uMessage[index]);
		// Create a new index for userMessage
		var nIndex = orIndex - amtShift;
		//If index is less than 0
		if (nIndex < 0){
			nIndex = refList.length + nIndex ;
		}else{
			nIndex = nIndex;
		}
		//Assign new elements
		var nLetter = refList[nIndex];
		//Add new elements to empty lsit
		nMeList.push(nLetter);
	}
		
	//Join elements in lsit to a string
	var nMeList = nMeList.join("");
	
	//return the new encrypted message
	return nMeList;
}

//decription
function decryption(uMessage,amtShift,refList){
	//Create an empty list
	var nMeList = []
	
	//Change string to lsit
	var uMeInput = uMessage.split("");
	
	//Loop for each elements in the list
	for(var index =0; index<uMeInput.length; index++){
		//Check index of userMessage from the referenceList
		var orIndex = refList.indexOf(uMessage[index]);
		// Create a new index for userMessage
		var nIndex = orIndex + amtShift;
		//If index is less than 0
		if (nIndex > 24){
			var overIndex = nIndex - 26 ;
			//Assign new elements
			var nLetter = refList[overIndex];
		}else{
			nIndex = nIndex;
			//Assign new elements
			var nLetter = refList[nIndex];
		}
		
		//Add new elements to empty lsit
		nMeList.push(nLetter);
	}
		
	//Join elements in lsit to a string
	var nMeList = nMeList.join("");
	
	//return the new encrypted message
	return nMeList;
}

		
	
	
	
