var heart = $("#heart");
var world = $("#world");
var tear = $("#tear");

function updateBoxPos(coords) {
  heart.css('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
}

function updateBoxWidth(size) {
  heart.css('width', size.width + 'px');
  heart.css('height', size.height + 'px');
}

function updateWorldRotation(angle) {
  world.css({'transform' : 'rotate('+ angle +'deg)'});
}

function updateTearPos(coords) {
  tear.css('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}

function setupTweens() {
  var WIDTH = 100;
  var HEIGHT = 100;
  var coords = { x: 0, y: 0 };
  var size = { width: WIDTH, height: HEIGHT };

  var tween1 = new TWEEN.Tween(coords)
    .to({
      x: [-(WIDTH/2), -(WIDTH/4), -(WIDTH/2), +0],
      y: [-(HEIGHT/2), -(HEIGHT/4), -(HEIGHT/2), +0]
    }, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(function() {
      updateBoxPos(coords)
    })
    .repeat(Infinity)
    .delay(200)
    .start();
  
  var tween2 = new TWEEN.Tween(size)
    .to({ 
      width: [2*WIDTH, 1.5*WIDTH, 2*WIDTH, 1*WIDTH],
      height: [2*HEIGHT, 1.5*HEIGHT, 2*HEIGHT, 1*HEIGHT]
    }, 1000)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(function() {
      updateBoxWidth(size)
    })
    .repeat(Infinity)
    .delay(200)
    .start();

  var angle = {value: 0}
  var tweenRotation = new TWEEN.Tween(angle)
    .to({
      value: 720
    }, 2000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .repeat(Infinity)
    .delay(400)
    .onUpdate(function() {
      updateWorldRotation(angle.value)
    })
    .start();

  var tearPos = {x:0, y:0}
  var tweeTear = new TWEEN.Tween(tearPos)
    .to({
      x: +0, y: +20
    }, 1000)
    .easing(TWEEN.Easing.Quadratic.In)
    .repeat(Infinity)
    .delay(500)
    .onUpdate(function() {
      updateTearPos(tearPos)
    })
    .start();
}