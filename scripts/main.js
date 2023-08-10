var eventdate_input;
var countdownInterval; // Store the interval ID

function startCountdown() {
  clearInterval(countdownInterval); // Clear any existing interval
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  var eventdate = new Date(eventdate_input);

  var countDown = new Date(eventdate).getTime();
  countdownInterval = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDown - now;

    var days = Math.floor(distance / day);

    // Pad 0
    var hours = Math.floor((distance % day) / hour)
      .toString()
      .padStart(2, "0");
    var minutes = Math.floor((distance % hour) / minute)
      .toString()
      .padStart(2, "0");
    var seconds = Math.floor((distance % minute) / second)
      .toString()
      .padStart(2, "0");

    // Pad 0 for negative digits
    if (distance < 0) {
      hours =
        "-" +
        Math.abs(Math.floor((distance % day) / hour))
          .toString()
          .padStart(2, "0");
      minutes =
        "-" +
        Math.abs(Math.floor((distance % hour) / minute))
          .toString()
          .padStart(2, "0");
      seconds =
        "-" +
        Math.abs(Math.floor((distance % minute) / second))
          .toString()
          .padStart(2, "0");
    }

    // Create dim segments
    document.getElementById("days-dim-segment").innerText = "8".repeat(
      days.toString().length
    );
    document.getElementById("hours-dim-segment").innerText = "8".repeat(
      hours.toString().length
    );
    document.getElementById("minutes-dim-segment").innerText = "8".repeat(
      minutes.toString().length
    );
    document.getElementById("seconds-dim-segment").innerText = "8".repeat(
      seconds.toString().length
    );

    // Insert digits
    document.getElementById("days-segment").innerText = days;
    document.getElementById("hours-segment").innerText = hours;
    document.getElementById("minutes-segment").innerText = minutes;
    document.getElementById("seconds-segment").innerText = seconds;
  }, 1000); // Updated to refresh every second
}

startCountdown();
