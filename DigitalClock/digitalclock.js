// Selects the HTML element with the id "clock" and assigns it to the constant 'clock'
const clock = document.getElementById("clock");
// let date = new Date();

// console.log(date.toLocaleTimeString());

// setInterval(function(){},1000)

// Sets up an interval to execute a function every 1000 milliseconds (1 second)

// The toLocaleTimeString() method is a JavaScript function that converts a Date
//  object to a string, representing the time portion in a way that matches the
//  user’s locale (e.g., region and language settings)
setInterval(() => {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 ms interval for updating the clock every second
