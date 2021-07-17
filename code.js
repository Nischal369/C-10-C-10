var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(0, 65, 100, 15);
var wall2 = createSprite(40, 0, 10, 70);
var wall3 = createSprite(90, 0, 15, 200);
var wall4 = createSprite(0, 135, 300, 20);
var wall5 = createSprite(135, 50, 15, 60);
var wall6 = createSprite(200, 100, 40, 100);
var wall7 = createSprite(220, 0, 25, 700);
var wall8 = createSprite(0, 200, 300, 20);
var wall9 = createSprite(150, 250, 100, 20);
var wall10 = createSprite(0, 300, 300, 20);
var wall11 = createSprite(200, 350, 200, 25);
var wall12 = createSprite(200, 400, 200, 30);
var wall13 = createSprite(0, 375, 150, 80);
var wall14 = createSprite(400, 350, 140, 300);
var wall15 = createSprite(300, 270, 70, 50);
var wall16 = createSprite(270, 150, 180, 35);
var wall17 = createSprite(400, 100, 180, 20);
var wall18 = createSprite(300, 0, 15, 140);
var wall19 = createSprite(350, 50, 20, 20);
var wall20 = createSprite(250, 50, 20, 20);
var wall21 = createSprite(250, 100, 10, 10);
var wall22 = createSprite(367, 73, 10, 10);
var sophia = createSprite(15, 20, 10, 10);
var cup = createSprite(400, 0, 25, 150);
sophia.shapeColor = "blue";
wall1.shapeColor = "red";
wall2.shapeColor = "red";
wall3.shapeColor = "red";
wall4.shapeColor = "red";
wall5.shapeColor = "red";
wall6.shapeColor = "red";
wall7.shapeColor = "red";
wall8.shapeColor = "red";
wall9.shapeColor = "red";
wall10.shapeColor = "red";
wall11.shapeColor = "red";
wall12.shapeColor = "red";
wall13.shapeColor = "red";
wall14.shapeColor = "red";
wall15.shapeColor = "red";
wall16.shapeColor = "red";
wall17.shapeColor = "red";
wall18.shapeColor = "red";
wall19.shapeColor = "red";
wall20.shapeColor = "red";
wall21.shapeColor = "red";
wall22.shapeColor = "red";
cup.shapeColor = "yellow";
playSpeech("this maze get more tougher and tougher so good luck!", "male", "English");







function draw() {
if (keyDown("up")) {
  sophia.velocityX = 0;
  sophia.velocityY = -4;
}
if (keyDown("down")) {
  sophia.velocityX = 0;
  sophia.velocityY = 4;
}
if (keyDown("right")) {
  sophia.velocityX = 0;
  sophia.velocityX = 4;
}
if (keyDown("left")) {
  sophia.velocityX = -4;
  sophia.velocityY = 0;
}
if (keyWentUp("up")) {
  sophia.velocityX = 0;
  sophia.velocityY = 0;
}
if (keyWentUp("down")) {
  sophia.velocityX = 0;
  sophia.velocityY = 0;
}
if (keyWentUp("right")) {
  sophia.velocityX = 0;
  sophia.velocityY = 0;
}
if (keyWentUp("left")) {
  sophia.velocityX = 0;
  sophia.velocityY = 0;
}
if (sophia.isTouching(cup)) {
 background("white");
 playSound("assets/category_achievements/peaceful_win_8.mp3", false);
 playSpeech("victory!", "male", "English (UK)");
}
if (sophia.isTouching(wall1)) {
  sophia.bounceOff(wall1);
}
if (sophia.isTouching(wall2)) {
  sophia.bounceOff(wall2);
}
if (sophia.isTouching(wall3)) {
  sophia.bounceOff(wall3);
}
if (sophia.isTouching(wall4)) {
  sophia.bounceOff(wall4);
}
if (sophia.isTouching(wall5)) {
  sophia.bounceOff(wall5);
}
if (sophia.isTouching(wall6)) {
  sophia.bounceOff(wall6);
}
if (sophia.isTouching(wall7)) {
  sophia.bounceOff(wall7);
}
if (sophia.isTouching(wall8)) {
  sophia.bounceOff(wall8);
}
if (sophia.isTouching(wall9)) {
  sophia.bounceOff(wall9);
}
if (sophia.isTouching(wall10)) {
  sophia.bounceOff(wall10);
}
if (sophia.isTouching(wall11)) {
  sophia.bounceOff(wall11);
}
if (sophia.isTouching(wall12)) {
  sophia.bounceOff(wall12);
}
if (sophia.isTouching(wall13)) {
  sophia.bounceOff(wall13);
}
if (sophia.isTouching(wall14)) {
  sophia.bounceOff(wall14);
}
if (sophia.isTouching(wall15)) {
  sophia.bounceOff(wall15);
}
if (sophia.isTouching(wall16)) {
  sophia.bounceOff(wall16);
}
if (sophia.isTouching(wall17)) {
  sophia.bounceOff(wall17);
}
if (sophia.isTouching(wall18)) {
  sophia.bounceOff(wall18);
}
if (sophia.isTouching(wall19)) {
  sophia.bounceOff(wall19);
}
if (sophia.isTouching(wall20)) {
  sophia.bounceOff(wall20);
}
if (sophia.isTouching(wall21)) {
  sophia.bounceOff(wall21);
}
if (sophia.isTouching(wall22)) {
  sophia.bounceOff(wall22);
}
background("lightyellow");
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
