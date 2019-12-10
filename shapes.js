window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
document.getElementById("rectangle").onclick = drawRectangle;
document.getElementById("colored_rectangle").onclick = drawColoredRectangle;
document.getElementById("triangle").onclick = drawTriangle;
document.getElementById("smile").onclick = drawFace;
document.getElementById("pyramid").onclick = drawPyramid;
}


/*
 * Exercise 1.
 */
const sayHello = function() {
    let hello = document.getElementById("student-canvas-1");
    let word = hello.getContext("2d");
    
  word.clearRect(0, 0, hello.width, hello.height);
    
  let wordInput = "";
  let x = true;
    
  while (x == true){
    wordInput = window.prompt("Message: ", "");
    if (wordInput.length > 50){
      alert("Your message is too long. Please enter another message under 50 characters.");
    }else {
      x = false
    }
  }
  word.font = "48px sans-serif";
  word.fillText(wordInput, 30, 70);
}


/*
 * Exercise 2.
 */


const drawRectangle = function() {
     let canvasRectangle = document.getElementById("student-canvas-2");
     let rectangle = canvasRectangle.getContext("2d");
  rectangle.clearRect(0, 0, canvasRectangle.width, canvasRectangle.height);
 
    let run = true;
  while(run == true){
    let width = window.prompt("Width: ", "");
    let height = window.prompt("Height: ", "");
    let rectX = window.prompt("x: ", "");
    let rectY = window.prompt("y: ", "");
    
      if(isNaN(width) == true || isNaN(height) == true || isNaN(rectX) == true || isNaN(rectY) == true){
      alert("At least one of the values was not a number. Please try again.");
   }else if(height == null || width == null || rectX == null || rectY == null){
      run = false;
    }else if(height > 512 || height < 1){
      alert("The height must be between 1 and 512.");
    }else if(width > 1024 || width < 1){
      alert("The width must be between 1 and 1024.");
    }else if(rectX > 1024 || rectX < 1){
      alert("The x-coordinate must be between 1 and 1024.");
    }else if(rectY > 512 || rectY < 1){
      alert("The y-coordinate must be between 1 and 512.");
    }else {
    
      rectangle.beginPath();
      rectangle.rect(rectX, rectY, width, height);
      rectangle.stroke();
     
      run = false;
    }
  }
}


/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
     let canvasColored = document.getElementById("student-canvas-3");
    let colored = canvasColored.getContext("2d");
    
    colored.clearRect(0, 0, canvasColored.width, canvasColored.height);
    
    let run = true;
    let color = null;
    
    while (run == true){
      color = window.prompt("Color: ");
      color = color.toLowerCase();
      color = color.trim();
      switch (color){
        
          case "black":
          colored.fillStyle = "black";
          run = false;
          break;
       
          case "blue":
          colored.fillStyle = "blue";
          run = false;
          break;
      
          case "orange":
          colored.fillStyle = "orange";
          run = false;
          break;
      
          case "green":
          colored.fillStyle = "green";
          run = false;
          break;
       
          case "purple":
          colored.fillStyle = "purple";
          run = false;
          break;
     
          case "yellow":
          colored.fillStyle = "yellow";
          run = false;
          break;
       
          case "red":
          colored.fillStyle = "red";
          run = false;
          break;
       
          case null:
          run = false;
          break;
       
          default:
          alert("That is not a supported color. Try again.");
          break;
      }
    }
    if(color != null){
      colored.beginPath();
      colored.rect(10, 10, 100, 50);
      colored.fill();
    }
}

/*
 * Exercise 4.
 */

    const drawTriangle = function() {
    const canvas = document.getElementById('student-canvas-4');
     const ctx = canvas.getContext('2d');
     ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var side1 = Number(prompt("Side 1: "))
    var side2 = Number(prompt("Side 2: "))
    var side3 = Number(prompt("Side 3: "))
    if (side1*side1 + side2*side2 != side3*side3) {
      alert("That's not a valid right triangle.")
    }
      
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("One of your sides is not a number.")
    }
      
    if (side1 > 1024 || side2 > 1024 || side3 > 1024) {
      alert("Your triangle won't fit on the canvas.")
    }
      
  }  while (side1*side1 + side2*side2 != side3*side3 || isNaN(side1) || isNaN(side2) || isNaN(side3 || side1 > 1024 || side2 > 1024 || side3 > 1024)){

  var height = Math.min (side1, side2, side3)
  var hypotenuse = Math.max(side1, side2, side3)
  var base = Math.sqrt(hypotenuse*hypotenuse - height*height)

  height = height + 25
  base = base + 25

  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(25, height);
  ctx.lineTo(base, height)
  ctx.lineTo(25, 25)
  ctx.stroke();
  }
}

/*
 * Exercise 5.
 */

  const drawFace = function() {
  const canvas = document.getElementById('student-canvas-5');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var radius = (prompt("Radius: "))
    if (radius == null) {
      break;
    }
      
    if (radius < 32) {
      alert("Your radius must be at least 32.")
    }
      
    if (isNaN(radius)) {
      alert("Your radius is not a number.")
    }
      
    if (radius > 256) {
      alert("Your smiley face won't fit on the canvas.")
    }
      
  } while (radius > 256 || isNaN(radius) || radius < 32){

  var radius_eyes = 0.15 * radius
  var radius_mouth = 0.7 * radius

  ctx.beginPath();
  ctx.arc(512, 256, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512, 256, radius_mouth, 0, Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, radius_eyes, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512 + 0.4 * radius, 256 - 0.4* radius, radius_eyes, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  }
}

/*
 * Exercise 6 (extra credit).
 */

  const drawPyramid = function() {
  const canvas = document.getElementById('student-canvas-6');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  do {
    var side = (prompt("Side: "))
    if (side == null) {
      break;
    }
      
    if (side < 1) {
      alert("Your block size must be at least 1.")
    }
      
    if (side > 101) {
      alert("Your pyramid won't fit on the canvas")
    }
      
    if (isNaN(side)) {
      alert("Your block size is not a number.")
    }
      
  } while (isNaN(side) || side > 101 || side < 1)
}
