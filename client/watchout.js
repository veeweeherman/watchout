// // // start slingin' some d3 here.

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
	.attr('height',600)
	.attr('width', 900)

// creates dots, at random positions, w random colors
	// constructor function that makes n circles
	// and attaches to the board
	// with cx and cy as starting positions
	// with radius as size of dots
	// 'fill' assigns color, using random color generator
var pos=[];
var circleMaker = function(n){
	for(var i=0;i<n;i++){
		pos.push(i)
		board.append('circle')
			.attr('cx', Math.random()*1500)
			.attr('cy', Math.random()*500)
			.attr('r', function(){return 6 + Math.random()*12})
			.attr('fill', getRandomColor())
			// .on("mousemove", function() {
			//   var p1 = d3.mouse(this);
			//   this.px = p1[0];
			//   this.py = p1[1];
			//   resume();
			// });
	}
}

var drag = d3.behavior.drag()
    .on("drag", dragmove);

function dragmove(d) {
  var x = d3.event.x;
  var y = d3.event.y;
  d3.select(this).attr("transform", "translate(" + x + "," + y + ")");
}

// makes hero (snoopy)
	// creates var/snoopy, attaches to board, and is an svg element but for image specific
	// give starting posiiton with x and y
	// setting size w width and height
	// img link
	// assigning a class of hero
	// invoking dragmove function on mouseover event
var hero = board.append("svg:image")
   .attr('x', 375)
   .attr('y', 270)
   .attr('width', 150)
   .attr('height', 180)
   .attr("xlink:href","http://www.soloimagenestristes.com/wp-content/uploads/2015/imagenes-de-buenos-dias-snoopy-6.png	")
   .attr('class','hero')
   .call(drag)

// invocation of circle creater, making 50 circles
var villains = circleMaker(30)

// moves dots at random
var sprinkleShaker = function(){
	d3.selectAll('circle')
		.data(pos)
		.transition()
		.duration(650)
		.attr('cx', function(d){return d * Math.random() * 75})
		.attr('cy', function(d){return d * Math.random() * 60})
	}

// invokes sprinkleshaer at timed intervals
setInterval(sprinkleShaker, 1250)