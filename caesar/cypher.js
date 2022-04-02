// refresh page funcion
function refresh() {
	window.location.reload(); 
}

// validate plainText is not empty
function checkPlaintext () {
	// if plainText is null
	if (document.getElementById("plainText").value === null) { 
		// alert to input value
		alert("Please provide text to encrypt!"); 
		// refresh page
		refresh(); 	
	}
}

// validate the value in the key field is a number and exists
function checkKey () {
	// if value is not a number
	if (!document.getElementById("key").value || isNaN(document.getElementById("key")) {
		// alert to input number
		alert("Please provide a key!"); 
		// refresh page 
		refresh(); 
	}  
}

// write cypher function
function cypher (plainText, key) {
	checkPlaintext (); 
	checkKey (); 
// iterate over each letter of plaintext
	// if it is a letter between a and z or A and Z
		// change the letter by the number provided in key
		// store the value in a new array
	// if it is not a letter, copy the value into the new array 
// display the contents of the new array 
}

