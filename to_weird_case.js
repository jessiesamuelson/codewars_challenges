// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:

// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"



function toWeirdCase(string){
	var arr = string.split(" ");
	var newArr = [];
	for (var j = 0; j < arr.length; j++) {
		var word = arr[j].split("");
		var newWord = [];
		for (var i = 0; i < word.length; i++){
			if (i % 2 === 0){
				newWord.push(word[i].toUpperCase());
			} else {
				newWord.push(word[i].toLowerCase());
			}
			var stringWord = newWord.join("");
		}
		newArr.push(stringWord);
	}
	return newArr.join(" ");
}