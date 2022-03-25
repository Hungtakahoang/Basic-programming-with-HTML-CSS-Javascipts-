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

var btnBedroom = document.getElementById('roomA');

btnBedroom.addEventListener('click', function(){
    document.getElementById('bed_roomA').style.display = 'block';
    document.getElementById('living_roomA').style.display = 'none';
    document.getElementById('settingId').style.display = 'none';

})

var btnLivingroom = document.getElementById('roomB');

btnLivingroom.addEventListener('click', function(){
    document.getElementById('bed_roomA').style.display = 'none';
    document.getElementById('living_roomA').style.display = 'block';
    document.getElementById('settingId').style.display = 'none';
})

var btnSetting = document.getElementById('roomC');

btnSetting.addEventListener('click', function(){
    document.getElementById('bed_roomA').style.display = 'none';
    document.getElementById('living_roomA').style.display = 'none';
    document.getElementById('settingId').style.display = 'block';
})

function setting() {
  const hourset = document.getElementById('hourId').value;
  const minuteset = document.getElementById('minuteId').value;
  const secondset = document.getElementById('secondId').value;
  console.log (hourset);
  setInterval(function() {
    const timer = new Date();

    const hourreal = timer.getHours();
    const minutereal = timer.getMinutes();
    const secondreal = timer.getSeconds();

    if((hourset == hourreal) && (minuteset == minutereal) && (secondset == secondreal))
    {
      document.getElementById('te1').style.display = 'none';
      document.getElementById('te2').style.display = 'block';
    }
    // else
    // {
    //   setTimeout(function() {
    //     document.getElementById('te1').style.display = 'block';
    //     document.getElementById('te2').style.display = 'none';
    //   },10000)
    // }
  },1000)
}
