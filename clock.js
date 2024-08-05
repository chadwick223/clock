function showTime() {
  let time = new Date();
  let utcHours = time.getUTCHours();
  let utcMinutes = time.getUTCMinutes();
  let utcSeconds = time.getUTCSeconds();

  // Calculate IST time by adding the offset
  let istOffset = 5.5;
  let istHours = Math.floor(utcHours + istOffset);
  let istMinutes = utcMinutes + (istOffset % 1) * 60;

  // Handle minute overflow
  if (istMinutes >= 60) {
    istMinutes -= 60;
    istHours++;
  }

  // Handle hour overflow
  if (istHours >= 24) {
    istHours -= 24;
  }

  // Convert to 12-hour format and set AM/PM
  let session = "AM";
  if (istHours >= 12) {
    if (istHours > 12) istHours -= 12;
    session = "PM";
  } else if (istHours == 0) {
    istHours = 12; 
  }
  istHours = istHours < 10 ? "0" + istHours : istHours;
  istMinutes = istMinutes < 10 ? "0" + istMinutes : istMinutes;
  utcSeconds = utcSeconds < 10 ? "0" + utcSeconds : utcSeconds;

  let currentTime = istHours + ":" + istMinutes + ":" + utcSeconds + " " + session;

  console.log(currentTime);
}

setInterval(showTime, 1000);
showTime();

