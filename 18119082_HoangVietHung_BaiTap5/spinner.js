var data = document.getElementById("data");
var canvas = document.getElementById("custom");

var img1 = new Image();	
img1.src = "./img/sort_up.png";

var img2 = new Image();
img2.src = "./img/sort_down.png";


let x = 0;
let y = 0;
let k = 0;

window.onload = function() {
	ctx.drawImage(img1, 185, 10, 150, 150);
	ctx.drawImage(img2, 185, 350, 150, 150);
};

time = parseInt(k);

var ctx = canvas.getContext('2d');


canvas.addEventListener('mousedown', e=> {
	    x = e.offsetX;
	    y = e.offsetY;
	    if((x > 210 && x < 300)  &&  (y > 50 && y < 104))
	    {
	    	var myTime1 = setInterval(() =>{
				ctx.clearRect(100, 110, 400, 170); 
				time = time + 1;
				ctx.font = "100px Comic Sans MS";
			    ctx.fillStyle = "red";
			    ctx.textAlign = "center";
			    ctx.fillText(time, 260, 270);
			    console.log(time);

				data.innerHTML = time; 
			}, 500);
	    }
	    else if((x > 210 && x < 300) && (y > 400 && y < 450))
	    {
	    	var myTime2 = setInterval(() =>{
				ctx.clearRect(100, 110, 400, 170); 
				time = time - 1;
				ctx.font = "100px Comic Sans MS";
			    ctx.fillStyle = "red";
			    ctx.textAlign = "center";
			    ctx.fillText(time, 260, 270);
			    console.log(time);
				data.innerHTML = time; 
			}, 500);
		}
		if(canvas.addEventListener('mouseup', e =>{
			clearInterval(myTime1);
   			clearInterval(myTime2);
		}
		));
});

canvas.addEventListener('mouseup', e => {
    console.log(time);
});

canvas.addEventListener('click', e=> {
    x = e.offsetX;
    y = e.offsetY;

    ctx.clearRect(100, 110, 400, 170);  
    if((x > 210 && x < 300)  &&  (y > 50 && y < 104))
  	{
    	time = time + 1;
    	ctx.font = "100px Comic Sans MS";
	    ctx.fillStyle = "red";
	    ctx.textAlign = "center";
	    ctx.fillText(time, 260, 270);

		data.innerHTML = time;
	}
    else if((x > 210 && x < 300) && (y > 400 && y < 450))
    {
    	time = time - 1;
    	ctx.font = "100px Comic Sans MS";
	    ctx.fillStyle = "red";
	    ctx.textAlign = "center";
	    ctx.fillText(time, 260, 270);

		data.innerHTML = time;
	}
	else 
	{
		ctx.font = "100px Comic Sans MS";
	    ctx.fillStyle = "red";
	    ctx.textAlign = "center";
	    ctx.fillText(time, 260, 270);

		data.innerHTML = time;
	}
});


// //thiết kế slide tăng giảm
// let staticvalue = 5;
// let isDrawing = false;
// canvas.addEventListener('mousedown', e => {
// 	isDrawing = true;
// })
// canvas.addEventListener('mousedown', e=>{
// 	x=e.offsetX;
// 	y=e.offsetY;

// 	if(isDrawing === true)
// 	{
// 		canvas.addEventListener('mousemove', k=> {
// 			x1=k.offsetX;
// 			y1=k.offsetY;
// 			if(y1 < y)
// 			{
// 				do 
// 				{
// 					time = time + 1;
// 					y1 = y;

// 					ctx.clearRect(100, 110, 400, 170);
// 					ctx.font = "100px Comic Sans MS";
// 		    		ctx.fillStyle = "red";	
// 		    		ctx.textAlign = "center";
// 		    		ctx.fillText(time, 260, 270);
// 					data.innerHTML = time;
// 				}
// 				while (parseInt(y) -  parseInt(y1) == parseInt(staticvalue));
// 			}	
// 			else if(y1 > y)
// 			{
// 				do 
// 				{
// 					time = time - 1;
// 					y1 = y

// 					ctx.clearRect(100, 110, 400, 170);
// 					ctx.font = "100px Comic Sans MS";
// 		    		ctx.fillStyle = "red";	
// 		    		ctx.textAlign = "center";
// 		    		ctx.fillText(time, 260, 270);				
// 		    		data.innerHTML = time;
// 				}
// 				while (parseInt(y1) - parseInt(y) == parseInt(staticvalue));
// 			}
// 			else 
// 			{
// 				time = time;
// 			}
// 		})
// 	}
// 	canvas.addEventListener('mouseup', e => {
// 		isDrawing = false;
// 	})
// })





let staticvalue = 5;
let isDrawing = false;
let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;
canvas.addEventListener('mousedown', l => {
	isDrawing = true;
	x2=l.offsetX;
	y2=l.offsetY;
});
canvas.addEventListener('mousemove', k=>{
	if(isDrawing === true)
	{
		x1=k.offsetX;
		y1=k.offsetY;
		
		if(y1 < y2)
		{
			do 
			{
				time = time + 1;
				y1 = y2;

				ctx.clearRect(100, 110, 400, 170);
				ctx.font = "100px Comic Sans MS";
	    		ctx.fillStyle = "red";	
	    		ctx.textAlign = "center";
	    		ctx.fillText(time, 260, 270);
				data.innerHTML = time;
			}
			while (parseInt(y2) -  parseInt(y1) == parseInt(staticvalue));
		}	
		else if(y1 > y2)
		{
			do 
			{
				time = time - 1;
				y1 = y2

				ctx.clearRect(100, 110, 400, 170);
				ctx.font = "100px Comic Sans MS";
	    		ctx.fillStyle = "red";	
	    		ctx.textAlign = "center";
	    		ctx.fillText(time, 260, 270);				
	    		data.innerHTML = time;
			}
			while (parseInt(y1) - parseInt(y2) == parseInt(staticvalue));
		}
		else 
		{
			time = time;
		}
	}
});
canvas.addEventListener('mouseup', e => {
		isDrawing = false;
	});






