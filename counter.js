function Counter(){
 this.value = 0;
}

Counter.prototype.incr = function() {
	return this.value += 1;
}


Counter.prototype.valueOf = function() {
  return this.value;
}