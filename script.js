/*
First create multiple divs using checkerboard as template
  create 2 kinds of boxes - one with attribute of class color & one with class box
  class color assign each of different colors
    use rgb to set colors

  set reset button - total and individual boxes (terniary)
*/


(function() {
  var section = document.querySelector('#wrapper');
  var colorPicker = document.querySelector('#colorPicker');
  var chosenColor = "rgb(0,255,255)";


  function divCreator() {
    var newDiv = document.createElement('div');
    newDiv.style.width = "10px";
    newDiv.style.paddingBottom = "10px";
    newDiv.style.cssFloat = "left";
    newDiv.style.backgroundColor = "rgb(255,255,255)";
    newDiv.style.border = "1px solid rgb(240,240,240)";
    newDiv.setAttribute("class", "divider");
    return section.appendChild(newDiv);
  }
  for (var i = 0; i < 3984; i++) {
    divCreator();
  }
  var divider = document.body.querySelectorAll(".divider");
  console.log(divider);
  function colorDivCreator(rgbCode) {
    var newDiv = document.createElement('div');
    newDiv.style.width = "39px";
    newDiv.style.paddingBottom = "38px";
    newDiv.style.cssFloat = "left";
    newDiv.style.backgroundColor = rgbCode;
    newDiv.style.border = "1px solid rgb(240,240,240)";
    return colorPicker.appendChild(newDiv);
  }
  for (var j = 0; j < 240; j+=10) {
    colorDivCreator("rgb(" + (10 + j) + "," + (250 - j) + "," + j + ")");
  }

  for (var k = 0; k < 3984; k++) {
    divider[k].addEventListener("click", function() {
      var color = this.style.backgroundColor === "yellow" ? "white" : "yellow";
      this.style.backgroundColor = color;
    });
  }






})();