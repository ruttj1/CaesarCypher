// store plaintext in variable 
var plaintext = document.getElementById("plainText");  
// store key in variable 
var key = document.getElementById("key"); 
// create variable to store cypher in
var cypher = []; 
// write cypher function 
function encrypt(plaintext, key) {
	//check variables are not null
	if (plaintext === null || key === null) {
		alert("Please complete all fields!"); 	
	} 
	// verify key is only numbers 
	if (key != "int") { 
		alert("Only numbers here!"); 	
	} 	
	//write cypher logic
	for (var i = 0; i < plaintext.length; i++) {
		if (plaintext[i] >= 'a' && plaintext[i] <= 'z') {
		cypher[i] = (((plaintext[i] - 'a') + key) % 26) + 'a';  
		} else if (plaintext[i] >= 'A' && plaintext[i] <= 'Z') {
		cypher[i] = (((plaintext[i] - 'A') + key) % 26) + 'A'; 
		} else { 
		cypher[i] = plaintext[i]; 
		}  
	} 	
	document.getElementById("encryptedText").innerHTML = cypher; 
} 

