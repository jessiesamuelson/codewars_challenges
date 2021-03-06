// Ruby and Javascript lets you re-open classes so you can add new functionality to existing classes and objects.

// In this kata, you'll have to add a new method in the String class that calls the upcase method (toUpperCase() in Javascript), so that:

// "abc".myNewMethod(); // "ABC"

String.prototype.myNewMethod = function(){
	return this.toUpperCase();
}