//****Fantasy Chara Designer By R2MIX */


let imgHair, imgEyes, imgPrenose, imgNose, imgMouth, imgArmor, imgHelm;
let rngNose, rngMouth, rngEye, rngHair, rngPrenose, rngArmor, rngHelm;
let imgSave, imgHide, saving = false, savingCounter = 0;
let hideHair = false, hideEyes = false, hideNose = false, hidePrenose = false, hideMouth = false, hideArmor = false, hideHelm = false;
let selected = "";
let hairX = 56, hairY = 56, eyeX = 56, eyeY = 56, prenoseX = 56, prenoseY = 56, noseX = 56, noseY = 56, mouthX = 56, mouthY = 56, armorX = -100, armorY = 500, helmX = 56, helmY = 56;
let hairSizeW = 1024, hairSizeH = 1024, eyesSizeW = 1024, eyesSizeH = 1024, prenoseSizeW = 1024, prenoseSizeH = 1024;
let noseSizeW = 1024, noseSizeH = 1024, mouthSizeW = 1024, mouthSizeH = 1024, armorSizeW = 1280, armorSizeH = 1280, helmSizeW = 1024, helmSizeH = 1024;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {

  // fonction pour détecter si mobile ou mobileversion computer ou ordinateur
  let userAgent = navigator.userAgent;
  let isComputer = /Windows|Macintosh|Linux/i.test(userAgent);

  if (window.innerWidth < 600 && !isComputer) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=0.4');
  } else {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');
  }
  //-*-----------------------------------------------------***-------------------------
  createCanvas(windowWidth, windowHeight);
  rngNose = 0;
  rngMouth = 0;
  rngPrenose = 0;
  rngEye = 0;
  rngHair = 0;
  rngArmor = 0;
  rngHelm = 0;

  rngNose = int(random(12));
  rngMouth = int(random(11));
  rngPrenose = int(random(4));
  rngEye = int(random(30));
  rngHair = int(random(46));
  rngArmor = int(random(12));
  rngHelm = int(random(12));


  imgHair = loadImage("data/hair/hair" + rngHair + ".png");
  imgEyes = loadImage("data/eyes/eyes" + rngEye + ".png");
  imgPrenose = loadImage("data/prenose/prenose" + rngPrenose + ".png");
  imgNose = loadImage("data/nose/nose" + rngNose + ".png");
  imgMouth = loadImage("data/mouth/mouth" + rngMouth + ".png");
  imgArmor = loadImage("data/tops/top" + rngArmor + ".png");
  imgHelm = loadImage("data/visage/visage" + rngHelm + ".png");
  imgSave = loadImage("save.png");
  imgHide = loadImage("hide.png");

}

function draw() {
  clear();
  background(255);
  fill(0);
  push();
  noStroke();
  text('Fantasy chara Designer', 40, 40);
  pop();
  imageMode(CORNER);
  personnage();
  print(eyeX)
  saves();
  if (saving == false) { allButton(); }
}

function allButton() {
  push();
  noFill(0);
  stroke(0);
  strokeWeight(2);
  buttonPP();
  buttonImageSelected(40 + 80, imgEyes, "eye", rngEye);
  buttonNext(40 + 80);
  buttonImageSelected(40 + 80 * 2, imgPrenose, "prenose", rngPrenose);
  buttonNext(40 + 80 * 2);
  buttonImageSelected(40 + 80 * 3, imgNose, "nose", rngNose);
  buttonNext(40 + 80 * 3);
  buttonImageSelected(40 + 80 * 4, imgMouth, "mouth", rngMouth);
  buttonNext(40 + 80 * 4);
  buttonImageSelected(40 + 80 * 5, imgHair, "hair", rngHair);
  buttonNext(40 + 80 * 5);
  buttonImageSelected(40 + 80 * 6, imgArmor, "armor", rngArmor);
  buttonNext(40 + 80 * 6);
  buttonImageSelected(40 + 80 * 7, imgHelm, "helm", rngHelm);
  buttonNext(40 + 80 * 7);
  pop();
}

function saves() {
  if (saving == true) {
    save('myCharacter.png');
    saving = false;
  }
}

