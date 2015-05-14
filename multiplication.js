// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

function multTable(size) {
	var array = [];
	for (var i = 1; i <= size; i++) {
		var row = [];
		for (var j = 1; j <= size; j++) {
			row.push(i*j);
		}
		array.push(row);
	}
	return array;
}