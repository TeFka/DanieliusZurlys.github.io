function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
}

includeHTML();

function id(di){
  return document.getElementById(di);
  }

  var backgroundCanv1=id("backgroundCanv1");
  var backgroundCtx1=backgroundCanv1.getContext("2d");
  var canv1W = backgroundCanv1.width;
  var canv1H = backgroundCanv1.height;
  var skillsShown = false;

  function drawHeader(){

    var sphere1X = canv1W*0.2;
    var sphere1Y = canv1H*0.5;
    var sphere1R = canv1H*0.3;
      backgroundCtx1.globalAlpha = 0.4;

      backgroundCtx1.beginPath();
      backgroundCtx1.arc(canv1W*0.2, canv1H*0.5, canv1H*0.3, Math.PI*2, false);
      backgroundCtx1.fillStyle="#FF00FF";
      backgroundCtx1.fill();
      backgroundCtx1.closePath();

      backgroundCtx1.beginPath();
      backgroundCtx1.arc(canv1W*0.9, canv1H*0.7, canv1H*0.2, Math.PI*2, false);
      backgroundCtx1.fillStyle="#FF00FF";
      backgroundCtx1.fill();
      backgroundCtx1.closePath();

      backgroundCtx1.beginPath();
      backgroundCtx1.arc(canv1W*0.7, canv1H*0.2, canv1H*0.1, Math.PI*2, false);
      backgroundCtx1.fillStyle="#FF00FF";
      backgroundCtx1.fill();
      backgroundCtx1.closePath();
      backgroundCtx1.globalAlpha = 1;

      backgroundCtx1.fillStyle="#000000";
      backgroundCtx1.font = "8px Roboto";
      backgroundCtx1.fillText("Software", canv1W*0.2-8, canv1H*0.5-2);
      backgroundCtx1.fillText("Hardware", canv1W*0.9-8, canv1H*0.7-2);
      backgroundCtx1.fillText("Other", canv1W*0.7-8, canv1H*0.2-2);

      
      backgroundCtx1.font = "10px Roboto";

      /*ctx.font = "30px Arial";
      ctx.strokeText("Hello World", 10, 50);
      Programming languages: C/C++, Java, Python, HTML, CSS, JavaScript, PHP, SQL.
      Applications/Extensions: OpenGL, OpenCV, Linux, freeRTOS, CMake, git, MATLAB, Qt, VTK, Kivy
      Hardware: Arduino, Raspberry Pi, STM32, ARTY S7*/
  }

  drawHeader();

  function showSkills(){

    if(skillsShown){

      backgroundCtx1.clearRect(0,0,backgroundCanv1.width,backgroundCanv1.height);

    }
    else{

      drawHeader();


    }
  }

  /*Main background*/
  var backgroundCanv2=id("backgroundCanv2");
  var backgroundCtx2=backgroundCanv2.getContext("2d");
  var backgroundWidth=backgroundCanv2.width;
  var backgroundHeight=backgroundCanv2.height;

  var ball1X = backgroundCanv2.width/2;
  var ball1Y = backgroundCanv2.height/4*3;
  var ballS = 7;

  var ballSpeed = 10;
  var ballSpeedX = 10;
  var ballSpeedY = 1;

  function drawBackground(){

      backgroundCtx2.clearRect(0,0,backgroundWidth,backgroundHeight);

      backgroundCtx2.beginPath();
      backgroundCtx2.arc(ball1X, ball1Y, ballS, Math.PI*2, false);
      backgroundCtx2.fillStyle="#6600FF";
      backgroundCtx2.fill();
      backgroundCtx2.closePath();

      ball1X+=ballSpeedX;
      ball1Y+=ballSpeedY;

      if(ball1X+ballS>=backgroundWidth && ballSpeedX>0 || ball1X-ballS<=0 && ballSpeedX<0){
          if(ballSpeedX<0){
          ballSpeedX=ballSpeed;
          }
          else{
          ballSpeedX=-ballSpeed;
          }
      }

      if(ball1Y+ballS>=backgroundHeight && ballSpeedY>0 || ball1Y-ballS<=0 && ballSpeedY<0){
          if(ballSpeedY<0){
              ballSpeedY=ballSpeed;
          }
          else{
              ballSpeedY=-ballSpeed;
          }
      }

  }

  setInterval(drawBackground,50);