function buttonImageSelected(yy, imageDisplayed, imgSelected, rng) {
  // a button selected
  push();
  if (imgSelected == selected) {
    fill(0, 125);
  } else {
    fill(0, 0);
  }
  image(imageDisplayed, width - 160, yy, 80, 80);
  rect(width - 160, yy, 80, 80);
  text(rng, width - 160 + 5, yy + 15);
  pop();
}

function buttonNext(h) {

  line(width - 180, h + 10, width - 200, h + 40);
  line(width - 180, h + 70, width - 200, h + 40);

  line(width - 60, h + 10, width - 40, h + 40);
  line(width - 60, h + 70, width - 40, h + 40);
}

function personnage() {
  if (buttonIsClicked(helmX, helmY, helmSizeW, helmSizeH) && selected == "helm") {
    helmX = helmX + (mouseX - pmouseX);
    helmY = helmY + (mouseY - pmouseY);
  }
  if (hideHelm == false) { image(imgHelm, helmX, helmY, helmSizeW, imgHelm.height * helmSizeH / imgHelm.width); }

  if (buttonIsClicked(eyeX, eyeY, eyesSizeW, eyesSizeH) && selected == "eye") {
    eyeX = eyeX + (mouseX - pmouseX);
    eyeY = eyeY + (mouseY - pmouseY);
  }
  if (hideEyes == false) { image(imgEyes, eyeX, eyeY, eyesSizeW, imgEyes.height * eyesSizeH / imgEyes.width); }

  if (buttonIsClicked(prenoseX, prenoseY, prenoseSizeW, prenoseSizeH) && selected == "prenose") {
    prenoseX = prenoseX + (mouseX - pmouseX);
    prenoseY = prenoseY + (mouseY - pmouseY);
  }
  if (hidePrenose == false) { image(imgPrenose, prenoseX, prenoseY, prenoseSizeW, imgPrenose.height * prenoseSizeH / imgPrenose.width); }

  if (buttonIsClicked(noseX, noseY, noseSizeW, noseSizeH) && selected == "nose") {
    noseX = noseX + (mouseX - pmouseX);
    noseY = noseY + (mouseY - pmouseY);
  }
  if (hideNose == false) { image(imgNose, noseX, noseY, noseSizeW, imgNose.height * noseSizeH / imgNose.width); }

  if (buttonIsClicked(mouthX, mouthY, mouthSizeW, mouthSizeH) && selected == "mouth") {
    mouthX = mouthX + (mouseX - pmouseX);
    mouthY = mouthY + (mouseY - pmouseY);
  }
  if (hideMouth == false) { image(imgMouth, mouthX, mouthY, mouthSizeW, imgMouth.height * mouthSizeH / imgMouth.width); }
 

  let armorBumpX = 0, armorBumpY = 0, armorBumpsize = 0;
  if (rngArmor == 0) { armorBumpY = 60; armorBumpsize = 0; }
  if (rngArmor == 1) { armorBumpY = 60; armorBumpsize = 0; }
  if (rngArmor == 2) { armorBumpX = -55, armorBumpY = 300; armorBumpsize = 100; }
  if (rngArmor == 3) { armorBumpX = -55, armorBumpY = 320; armorBumpsize = 200; }
  if (rngArmor == 4) { armorBumpX = 120, armorBumpY = 320; armorBumpsize = -220; }
  if (rngArmor == 5) { armorBumpX = 140, armorBumpY = 215; armorBumpsize = -300; }
  if (rngArmor == 6) { armorBumpX = -460, armorBumpY = 215; armorBumpsize = 850; }
  if (rngArmor == 7) { armorBumpX = -250, armorBumpY = 260; armorBumpsize = 500; }
  if (rngArmor == 8) { armorBumpX = -370, armorBumpY = -320; armorBumpsize = 750; }
  if (rngArmor == 9) { armorBumpX = -0, armorBumpY = 300; armorBumpsize = 0; }
  if (rngArmor == 10) { armorBumpX = 120, armorBumpY = -25; armorBumpsize = -250; }
  if (rngArmor == 11) { armorBumpX = -190, armorBumpY = -180; armorBumpsize = 400; }

  if (buttonIsClicked(armorX, armorY, armorSizeW, armorSizeH) && selected == "armor") {
    armorX = armorX + (mouseX - pmouseX);
    armorY = armorY + (mouseY - pmouseY);
  }
  if (hideArmor == false) { image(imgArmor, armorX + armorBumpX , armorY + armorBumpY, armorSizeW + armorBumpsize , (imgArmor.height * armorSizeH / imgArmor.width)+armorBumpsize); }

  let hairBumpX = 0, hairBumpY = 0, hairBumpsize = 0;
  if (rngHair == 37) { hairBumpY = -30; hairBumpX = -85; hairBumpsize = 180; }
  if (rngHair == 38) { hairBumpY = -200; hairBumpX = -60; hairBumpsize = 120; }
  if (rngHair == 39) { hairBumpY = -80; }
  if (rngHair == 40) { hairBumpY = -0; hairBumpX = -110; hairBumpsize = 270; }
  if (rngHair == 41) { hairBumpY = -20; hairBumpX = -100; hairBumpsize = 220; }
  if (rngHair == 42) { hairBumpY = 25; hairBumpX = -185; hairBumpsize = 380; }
  if (rngHair == 43) { hairBumpY = -20; hairBumpX = -70; hairBumpsize = 160; }
  if (rngHair == 44) { hairBumpY = -0; hairBumpX = -115; hairBumpsize = 320; }
  if (rngHair == 45) { hairBumpY = 25; hairBumpX = -178; hairBumpsize = 380; }

  if (buttonIsClicked(hairX, hairY, hairSizeW, hairSizeH) && selected == "hair") {
    hairX = hairX + (mouseX - pmouseX);
    hairY = hairY + (mouseY - pmouseY);
  }
  if (hideHair == false) { image(imgHair, hairX + hairBumpX, hairY + hairBumpY, hairSizeW + hairBumpsize, (imgHair.height * hairSizeH / imgHair.width) + hairBumpsize); }

}

