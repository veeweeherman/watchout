// // // start slingin' some d3 here.

// set window setting in global scope
var settings = {
	w: window.innerWidth,
	h: window.innerHeight,
	r: 15,
	n: 30,
	duration: 1500
}





// positions mouse in center of board from the start
// var hero = { x: settings.w/2, y: settings.h/2};
// generate random colors for each dot
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// define limits of the board
	// create the board var, and attach it to the body of the DOM
	// assign the board to be an SVG element
	// give characteristics of height and width, w values
var board = d3.select('body').append('svg')
	.attr('width', window.innerWidth)
	.attr('height', window.innerHeight)

// creates dots, at random positions, w random colors
	// constructor function that makes n circles
	// and attaches to the board
	// with cx and cy as starting positions
	// with radius as size of dots
	// 'fill' assigns color, using random color generator
var pos=[];
var sprinkleMaker = function(n){
	for(var i=0;i<n;i++){
		pos.push(i)
		board.append('circle')
			.attr('cx', Math.random()*1500)
			.attr('cy', Math.random()*500)
			.attr('r', function(){return 6 + Math.random()*12})
			.attr('fill', getRandomColor())
	}
}

var drag = d3.behavior.drag()
    .on("drag", dragmove);

function dragmove(d) {
  var x = d3.event.x-500;
  var y = d3.event.y-500;
  d3.select(this)
  	.attr("transform", "translate(" + x + "," + y + ")")
}

// makes hero (snoopy)
	// creates var/snoopy, attaches to board, and is an svg element but for image specific
	// give starting posiiton with x and y
	// setting size w width and height
	// img link
	// assigning a class of hero
	// invoking dragmove function on mouseover event
var hero = board.append("svg:image")
   .attr('x', 400) //<--must factor to set cursor at middle of snoopy
   .attr('y', 400) //<--must factor to set cursor at middle of snoopy
   .attr('width', 150)
   .attr('height', 180)
   .attr("xlink:href","http://www.soloimagenestristes.com/wp-content/uploads/2015/imagenes-de-buenos-dias-snoopy-6.png	")
   .attr('class','hero')
   .call(drag)

// invocation of circle creater, making 30 circles
var sprinkles = sprinkleMaker(30)

// moves dots at random
var sprinkleShaker = function(){
	d3.selectAll('circle')
		.data(pos)
		.transition()
		.duration(650)
		.attr('cx', function(d){return d * Math.random() * 75})
		.attr('cy', function(d){return d * Math.random() * 60})
	}

// invokes sprinkleshaker at timed intervals
setInterval(sprinkleShaker, 1250)

//count collisions/"sprinkels eaten"
//listen for event: when mouse/hero touches any sprinkles, increment sprinklesEaten counter
	// check if hero's xy cooridnates are matched as any other xy coordinates of each sprinkles, increment collison

var sprinklesEaten = function() {
	var score = 0;
	d3.selectAll('sprinkles').forEach('sprinkles', function(sprinkle) { 
		if (sprinkle.cx === hero.x && sprinkle.cy === hero.y) { 
			score++
		}
	})
}


sprinklesEaten();











