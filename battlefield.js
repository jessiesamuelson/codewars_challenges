// Ready! Set! Fire... but where should you fire?

// The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

//              THE BATTLEFIELD GRID
// ['top left',    'top middle',    'top right',
//  'middle left', 'center',        'middle right',
//  'bottom left', 'bottom middle', 'bottom right']
//
function fire(x,y) {
 if (x === 0 && y === 0) { return 'top left';}
 else if (x === 1 && y === 0) { return 'top middle';}
 else if (x === 2 && y === 0) { return 'top right';}

 else if (x === 0 && y === 1) { return 'middle left';}
 else if (x === 1 && y === 1) { return 'center';}
 else if (x === 2 && y === 1) { return 'middle right';} 

 else if (x === 0 && y === 2) { return 'bottom left';}
 else if (x === 1 && y === 2) { return 'bottom middle';}
 else if (x === 2 && y === 2) { return 'bottom right';}
}

  function(b){
    return a + b;
  }