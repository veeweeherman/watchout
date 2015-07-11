// // // start slingin' some d3 here.

// // // make board that is smaller than DOM
// // // enemy dots, mainCharacter dot
// // // enemy reacts to mainCh movement or VV
// // // enemy dots move to random location at set interval
// // // main character reacts to mouse clicks, it moves to where mouse is clicked and dragged
// // // make scoreboard
// // 	//scoeboard has high score and current score
// // 	//current score resets when mainCh is touched by enemy

// // // enemy dots

// // // creating an array of numbers 0 thru 50

// // var villains = []
// // var Villain = function(id){
// // 	var obj = {};
// // 	obj.id = id
// // 	return obj

// // }
// // for(var i=0; i <50;i++){
// // 	villains.push(Villain(i))
// // }
// // console.log(villains)
// // //var enemy = 50villains

// // d3.select('body')
// // 	.append('svg')
// // 	.data(villains, function(d){return d})
// // 	.attr('class','enemy')
// //     .attr("width", 25)
// //     .attr("height", 25)
// //     // .attr("transform", "translate(0,30)")

// // 	// .enter()


// // d3.select('body')
// // 	.append('svg')
// // 	//.data([1], function(d){return d})
// // 	.attr('class','mainCh')
// //     .attr("width", 50)
// //     .attr("height", 25)

// // var svg = d3.select("body").append("svg")
// //   .append("g")

// // d3.selectAll('svg').transition


// // var MakeVillain = function(){



	
// // }

// function getRandomColor() {
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

//  var jsonCircles = [
//    { "x_axis": Math.random()*400, "y_axis": Math.random()*1770, "radius": Math.random()*20, "color" : getRandomColor() },
//   { "x_axis": Math.random()*1000, "y_axis": Math.random()*2000, "radius": Math.random()*50, "color" : getRandomColor()},
//    { "x_axis": Math.random()*550, "y_axis": Math.random()*2550, "radius": Math.random()*30, "color" : getRandomColor()}];
 
//  var svgContainer = d3.select("body").append("svg")
//                                      .attr("width", 2000)
//                                      .attr("height", 800);
 
// var circles = svgContainer.selectAll("circle")
//                           .data(jsonCircles)
//                           .enter()
//                           .append("circle");

// // var circleAttributes = circles
// //                        .attr("cx", function (d) { return d.x_axis; })
// //                        .attr("cy", function (d) { return d.y_axis; })
// //                        .attr("r", function (d) { return d.radius; })
// //                        .style("fill", function(d) { return d.color; });




// // setInterval(function () {
// //     d3.selectAll('circle').attr("cx", function (d) { return d.x_axis; })
// //                        .attr("cy", function (d) { return d.y_axis; })
// //                        .attr("r", function (d) { return d.radius; })
// //                        .style("fill", function(d) { return d.color; });
// // }, 500);

// jQuery.fx.start = function() {
// 	if ( !timerId ) {
// 		timerId = setInterval(function () {
//     d3.selectAll('circle').attr("cx", function (d) { return d.x_axis; })
//                        .attr("cy", function (d) { return d.y_axis; })
//                        .attr("r", function (d) { return d.radius; })
//                        .style("fill", function(d) { return d.color; });
// }, 500)
// 	}
// };






// // // binding svg nodes to have the values 0-50
// // var enemy = d3.selectAll('svg')
// 	// .attr{x, Math.random() * 875}
// 	// .attr{y, Math.random() * 600}
// // 	// .append('g') // ?makes it a global variable
// // 	.data(datArray, function(d){/*console.log("hi, i'm svg # ",i)*/ return d;}) //assigns each node the data
// // 	.enter() //creates ghost nodes
// // 	.append('svg') //attaches to DOM
// // 	.attr('class', 'enemy');//gives svg nodes a class of enemy
// // 	//.attr("transform", function(d){return "translate(" + d.x + "," + d.y + ")";});
// // 	// console.log('hi im',g)
// // 	// parse = function (N) {
// // 	// 	return Number(N.replace("px", ""));
// // 	// }
// // 		var g = d3.selectAll('g')
// // // var svg = d3.

// // // y-coordinate	
// // // creating a random starting position
// // //Math.random() * 1000 + "px"
// // // iterating through all the 'svg's
// // // for(var i =0;i<g.length;i++){
// // // 	// assigning each one a random width(x axis), and height (y axis)
// // // 	.attr{x, Math.random() * 875}
// // // 	.attr{y, Math.random() * 600}
// // // 	d3.select(g[i]).attr('height', y).attr('width', x);
// // // }

// // var mainCh = d3.selectAll('svg')
// // 	.append('g')
// // 	.enter()
// // 	.attr('class', 'mainCh')
// // 	// /console.log('hi')
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var board = d3.select('body').append('svg')
	.attr('height',1000)
	.attr('width', 2000)

var pos = [];
var circleMaker = function(n){
	for(var i=0;i<n;i++){
		pos.push(i) 
		board.append('circle')
			.attr('cx', Math.random()*1500)
			.attr('cy', Math.random()*500)
			.attr('r', 13)
			.attr('fill', getRandomColor())
	}
}

var hero = board.append("svg:image")
   .attr('x',570)
   .attr('y',250)
   .attr('width', 200)
   .attr('height', 240)
   .attr("xlink:href","http://www.soloimagenestristes.com/wp-content/uploads/2015/imagenes-de-buenos-dias-snoopy-6.png	")
   .attr('class','hero')
	.on('mouseover',function() {
        d3.select(this)
          .transition()
          .duration(500)
          alert('damn Gina!')
      })
          // .attr('stroke-width',3) })

   // .on("click", drag)

   // var drag = d3.behavior.drag();

 // function mouseClick(){this.movethefuckoveralert('whattup')};


var villains = circleMaker(50)
//console.log(villains)
// setTimeout(function(){
// 	villains.transition()
// 	.attr('cx', Math.random()*1500)
// 	.attr('cy', Math.random()*500)
// 	.attr('r', 15)
// },1000)

var sprinkleShaker = function(){
	d3.selectAll('circle')
		.data(pos)
		.transition()
		.attr('cx', function(d){return d * Math.random() * 100})
		.attr('cy', function(d){return d * Math.random() * 100	})
	}

setInterval(sprinkleShaker, 1000)