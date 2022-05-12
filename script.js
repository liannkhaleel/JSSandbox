// Hello, World
var test = alert("Hi!");
console.log("HELLOOOOO!");

// Variables and Types
var myNumber = 1;
var myOtherNumber = 2;
var myString = "abc";
var myBoolean = false;

// Arrays
var myArray = ["GM 1", "GM 2", "GM 3"];

// Manipulating arrays
myArray[1] = "GM -2";
myArray.push("GM 4");

// Operators
console.log(myNumber + myOtherNumber);
console.log(myNumber / myOtherNumber);
myNumber += 3;
console.log(myNumber);

// Conditionals
if(myNumber > myOtherNumber){
	console.log(myNumber + " is greater than " + myOtherNumber);
}else if(myNumber < myOtherNumber){
	console.log(myNumber + " is less than " + myOtherNumber);
}else{
	console.log(myNumber + " is equal to " + myOtherNumber);
}

// Loops
for(var i = 0; i < 10; i++){
	console.log(i);
}

for(var i = 0; i < myArray.length; i++){
	console.log(myArray[i]);
}

