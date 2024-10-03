function dvd() {

  var elem = document.getElementById("square");
  var ypos = 0;
  var xpos = 0;
  var direction = 1;
  var index = 0;
  var id = setInterval(frame, 10);
  function frame() {

    if (ypos <= 0) {
      if (direction == 3) {
        direction = 2;
      } else if (direction == 4) {
        direction = 1
      }
      random = Math.round(Math.random());
    } else if (xpos >= 350) {
      if (direction == 1) {
        direction = 2;
      } else if (direction == 4) {
        direction = 3;
      }
      random = Math.round(Math.random());
    } else if (ypos >= 360) {
      if (direction == 1) {
        direction = 4;
      } else if (direction == 2) {
        direction = 3;
      }
      random = Math.round(Math.random());
    } else if (xpos <= 0) {
      if (direction == 2) {
        direction = 1;
      } else if (direction == 3) {
        direction = 4;
      }
      random = Math.round(Math.random());
    }

    if (direction == 1) {
      if (random == 0) {
        ypos++;
      }
      ypos++;
      xpos = xpos + 1 + random;
    } else if (direction == 2) {
      if (random == 0) {
        xpos--;
      }
      ypos = ypos + 1 + random;
      xpos--;
    } else if (direction == 3) {
      if (random == 0) {
        ypos--;
      }
      ypos--;
      xpos = xpos - 1 - random;
    } else if (direction == 4) {
      if (random == 0) {
        xpos++;
      }
      ypos = ypos - 1 - random;
      xpos++;
    }
    elem.style.top = ypos + 'px';
    elem.style.left = xpos + 'px';
  }
}
