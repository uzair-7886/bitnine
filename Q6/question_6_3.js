function myDigitalClock(){
    var d1 = new Date();
    var hours = d1.getHours(); 
    var minutes = d1.getMinutes();
    var seconds = d1.getSeconds();
    var zone = "AM";

    //setting time zone if hours are greater than 12
    if(hours > 12){
      hours -= 12;
      zone = "PM";
    }

    //padding zeroes to strings less than 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    //setting time for digital clock
    var time = hours + ":" + minutes + ":" + seconds + " " + zone;

    //displaying time in the div element
    document.getElementById("clock").innerText = time;
  }

    //calling the function every second to display secondss
  setInterval(myDigitalClock, 1000);