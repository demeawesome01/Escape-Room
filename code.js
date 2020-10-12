var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["90df9d23-0f76-484b-84df-0962c84acacc","6502971d-d28c-4521-9984-db8ab5851408","a243e65c-afe2-4208-ad94-96375c162ff2","54d8ca92-3d43-450a-b4a2-565706b30093","faeb34b5-93da-45bf-8b36-30eb96fc4121","1c6b7f0a-9a7e-42c8-aeb7-dae5b750039f","9c1e4818-1832-4ae1-97aa-3b9cf371720f","acf0d145-0d63-4244-b991-182f3458c5ac","7caf6fa0-1752-439b-8a6e-df6ba6ddf994","333a71ce-3503-4122-bca8-9a4433e428a0"],"propsByKey":{"90df9d23-0f76-484b-84df-0962c84acacc":{"name":"twisted_key","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"QBPA3_3FxnBp0_eeILJsM7yReuN._rB0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/90df9d23-0f76-484b-84df-0962c84acacc.png"},"6502971d-d28c-4521-9984-db8ab5851408":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"u8Hklczb7DgnlHA7v2oVxcA7ZQh5raza","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6502971d-d28c-4521-9984-db8ab5851408.png"},"a243e65c-afe2-4208-ad94-96375c162ff2":{"name":"carpet","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Z_QhpIJ0KSYggZTEGdeeLlUqFDRtCbh8","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a243e65c-afe2-4208-ad94-96375c162ff2.png"},"54d8ca92-3d43-450a-b4a2-565706b30093":{"name":"piggy_bank","sourceUrl":"assets/api/v1/animation-library/gamelab/wlUBiV1HaCM0aGYAHj_5nD.iwdQXPyyl/category_animals/pig.png","frameSize":{"x":288,"y":257},"frameCount":1,"looping":true,"frameDelay":2,"version":"wlUBiV1HaCM0aGYAHj_5nD.iwdQXPyyl","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":288,"y":257},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wlUBiV1HaCM0aGYAHj_5nD.iwdQXPyyl/category_animals/pig.png"},"faeb34b5-93da-45bf-8b36-30eb96fc4121":{"name":"twistedKey","sourceUrl":"assets/api/v1/animation-library/gamelab/WlyghxjlZxlC05dWKDeVki5Vu3TENUrk/category_generic_items/key.png","frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":2,"version":"WlyghxjlZxlC05dWKDeVki5Vu3TENUrk","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/api/v1/animation-library/gamelab/WlyghxjlZxlC05dWKDeVki5Vu3TENUrk/category_generic_items/key.png"},"1c6b7f0a-9a7e-42c8-aeb7-dae5b750039f":{"name":"player","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"olu85VynJbOFM6kxyCDQbOp5tWzoNhEq","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":49},"rootRelativePath":"assets/1c6b7f0a-9a7e-42c8-aeb7-dae5b750039f.png"},"9c1e4818-1832-4ae1-97aa-3b9cf371720f":{"name":"door","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"SGh9uIHdFrxb1vlIWxm.kWJU4i0yPUa4","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9c1e4818-1832-4ae1-97aa-3b9cf371720f.png"},"acf0d145-0d63-4244-b991-182f3458c5ac":{"name":"yes_option","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"BZH4DW0TyxST4PIXYXsRTBDDbc.rp80z","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/acf0d145-0d63-4244-b991-182f3458c5ac.png"},"7caf6fa0-1752-439b-8a6e-df6ba6ddf994":{"name":"no_option","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"8IW69Yta4UINEO7o9H86rH9xeJIjjDVK","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7caf6fa0-1752-439b-8a6e-df6ba6ddf994.png"},"333a71ce-3503-4122-bca8-9a4433e428a0":{"name":"thief","frameCount":1,"frameSize":{"x":239,"y":350},"looping":true,"frameDelay":2,"categories":["characters"],"jsonLastModified":"2020-07-16 22:28:07 UTC","pngLastModified":"2020-01-29 19:48:12 UTC","version":"aYNM.rq5rZK7KbRrh5PiNo7S5WPJWD3e","sourceUrl":"assets/api/v1/animation-library/gamelab/aYNM.rq5rZK7KbRrh5PiNo7S5WPJWD3e/category_characters/kid_22.png","sourceSize":{"x":239,"y":350},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/aYNM.rq5rZK7KbRrh5PiNo7S5WPJWD3e/category_characters/kid_22.png"}}};
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

  //yes and no option
  var yes = createSprite(250,51);  
  yes.setAnimation("yes_option"); 
  yes.visible = false; 
  var no = createSprite(400,51); 
  no.setAnimation("no_option");  
   //yes or no visiblilty function 
   function option(){ 
     yes.visible = false; 
     no.visible = false; 
   } 
   function optionvisible(){ 
     yes.visible = true; 
     no.visible = true; 
   }
  no.visible = false; 
  //inventory 
  var Pennies = 0; 
  var Nickles = 0; 

  
  //room 1 objects 
  var twistedKey = createSprite(39,385,10,10); 
  twistedKey.setAnimation("twisted_key");  
  var piggyBank = createSprite(368,40,10,10);  
  piggyBank.setAnimation("piggy_bank"); 
  piggyBank.scale = 0.2; 
  var door1 = createSprite(200,20,10,10); 
  door1.setAnimation("door");
  door1.scale = 2;
  createEdgeSprites();
  var carpet = createSprite(200,200,10,10); 
  carpet.setAnimation("carpet");  
  carpet.scale = 2.5;
//players and npcs
 var player = createSprite(200,200,10,10); 
 player.setAnimation("player"); 
 player.scale = 1; 
 var thief = createSprite(252,30,10,10);  
 thief.visible = false; 
 thief.setAnimation("thief"); 
 thief.scale = 0.3;

function draw() { 
  background("DarkSlateGrey");
  //player movement(start of code)  
  player.velocityX = 0; 
  player.velocityY = 0; 
  player.collide(edges);
  if(keyDown("LEFT_ARROW")){ 
    player.velocityX = -2;
  }
  if (keyDown("RIGHT_ARROW")){ 
    player.velocityX = 2;
  } 
  if (keyDown("UP_ARROW")){ 
    player.velocityY = -2; 
  } 
  if (keyDown("DOWN_ARROW")){ 
    player.velocityY = 2; 
  } 
  //player movement (end of code) 
  
  //interactions (start of code)  
    //twisted key interaction 
    if (player.isTouching(twistedKey)){ 
      textSize(18); 
      textFont("Arial Black"); 
      fill("black");
      text("Someone twisted the key",0,81); 
      text("Looks Like they want you staying here",0,100);
    } 
    //piggy bank interaction
   if (player.isTouching(piggyBank)){ 
    textSize(18); 
    textFont("Arial Black"); 
    fill("black"); 
     text ("There is some money..",0,81); 
     text ("Pennies or Nickles?",0,100); 
     optionvisible(); 
     //piggy bank yes or no options
     if (mousePressedOver(yes)){ 
       Pennies = 1;   
       yes.destroy(); 
       no.destroy();
       
     } 
     if (mousePressedOver(no)){ 
       yes.destroy(); 
       no.destroy();
     }
   } 
   //door open script 
 if (door1.isTouching(player)&& Pennies === 1){ 
   twistedKey.visible = false; 
   carpet.visible = false;  
   door1.visible = false; 
   piggyBank.visible = false;
   
 }
   door1.debug = true;  
 door1.setCollider("rectangle",0,0,50,20,0);
//thief script 
if (Pennies === 1){ 
  thief.visible = true; 
  Pennies = 0; 
} 
//thief talking  
 if (player.isTouching(thief)){ 
   textSize(18); 
    textFont("Arial Black"); 
    fill("black"); 
     text ("Your money is mine now",0,81); 
     
 }
 
  console.log(Pennies); 
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
