// refresh page funcion
function refresh() {
	window.location.reload(); 
}

// write cypher function
function encrypt(plainText, key) {
	var key = key % 26; 
	var temp = []; 
	var cypherText;  
	// iterate over each letter of plaintext
	for (var i = 0; i < plainText.length; i++) { 
		// if it is a letter between a and z or A and Z
		if (plainText[i] >= 'a' && plainText[i] <= 'z') { 
			
			// change the letter by the number provided in key
			var code = plainText.charCodeAt(i) - 97;  	
			code = code + key;
			code = code + 97;
		
			// store the value in a new array
			temp.push(code);		
		} else if (plainText[i] >= 'A' && plainText[i] <= 'Z') { 
			var code = plainText.charCodeAt(i) - 65;
			code = code + key;
			code = code + 65; 
		
			// store the value in array
			temp.push(code); 
		} else { 
		// if it is not a letter, copy the value into the new array 
		temp.push(plainText[i]); 
		} 
	} 
	console.log(temp); 
	// display the contents of the new array 
	cypherText = String.fromCharCode.apply(null, temp); 

	document.getElementById("cypherText").innerHTML = cypherText; 
}

