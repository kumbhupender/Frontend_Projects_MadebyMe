
var head = document.getElementById('container');
	var print = document.getElementById('counting');
	
	var count = 0;
	head.addEventListener('click',function(){
		count++;
		console.log(count);
		print.innerText = count + " ";
});

//---------------------------------------------------------------------------------------------------------------------------------
//For keypress event

var searchInput = document.getElementById('search');

// searchInput.addEventListener('keypress',function(){
// 	console.log('KeyPress');
// });

//But in keypress event not tackle the up down keys

/*For knowing which key is press use event in the function
  to know which key press and this is usefull in many cases
*/


document.addEventListener('keydown',function(event){
	console.log('Key Down',event.keyCode);
});

//---------------------------------------------------------------------------------------------------------------------------------
//Change a theme using toggle button
 var changeTheme = document.getElementById('toggle-btn-on');

function changeColor(){
	document.body.style.backgroundColor = 'black';
	document.body.style.color = 'white';
}

 changeTheme.addEventListener('click',changeColor);

 /*------------------------------------------------------------------------------------------------------------------------------*/

 //chane a color and a shape using click event
 var btn1 = document.getElementById('btn-1');
 var btn2 = document.getElementById('btn-2');
 var changeColor = document.getElementById('bucket');
 var changeShape = document.getElementById('inner-container');

 //for changing color
 function changingColor(){
	console.log("hello");
	changeColor.style.backgroundColor = 'green';
 }

 //for changing shape
 function changingShape(){
	changeShape.style.borderBottomRightRadius = "80%"
 }
 btn1.addEventListener('click',changingColor);
 btn2.addEventListener('click',changingShape);