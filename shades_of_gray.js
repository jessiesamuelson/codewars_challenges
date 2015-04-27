function shadesOfGrey(n){
  // returns n shades of grey in an array
  var grayArray = [];
  var hexArray = ["0", "1" , "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

  // Limits the size of the array for n greater than 254
  var end = function(){
  	if (n > 254){
  		return 254;
  	}
  	else {
  		return n;
  	}
  }

  // Determines how many full iterations to loop through the hexarray for the odd places of the hexidecimal code
  var rounds = Math.floor(end() / 16);

  // Determines how far to go in the last, not full loop, for the even places of the hexidecimal code, adding one for the removal of the first hex code created "#000000" 
  var lastRound = end() % 16 + 1;

  // Iterates over the complete loops
  for (var i = 0; i < rounds; i++){
  	for (var j = 0; j < 16; j++){
  		var element = "#" + hexArray[i] + hexArray[j] + hexArray[i] + hexArray[j] + hexArray[i] + hexArray[j];
  		grayArray.push(element);
  	}
  }

  // Iterates over the remaining loop
  for (var k = 0; k < lastRound; k++){
  	var newElement = "#" + hexArray[rounds] + hexArray[k] + hexArray[rounds] + hexArray[k] + hexArray[rounds] + hexArray[k];
  	grayArray.push(newElement);
  }

  // Removes #000000
  grayArray.shift();

  // Returns an empty array if n = 0
  if (n = 0){
  	grayArray = [];
  }
  return grayArray;
}