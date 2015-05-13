// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
	var array = string.toLowerCase().split("")
	if (
		array.indexOf("a") >= 0 &&
		array.indexOf("b") >= 0 &&
		array.indexOf("c") >= 0 &&
		array.indexOf("d") >= 0 &&
		array.indexOf("e") >= 0 &&
		array.indexOf("f") >= 0 &&
		array.indexOf("g") >= 0 &&
		array.indexOf("h") >= 0 &&
		array.indexOf("i") >= 0 &&
		array.indexOf("j") >= 0 &&
		array.indexOf("k") >= 0 &&
		array.indexOf("l") >= 0 &&
		array.indexOf("m") >= 0 &&
		array.indexOf("n") >= 0 &&
		array.indexOf("o") >= 0 &&
		array.indexOf("p") >= 0 &&
		array.indexOf("q") >= 0 &&
		array.indexOf("r") >= 0 &&
		array.indexOf("s") >= 0 &&
		array.indexOf("t") >= 0 &&
		array.indexOf("u") >= 0 &&
		array.indexOf("v") >= 0 &&
		array.indexOf("w") >= 0 &&
		array.indexOf("x") >= 0 &&
		array.indexOf("y") >= 0 &&
		array.indexOf("z") >= 0
		) {
		return true;
	} else {
		return false;
	}
}