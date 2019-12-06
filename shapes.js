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
  word.strokeText(wordInput, 30, 70);
};


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
};


/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
