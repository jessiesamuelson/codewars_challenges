var circleArea = function(radius) {
	// Tests that the input is a number
	var isNumber = function(){
		if (typeof radius === "number") {
			return true;
		}	else {
			return false;
		}
	}
	if (isNumber()){
		if (radius < 0) {
			return false;
		} else {
			var area = radius * radius * Math.PI;
			area = Math.round(area * 100);
			area /= 100;
			return area;
		}
	} else {
		return false;
	} 
};

var circleArea = function(radius) {
  if(isNaN(radius) || radius <= 0) return false;
  return Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100;
};

var circleArea = function(radius) {
  return radius > 0 && +(Math.PI * radius * radius).toFixed(2);
};

var circleArea = function(radius) {
	if (radius > 0) {
		return Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100;
	} else {
		return false;
	}
};