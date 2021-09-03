// №1
var numbers = [ 254, 115, 78, 25, 91, 45, 37 ];

for(var i = 0; i < numbers.length; i++) {
	if(numbers[i] > 50) {
		console.log(numbers[i]);
	}
}



// №2
var letters = [];
var str = "Backend As A Service";
var first_letter_str = "";

str = str.split(' ');

for(var i = 0; i < str.length; i++) {
	letters.push(str[i][0]);
}
console.log(letters);

for(i = 0; i <letters.length; i++) {
	first_letter_str += letters[i];
}

console.log(first_letter_str);