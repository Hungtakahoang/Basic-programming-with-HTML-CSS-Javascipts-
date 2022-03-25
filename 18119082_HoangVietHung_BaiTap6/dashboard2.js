//time
function Realtime() {
  var rtcClock = new Date();

  var hours = rtcClock.getHours();
  var minutes = rtcClock.getMinutes();
  var seconds = rtcClock.getSeconds();
  var date = rtcClock.toDateString();
 

  var amPm = ( hours < 12 ) ? "AM": "PM";
  hours = (hours > 12) ? hours - 12: hours;

  hours = ("0" + hours ).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  document.getElementById("clockId").innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm +",  " + date; 
  var t = setTimeout(Realtime, 1000);
}

let tabHeader = document.getElementsByClassName('tab-header')[0];
let tabBody = document.getElementsByClassName('tab-body')[0];

let tabsPane = tabHeader.getElementsByClassName('h');

for (let k = 0; k < tabsPane.length; k++) {
    tabsPane[k].addEventListener('click', function () {
	    tabHeader.getElementsByClassName('active')[0].classList.remove('active');
	    tabsPane[k].classList.add('active');
	    tabBody.getElementsByClassName('active')[0].classList.remove('active');
	    tabBody.getElementsByClassName('h')[k].classList.add('active');
    });
}

let context1 = document.getElementById("canvas").getContext("2d");
let context2 = document.getElementById("canvas2").getContext("2d");
let context3 = document.getElementById("canvas3").getContext("2d");
let context4 = document.getElementById("canvas4").getContext("2d");


// Hinh Tron
function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function createCircle(ctx) {
    var circle = new Circle(12.5, 12.5, 12.5);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#4b9afb";
    ctx.fill();
}

createCircle(context1);
createCircle(context2);
createCircle(context3);
createCircle(context4);

// 
const checkbox = document.querySelectorAll('input[type="checkbox"]');
const item = document.querySelectorAll(".item");

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change", function(e) {
        for (let j = 0; j < item.length; j++) {
            if (e.target.checked) {
                item[i-1].classList.add("actives");
                console.log("device" + " "+  i + " " + "on");
            } else {
                item[i-1].classList.remove("actives");
                console.log("device" + " "+  i + " " + "off");
            }
        }
    })
}
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var textON1 = document.getElementById("textON1");
  var textOFF1 = document.getElementById("textOFF1");
  var checkBox2 = document.getElementById("myCheck2");
  var textON2 = document.getElementById("textON2");
  var textOFF2 = document.getElementById("textOFF2");
  var checkBox3 = document.getElementById("myCheck3");
  var textON3 = document.getElementById("textON3");
  var textOFF3 = document.getElementById("textOFF3");
  var checkBox4 = document.getElementById("myCheck4");
  var textON4 = document.getElementById("textON4");
  var textOFF4 = document.getElementById("textOFF4");
  if (checkBox.checked == true){
    textON1.style.visibility = "visible";
    textOFF1.style.visibility = "hidden";
	}
  else {
  	textON1.style.visibility = "hidden";
  	textOFF1.style.visibility = "visible";
  }
  if (checkBox2.checked == true){
    textON2.style.visibility = "visible";
    textOFF2.style.visibility = "hidden";
	}
  else {
  	textON2.style.visibility = "hidden";
  	textOFF2.style.visibility = "visible";
  }
  if (checkBox3.checked == true){
    textON3.style.visibility = "visible";
    textOFF3.style.visibility = "hidden";
	}
  else {
  	textON3.style.visibility = "hidden";
  	textOFF3.style.visibility = "visible";
  }
  if (checkBox4.checked == true){
    textON4.style.visibility = "visible";
    textOFF4.style.visibility = "hidden";
	}
  else {
  	textON4.style.visibility = "hidden";
  	textOFF4.style.visibility = "visible";
  }
}