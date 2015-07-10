// start slingin' some d3 here.

// make board that is smaller than DOM
// enemy dots, mainCharacter dot
// enemy reacts to mainCh movement or VV
// enemy dots move to random location at set interval
// main character reacts to mouse clicks, it moves to where mouse is clicked and dragged
// make scoreboard
	//scoeboard has high score and current score
	//current score resets when mainCh is touched by enemy

// enemy dots

// creating an array of numbers 0 thru 50
var datArray = Array(50);
// binding svg nodes to have the values 0-50
var enemy = d3.selectAll('svg')
	.append('g') // ?makes it a global variable
	.data(datArray, function(d, i){/*console.log("hi, i'm svg # ",i)*/; return d}) //assigns each node the data
	.enter() //creates ghost nodes
	.append('svg') //attaches to DOM
	.attr('class', 'enemy') //gives svg nodes a class of enemy
	var g = d3.selectAll('g')
	//.attr("transform", function(d){return "translate(" + d.x + "," + d.y + ")";});
	// console.log('hi im',g)

// var svg = d3.


d3.select('body').selectAll('svg')
// y-coordinate
// creating a random starting position
//Math.random() * 1000 + "px"
// iterating through all the 'svg's
// for(var i =0;i<g.length;i++){
// 	// assigning each one a random width(x axis), and height (y axis)
// 	var x = i + Math.random() * 875
// 	var y = i + Math.random() * 600
// 	d3.select(g[i]).attr('height', y).attr('width', x);
// }