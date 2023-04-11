//Hello (̶◉͛‿◉̶) 
//This sketch essentially has 3 features, the pupils follow the mouse cursor, the mouth changes when mouse is clicked and the background colour changes when spacebar is pressed
//created a 600x600 white canvas
function setup() {
  createCanvas(600, 600);
  background(255);

//I have found that in order to avoid an error with the global variable mouthBegin and mouthEnd, I need to add them to the window object to make them accessible to the functions I wrote below
  window.mouthBegin = PI;
  window.mouthEnd = 0;
  window.bgColor = 255;
}

function draw() {
  background(window.bgColor);
	//created two arms
  fill(50);
  rect(120, 400, 150, 20, 100);
  fill(50);
  rect(340, 400, 150, 20, 100);
  //created two legs
  fill(50);
  rect(240, 440, 20, 150, 100);
  fill(50);
  rect(340, 440, 20, 150, 100);
  //created body
  fill(150);
  rect(200, 350, 200, 200, 70);
  //created stomach pattern
  fill(100);
  rect(225, 380, 150, 150, 70);
  //created ears
  fill(200);
  arc(260, 255, 80, 200, PI, TWO_PI);
  fill(200);
  arc(340, 255, 80, 200, PI, TWO_PI);
  //created head
  fill(200);
  circle(300, 300, 200);
	//created white of the eye x2
  fill(250);
  circle(250, 280, 50);
  circle(340, 280, 50);
  // created pupils
  leftPupil();
  rightPupil();
  //created nose
  fill(150);
  rect(300, 310, 60, 20, 40);
  //cereated mouth
  mouth();
}
// here i used the lerp function to make th epupils follow the mouse cursor without leaving the scope of the white of the eye by measuring the distance
function leftPupil() {
  const eyeX = 250;
  const eyeY = 280;
  const maxDistance = 10;
  const distance = dist(mouseX, mouseY, eyeX, eyeY);
  const ratio = min(distance, maxDistance) / distance;

  const pupilX = lerp(eyeX, mouseX, ratio);
  const pupilY = lerp(eyeY, mouseY, ratio);

  fill(50);
  circle(pupilX, pupilY, 30);
}
// repeated twice
function rightPupil() {
  const eyeX = 340;
  const eyeY = 280;
  const maxDistance = 10;
  const distance = dist(mouseX, mouseY, eyeX, eyeY);
  const ratio = min(distance, maxDistance) / distance;

  const pupilX = lerp(eyeX, mouseX, ratio);
  const pupilY = lerp(eyeY, mouseY, ratio);

  fill(50);
  circle(pupilX, pupilY, 30);
}
//I set the constants for the sad mouth
function mouth() {
  const mouthX = 300;
  const mouthY = 360;
  const mouthW = 100;
  const mouthH = 50;

  fill(255);
  arc(mouthX, mouthY, mouthW, mouthH, window.mouthBegin, window.mouthEnd);
}
// When mouse is clicked anywhere the mouthBegin and mouthEnd functions are flipped to created the happy mouth
function mousePressed() {
  let temp = window.mouthBegin;
  window.mouthBegin = window.mouthEnd;
  window.mouthEnd = temp;
}
//When space bar is pressed the background color goes form white to any random color
function keyPressed() {
  if (key === ' ') {
    window.bgColor = color(random(255),random(255),random(255));
  }
}
// Thankyou ᕙ(`▿´)ᕗ