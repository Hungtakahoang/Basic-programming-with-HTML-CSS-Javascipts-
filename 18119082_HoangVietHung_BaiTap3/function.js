//button cho đèn thứ nhất
var btnOn01 = document.getElementById("btnOnId_01");
var btnOff01 = document.getElementById("btnOffId_01");

btnOn01.onclick = function(){
	document.getElementById("denId_01").src = "./img/light_bulb.png"
}
btnOff01.onclick = function(){
	document.getElementById("denId_01").src = "./img/light_bulb_off.png"
};

//SliderNgang
var sliderNgang = document.getElementById("sliderNgangId");

sliderNgang.addEventListener("mousemove", function(){
  document.getElementById("sliderNgangValue").innerHTML = sliderNgang.value;
})

//button cho đèn thứ hai
var btnOn02 = document.getElementById("btnOnId_02");
var btnOff02 = document.getElementById("btnOffId_02");

btnOn02.onclick = function(){
    document.getElementById("denId_02").src = "./img/light_bulb.png"
}

btnOff02.onclick = function(){
  document.getElementById("denId_02").src = "./img/light_bulb_off.png"
}

//button cho đèn thứ ba
var btnOn03 = document.getElementById("btnOnId_03");
var btnOff03 = document.getElementById("btnOffId_03");

btnOn03.onclick = function(){
    document.getElementById("denId_03").src = "./img/light_bulb.png"
}

btnOff03.onclick = function(){
  document.getElementById("denId_03").src = "./img/light_bulb_off.png"
}

function initial_sliderTron_01(data){
  $("#sliderTronId_01").roundSlider({
    sliderType: "min-range",
    width: 22,
    radius: 100,
    readOnly: false,
    value: data,
    circleShape: "half-top",
    lineCap: "round",
    editableTooltip: false,
    max: 200,
    svgMode: true,
    rangeColor: "purple",
    change: function (args) {
      var obj = $("#sliderTronId_01").data("roundSlider");
      //$('#sliderTronId_02').roundSlider('setValue', obj.getValue());
      document.getElementById("temps").innerHTML = obj.getValue();
    }
  });
};

initial_sliderTron_01(0); //Start first time