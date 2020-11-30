var score = 0;
var time = 10;
var go = 0;
body = document.getElementById("body");
pp = document.getElementById("p");
label = document.getElementById("label");
label.innerHTML = "Click To Start"
stopwatch = document.getElementById("stopwatch");

body.addEventListener('touchstart', increase)
body.addEventListener('click', increase)

function increase() {
  if (go == 0) {
    label.style.visibility = "hidden";
  }
  if (time > 0) {
      score++

  }
  pp.innerHTML = score
  if (go == 0) {
    timer()
    go = 1
  } 
}
function timer() {
  console.log(time)
  stopwatch.innerHTML = time
  if (time > 0) {
    time -= 1
    setTimeout(() => {timer()}, 1000);

  } else {
    label.innerHTML = "Score:"
    label.style.visibility = "visible";
    stopwatch.style.visibility = "hidden"
  }
}
  
