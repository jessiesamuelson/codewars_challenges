// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")  
//            --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased) 

function sillycase(silly) {
  var midpoint = Math.ceil(silly.length/2);
  var firstHalf = silly.slice(0, midpoint).toLowerCase();
  var secondHalf = silly.slice(midpoint, silly.length).toUpperCase();
  var sillyString = firstHalf + secondHalf;
  return sillyString;
}