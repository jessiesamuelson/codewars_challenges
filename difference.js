// Your goal in this kata is to implement an difference function, which subtracts one list from another.

// It should remove all values from list a, which are present in list b.

// difference([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// difference([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
//loops through the elements in b
 for (i = 0; i < b.length; i++){
 		var j = 0;
    //checks against the elements of a
 		while (j < a.length){
      //if it finds the element, remove it
 			if (a[j] === b[i]){
	 			a.splice(j, 1);
	 		}
      //if it doesnt find the element, increase the index of j
	 		else {
	 			j++;
	 		}
 		}
 	}
 	return a;
}