let context = document.getElementById("canvas").getContext("2d");
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
    ctx.fillStyle = "#ff793f";
    ctx.fill();
}

createCircle(context);
createCircle(context2);
createCircle(context3);
createCircle(context4);

// 
// const checkbox = document.querySelectorAll('input[type="checkbox"]');
// const item = document.querySelectorAll(".item");

// for (let i = 0; i < checkbox.length; i++) {
//     checkbox[i].addEventListener("change", function(e) {
//         for (let j = 0; j < item.length; j++) {
//             if (e.target.checked) {
//                 item[i].classList.add("active");
//             } else {
//                 item[i].classList.remove("active");
//             }
//         }
//     })
// }