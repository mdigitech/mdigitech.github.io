var i = 0;
var txt = 'WELCOME TO MDIGITECH!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".logo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

var y = 0;
var txt2 = 'Join Our Community Of Visionaries and Game-Changers'; /* The text */
var speed2 = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter2() {
  if (y < txt2.length) {
    document.querySelector(".text").innerHTML += txt2.charAt(y);
    y++;
    setTimeout(typeWriter2, speed2);
  }
}

typeWriter2()