function mousePressed() {
  // next costume Button !

  if (buttonIsClicked(width - 200, 80, 20, 80)) {
    rngEye--;
    rngEye = constrain(rngEye, 0, 59);
    imgEyes = loadImage("data/eyes/eyes" + rngEye + ".png");
  }
  if (buttonIsClicked(width - 60, 80, 20, 80)) {
    rngEye++;
    rngEye = constrain(rngEye, 0, 59);
    imgEyes = loadImage("data/eyes/eyes" + rngEye + ".png");
  }

  if (buttonIsClicked(width - 200, 40 + 80 * 2, 20, 80)) {
    rngPrenose--;
    rngPrenose = constrain(rngPrenose, 0, 27);
    imgPrenose = loadImage("data/prenose/prenose" + rngPrenose + ".png")
  }
  if (buttonIsClicked(width - 60, 40 + 80 * 2, 20, 80)) {
    rngPrenose++;
    rngPrenose = constrain(rngPrenose, 0, 27);
    imgPrenose = loadImage("data/prenose/prenose" + rngPrenose + ".png")
  }

  if (buttonIsClicked(width - 200, 40 + 80 * 3, 20, 80)) {
    rngNose--;
    rngNose = constrain(rngNose, 0, 37);
    imgNose = loadImage("data/nose/nose" + rngNose + ".png");
  }
  if (buttonIsClicked(width - 60, 40 + 80 * 3, 20, 80)) {
    rngNose++;
    rngNose = constrain(rngNose, 0, 37);
    imgNose = loadImage("data/nose/nose" + rngNose + ".png");
  }

  if (buttonIsClicked(width - 200, 40 + 80 * 4, 20, 80)) {
    rngMouth--;
    rngMouth = constrain(rngMouth, 0, 40);
    imgMouth = loadImage("data/mouth/mouth" + rngMouth + ".png");
  }
  if (buttonIsClicked(width - 60, 40 + 80 * 4, 20, 80)) {
    rngMouth++;
    rngMouth = constrain(rngMouth, 0, 40);
    imgMouth = loadImage("data/mouth/mouth" + rngMouth + ".png");
  }

  if (buttonIsClicked(width - 200, 40 + 80 * 5, 20, 80)) {
    rngHair--;
    rngHair = constrain(rngHair, 0, 114);
    imgHair = loadImage("data/hair/hair" + rngHair + ".png");
  }
  if (buttonIsClicked(width - 60, 40 + 80 * 5, 20, 80)) {
    rngHair++;
    rngHair = constrain(rngHair, 0, 114);
    imgHair = loadImage("data/hair/hair" + rngHair + ".png");
  }

  if (buttonIsClicked(width - 200, 40 + 80 * 6, 20, 80)) {
    rngArmor--;
    rngArmor = constrain(rngArmor, 0, 108);
    imgArmor = loadImage("data/tops/top" + rngArmor + ".png");
  }
  if (buttonIsClicked(width - 60, 40 + 80 * 6, 20, 80)) {
    rngArmor++;
    rngArmor = constrain(rngArmor, 0, 108);
    imgArmor = loadImage("data/tops/top" + rngArmor + ".png");
  }

  if (buttonIsClicked(width - 200, 40 + 80 * 7, 20, 80)) {
    rngHelm--;
    rngHelm = constrain(rngHelm, 0, 26);
    imgHelm = loadImage("data/visage/visage" + rngHelm + ".png");
  }
  if (buttonIsClicked(width - 60, 40 + 80 * 7, 20, 80)) {
    rngHelm++;
    rngHelm = constrain(rngHelm, 0, 26);
    imgHelm = loadImage("data/visage/visage" + rngHelm + ".png");
  }

  // all button on the side
  if (buttonIsClicked(width - 160, 40 + 60, 80, 80)) {
    selected = "eye";
  }
  if (buttonIsClicked(width - 160, 40 + 140, 80, 80)) {
    selected = "prenose";
  }
  if (buttonIsClicked(width - 160, 40 + 220, 80, 80)) {
    selected = "nose";
  }
  if (buttonIsClicked(width - 160, 40 + 300, 80, 80)) {
    selected = "mouth";
  }
  if (buttonIsClicked(width - 160, 40 + 380, 80, 80)) {
    selected = "hair";
  }
  if (buttonIsClicked(width - 160, 40 + 460, 80, 80)) {
    selected = "armor";
  }
  if (buttonIsClicked(width - 160, 40 + 540, 80, 80)) {
    selected = "helm";
  }

  if (buttonIsClicked(width - 78, 20, 40, 40)) {
    print(hideEyes);
    switch (selected) {
      case "eye":
        hideEyes = !hideEyes;
        break;
      case "prenose":
        hidePrenose = !hidePrenose;
        break;
      case "nose":
        hideNose = !hideNose;
        break;
      case "mouth":
        hideMouth = !hideMouth;
        break;
      case "hair":
        hideHair = !hideHair;
        break;
      case "armor":
        hideArmor = !hideArmor;
        break;
      case "helm":
        hideHelm = !hideHelm;
        break;
    }
  }

  if (buttonIsClicked(width - 202, 20, 40, 40)) {
    saving = true;
    savingCounter = 0;
  }

}

