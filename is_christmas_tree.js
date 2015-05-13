// Create a function christmasTree(height) that returns a christmas tree of the correct height

// christmasTree(5) should return:

//     *    5 a
//    ***   
//   *****  
//  ******* 2 spaces, 9 stars 
// ********* 0 spaces, 11 stars
// Height passed is always an integer between 0 and 100.

// Use \n for newlines between each line.

// Pad with spaces so each line is the same length. The last line having only stars, no spaces.

function christmasTree(height) {
	function makeStars(n) {
		var stars = "";
		for (var i = 0; i < n; i++){
			stars+= "*";
		}
		return stars;
	}
	function makeSpaces(n) {
		var spaces = "";
		for (var i = 0; i < n; i++){
			spaces+= " ";
		}
		return spaces;
	}
	var tree = "";
	for (var j = 0; j < height - 1; j++){
		tree += makeSpaces(height - j - 1) + makeStars(j * 2 + 1) + makeSpaces(height - j - 1) + "\n"; 
	}
	tree += makeStars((height - 1) * 2 + 1);
	return tree;
}

////////////////
function christmasTree(height) {
  var tree = [];
  for(var i = 1; i <= height; i++) {
    tree.push(" ".repeat(height - i) + "*".repeat((i - 1) * 2 + 1) + " ".repeat(height - i));
  }
  return tree.join("\n");
}

String.prototype.repeat = function(n)
{
    return new Array(n+1).join(this);
}