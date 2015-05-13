// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

var walk = ['n','s','n','s','n','s','n','s','n','s']

function isValidWalk(walk) {
	//returns false if the length of the walk isn't ten minutes
  if (walk.length != 10){
		return false;
	} else {
    //tests to see you end up at the starting point
		var i = 0;
		while (i < walk.length) {
      //each n must have a corresponding s
			if (walk[i] === "n" && walk.indexOf("s") > 0) {
        //remove both
				walk.shift();
				walk.splice(walk.indexOf("s"), 1);
			}
      //each s must have a corresponding n
      else if (walk[i] === "s" && walk.indexOf("n") > 0) {
        //remove both
				walk.shift();
				walk.splice(walk.indexOf("n"), 1);
			}
      //each e must have a corresponding w
      else if (walk[i] === "e" && walk.indexOf("w") > 0) {
        //remove both
				walk.shift();
				walk.splice(walk.indexOf("w"), 1);
			}
      //each w must have a corresponding e
      else if (walk[i] === "w" && walk.indexOf("e") > 0) {
				//remove both
        walk.shift();
				walk.splice(walk.indexOf("e"), 1);
			}
      //increase the index to exit loop
      else {
				i++;
			}
			
		}
	}
  //if the walk length now is zero each direction had a corresponding reverse 
  //direction, so we are at the proper starting point
	if (walk.length === 0){
		return true;
	} else {
		return false;
	}
////////////////////////////////
	function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
}