function buttonIsClicked(w, h, l, p) {
  // hitbox of every buttons
  if (mouseX < w + l && mouseX > w && mouseY < h + p && mouseY > h && mouseIsPressed) {
    return true;
  } else {
    return false;
  }
}

function buttonPP() {
  push();
  noFill(0);
  stroke(0);
  strokeWeight(2);


  // +++++
  push();
  if (buttonIsClicked(width - 160, 20, 40, 40)) {
    fill(0);
    switch (selected) {
      case "eye":
        eyesSizeW += 4;
        eyesSizeH += 4;
        eyeX -= 2;
        eyeY -= 2;
        break;
      case "prenose":
        prenoseSizeW += 4;
        prenoseSizeH += 4;
        prenoseX -= 2;
        prenoseY -= 2;
        break;
      case "nose":
        noseSizeW += 4;
        noseSizeH += 4;
        noseX -= 2;
        noseY -= 2;
        break;
      case "mouth":
        mouthSizeW += 4;
        mouthSizeH += 4;
        mouthX -= 2;
        mouthY -= 2;
        break;
      case "hair":
        hairSizeW += 4;
        hairSizeH += 4;
        hairX -= 2;
        hairY -= 2;
        break;
      case "armor":
        armorSizeW += 4;
        armorSizeH += 4;
        armorX -= 2;
        armorY -= 2;
        break;
      case "helm":
        helmSizeW += 4;
        helmSizeH += 4;
        helmX -= 2;
        helmY -= 2;
        break;
    }
  }
  rect(width - 160, 20, 40, 40);
  line(width - 160 + 20, 20 + 3, width - 160 + 20, 40 + 20 - 3);
  line(width - 160 + 3, 30 + 10, width - 160 + 40 - 3, 30 + 10);
  pop();

  // ------
  push();
  if (buttonIsClicked(width - 120, 20, 40, 40)) {
    fill(0);
    switch (selected) {
      case "eye":
        eyesSizeW -= 4;
        eyesSizeH -= 4;
        eyeX += 2;
        eyeY += 2;
        break;
      case "prenose":
        prenoseSizeW -= 4;
        prenoseSizeH -= 4;
        prenoseX += 2;
        prenoseY += 2;
        break;
      case "nose":
        noseSizeW -= 4;
        noseSizeH -= 4;
        noseX += 2;
        noseY += 2;
        break;
      case "mouth":
        mouthSizeW -= 4;
        mouthSizeH -= 4;
        mouthX += 2;
        mouthY += 2;
        break;
      case "hair":
        hairSizeW -= 4;
        hairSizeH -= 4;
        hairX += 2;
        hairY += 2;
        break;
      case "armor":
        armorSizeW -= 4;
        armorSizeH -= 4;
        armorX += 2;
        armorY += 2;
        break;
      case "helm":
        helmSizeW -= 4;
        helmSizeH -= 4;
        helmX += 2;
        helmY += 2;
        break;
    }
  }
  rect(width - 120, 20, 40, 40);
  line(width - 120 + 3, 30 + 10, width - 120 + 40 - 3, 30 + 10);
  pop();

  // RATIO H
  push();
  if (buttonIsClicked(width - 120, 60, 40, 40)) {
    fill(0);
    switch (selected) {
      case "eye":
        eyesSizeH += 4;
        eyeY -= 2;
        break;
      case "prenose":
        prenoseSizeH += 4;
        prenoseY -= 2;
        break;
      case "nose":
        noseSizeH += 4;
        noseY -= 2;
        break;
      case "mouth":
        mouthSizeH += 4;
        mouthY -= 2;
        break;
      case "hair":
        hairSizeH += 4;
        hairY -= 2;
        break;
      case "armor":
        armorSizeH += 4;
        armorY -= 2;
        break;
      case "helm":
        helmSizeH += 4;
        helmY -= 2;
        break;
    }
  }
  rect(width - 120, 60, 40, 40);
  fill(0);
  rect(width - 110, 60, 20, 40);
  pop();

  // RATION W
  push();
  if (buttonIsClicked(width - 160, 60, 40, 40)) {
    fill(0);
    switch (selected) {
      case "eye":
        eyesSizeW += 4;
        eyeX -= 2;
        break;
      case "prenose":
        prenoseSizeW += 4;
        prenoseX -= 2;
        break;
      case "nose":
        noseSizeW += 4;
        noseX -= 2;
        break;
      case "mouth":
        mouthSizeW += 4;
        mouthX -= 2;
        break;
      case "hair":
        hairSizeW += 4;
        hairX -= 2;
        break;
      case "armor":
        armorSizeW += 4;
        armorX -= 2;
        break;
      case "helm":
        helmSizeW += 4;
        helmX -= 2;
        break;
    }
  }
  rect(width - 160, 60, 40, 40);
  fill(0);
  rect(width - 160, 70, 40, 20);
  pop();



  image(imgSave, width - 202, 20, 40, 40);
  image(imgHide, width - 78, 20, 40, 40);

}

