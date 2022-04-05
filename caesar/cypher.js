// write cypher function
function encrypt(plainText, key) {
	var k = key % 26; 
	var temp = []; 
	var cypherText;  
	// iterate over each letter of plaintext
	for (var i = 0; i < plainText.length; i++) { 
		// if it is a letter between a and z or A and Z
		if (plainText[i] >= 'a' && plainText[i] <= 'z') { 
			
			// change the letter by the number provided in key
			var code = (((plainText.charCodeAt(i) - 97) + k) % 26) + 97;  	
			// store the value in a new array
			temp.push(code);		
	
		} else if (plainText[i] >= 'A' && plainText[i] <= 'Z') { 
			var code = (((plainText.charCodeAt(i) - 65) + k) %26) + 65;
			// store the value in array
			temp.push(code); 

		} else { 
		// if it is not a letter, copy the value into the new array 
		temp.push(plainText.charCodeAt(i)); 

		} 
	} 
	console.log(temp); 
	// display the contents of the new array 
	cypherText = String.fromCharCode.apply(null, temp); 

	document.getElementById("cypherText").innerHTML = cypherText; 
}

