// missing ??
/** LICENCE SYSTEM and
hide for items
PUSH ON GIT
*/


let imgHair, imgEyes, imgPrenose, imgNose, imgMouth, imgArmor, imgHelm;
let rngNose, rngMouth, rngEye, rngHair, rngPrenose, rngArmor, rngHelm;
let imgSave, imgHide, saving = false, savingCounter = 0;
let hideHair = false, hideEyes = false, hideNose = false, hidePrenose = false, hideMouth = false, hideArmor = false, hideHelm = false;
let selected = "";
let hairX = 0, hairY = 0, eyeX = 0, eyeY = 100, prenoseX = 0, prenoseY = 250, noseX = 0, noseY = 250, mouthX = 0, mouthY = 300, armorX = 0, armorY = 400, helmX = 0, helmY = 0;
let hairSize = 1024, eyesSize = 256, prenoseSize = 512, noseSize = 512, mouthSize = 512, armorSize = 1024, helmSize = 1024;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rngNose = int(random(37));
  rngMouth = int(random(40));
  rngPrenose = int(random(27));
  rngEye = int(random(59));
  rngHair = int(random(114));
  rngArmor = int(random(108));
  rngHelm = int(random(26));

  imgHair = loadImage("data/hair/hair_" + rngHair + ".png");
  imgEyes = loadImage("data/eyes/eyes_" + rngEye + ".png");
  imgPrenose = loadImage("data/prenose/prenose_" + rngPrenose + ".png");
  imgNose = loadImage("data/nose/nose_" + rngNose + ".png");
  imgMouth = loadImage("data/mouth/mouth_" + rngMouth + ".png");
  imgArmor = loadImage("data/tops/top_" + rngArmor + ".png");
  imgHelm = loadImage("data/helmet/helm_" + rngHelm + ".png");
  imgSave = loadImage("save.png");
  imgHide = loadImage("hide.png");
}

function draw() {
  clear();
  background(255);
  fill(0)
  personnage();
  saves();
  if (saving == false) { allButton(); }
}

function allButton() {

  noFill(0);
  stroke(0);
  strokeWeight(2);
  buttonPP();
  buttonImageSelected(80, imgEyes, "eye", rngEye);
  buttonNext(80);
  buttonImageSelected(80 * 2, imgPrenose, "prenose", rngPrenose);
  buttonNext(80 * 2);
  buttonImageSelected(80 * 3, imgNose, "nose", rngNose);
  buttonNext(80 * 3);
  buttonImageSelected(80 * 4, imgMouth, "mouth", rngMouth);
  buttonNext(80 * 4);
  buttonImageSelected(80 * 5, imgHair, "hair", rngHair);
  buttonNext(80 * 5);
  buttonImageSelected(80 * 6, imgArmor, "armor", rngArmor);
  buttonNext(80 * 6);
  buttonImageSelected(80 * 7, imgHelm, "helm", rngHelm);
  buttonNext(80 * 7);

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

  if (buttonIsClicked(eyeX, eyeY, eyesSize, eyesSize) && selected == "eye") {
    eyeX = eyeX + (mouseX - pmouseX);
    eyeY = eyeY + (mouseY - pmouseY);
  }
  if (hideEyes == false) { image(imgEyes, eyeX, eyeY, eyesSize, eyesSize); }

  if (buttonIsClicked(prenoseX, prenoseY, prenoseSize, prenoseSize) && selected == "prenose") {
    prenoseX = prenoseX + (mouseX - pmouseX);
    prenoseY = prenoseY + (mouseY - pmouseY);
  }
  if (hidePrenose == false) { image(imgPrenose, prenoseX, prenoseY, prenoseSize, prenoseSize); }

  if (buttonIsClicked(noseX, noseY, noseSize, noseSize) && selected == "nose") {
    noseX = noseX + (mouseX - pmouseX);
    noseY = noseY + (mouseY - pmouseY);
  }
  if (hideNose == false) { image(imgNose, noseX, noseY, noseSize, noseSize); }

  if (buttonIsClicked(mouthX, mouthY, mouthSize, mouthSize) && selected == "mouth") {
    mouthX = mouthX + (mouseX - pmouseX);
    mouthY = mouthY + (mouseY - pmouseY);
  }
  if (hideMouth == false) { image(imgMouth, mouthX, mouthY, mouthSize, mouthSize); }

  if (buttonIsClicked(armorX, armorY, armorSize, armorSize) && selected == "armor") {
    armorX = armorX + (mouseX - pmouseX);
    armorY = armorY + (mouseY - pmouseY);
  }
  if (hideArmor == false) { image(imgArmor, armorX, armorY, armorSize, armorSize); }

  if (buttonIsClicked(hairX, hairY, hairSize, hairSize) && selected == "hair") {
    hairX = hairX + (mouseX - pmouseX);
    hairY = hairY + (mouseY - pmouseY);
  }
  if (hideHair == false) { image(imgHair, hairX, hairY, hairSize, hairSize); }

  if (buttonIsClicked(helmX, helmY, helmSize, helmSize) && selected == "helm") {
    helmX = helmX + (mouseX - pmouseX);
    helmY = helmY + (mouseY - pmouseY);
  }
  if (hideHelm == false) { image(imgHelm, helmX, helmY, helmSize, helmSize); }

}

function mousePressed() {
  // next costume Button !

  if (buttonIsClicked(width - 200, 80, 20, 80)) {
    rngEye--;
    rngEye = constrain(rngEye, 0, 59);
    imgEyes = loadImage("data/eyes/eyes_" + rngEye + ".png");
  }
  if (buttonIsClicked(width - 60, 80, 20, 80)) {
    rngEye++;
    rngEye = constrain(rngEye, 0, 59);
    imgEyes = loadImage("data/eyes/eyes_" + rngEye + ".png");
  }

  if (buttonIsClicked(width - 200, 80 * 2, 20, 80)) {
    rngPrenose--;
    rngPrenose = constrain(rngPrenose, 0, 27);
    imgPrenose = loadImage("data/prenose/prenose_" + rngPrenose + ".png")
  }
  if (buttonIsClicked(width - 60, 80 * 2, 20, 80)) {
    rngPrenose++;
    rngPrenose = constrain(rngPrenose, 0, 27);
    imgPrenose = loadImage("data/prenose/prenose_" + rngPrenose + ".png")
  }

  if (buttonIsClicked(width - 200, 80 * 3, 20, 80)) {
    rngNose--;
    rngNose = constrain(rngNose, 0, 37);
    imgNose = loadImage("data/nose/nose_" + rngNose + ".png");
  }
  if (buttonIsClicked(width - 60, 80 * 3, 20, 80)) {
    rngNose++;
    rngNose = constrain(rngNose, 0, 37);
    imgNose = loadImage("data/nose/nose_" + rngNose + ".png");
  }

  if (buttonIsClicked(width - 200, 80 * 4, 20, 80)) {
    rngMouth--;
    rngMouth = constrain(rngMouth, 0, 40);
    imgMouth = loadImage("data/mouth/mouth_" + rngMouth + ".png");
  }
  if (buttonIsClicked(width - 60, 80 * 4, 20, 80)) {
    rngMouth++;
    rngMouth = constrain(rngMouth, 0, 40);
    imgMouth = loadImage("data/mouth/mouth_" + rngMouth + ".png");
  }

  if (buttonIsClicked(width - 200, 80 * 5, 20, 80)) {
    rngHair--;
    rngHair = constrain(rngHair, 0, 114);
    imgHair = loadImage("data/hair/hair_" + rngHair + ".png");
  }
  if (buttonIsClicked(width - 60, 80 * 5, 20, 80)) {
    rngHair++;
    rngHair = constrain(rngHair, 0, 114);
    imgHair = loadImage("data/hair/hair_" + rngHair + ".png");
  }

  if (buttonIsClicked(width - 200, 80 * 6, 20, 80)) {
    rngArmor--;
    rngArmor = constrain(rngArmor, 0, 108);
    imgArmor = loadImage("data/tops/top_" + rngArmor + ".png");
  }
  if (buttonIsClicked(width - 60, 80 * 6, 20, 80)) {
    rngArmor++;
    rngArmor = constrain(rngArmor, 0, 108);
    imgArmor = loadImage("data/tops/top_" + rngArmor + ".png");
  }

  if (buttonIsClicked(width - 200, 80 * 7, 20, 80)) {
    rngHelm--;
    rngHelm = constrain(rngHelm, 0, 26);
    imgHelm = loadImage("data/helmet/helm_" + rngHelm + ".png");
  }
  if (buttonIsClicked(width - 60, 80 * 7, 20, 80)) {
    rngHelm++;
    rngHelm = constrain(rngHelm, 0, 26);
    imgHelm = loadImage("data/helmet/helm_" + rngHelm + ".png");
  }

  // all button on the side
  if (buttonIsClicked(width - 160, 60, 80, 80)) {
    selected = "eye";
  }
  if (buttonIsClicked(width - 160, 140, 80, 80)) {
    selected = "prenose";
  }
  if (buttonIsClicked(width - 160, 220, 80, 80)) {
    selected = "nose";
  }
  if (buttonIsClicked(width - 160, 300, 80, 80)) {
    selected = "mouth";
  }
  if (buttonIsClicked(width - 160, 380, 80, 80)) {
    selected = "hair";
  }
  if (buttonIsClicked(width - 160, 460, 80, 80)) {
    selected = "armor";
  }
  if (buttonIsClicked(width - 160, 540, 80, 80)) {
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
        eyesSize += 4;
        eyeX -= 2;
        eyeY -= 2;
        break;
      case "prenose":
        prenoseSize += 4;
        prenoseX -= 2;
        prenoseY -= 2;
        break;
      case "nose":
        noseSize += 4;
        noseX -= 2;
        noseY -= 2;
        break;
      case "mouth":
        mouthSize += 4;
        mouthX -= 2;
        mouthY -= 2;
        break;
      case "hair":
        hairSize += 4;
        hairX -= 2;
        hairY -= 2;
        break;
      case "armor":
        armorSize += 4;
        armorX -= 2;
        armorY -= 2;
        break;
      case "helm":
        helmSize += 4;
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
        eyesSize -= 4;
        eyeX += 2;
        eyeY += 2;
        break;
      case "prenose":
        prenoseSize -= 4;
        prenoseX += 2;
        prenoseY += 2;
        break;
      case "nose":
        noseSize -= 4;
        noseX += 2;
        noseY += 2;
        break;
      case "mouth":
        mouthSize -= 4;
        mouthX += 2;
        mouthY += 2;
        break;
      case "hair":
        hairSize -= 4;
        hairX += 2;
        hairY += 2;
        break;
      case "armor":
        armorSize -= 4;
        armorX += 2;
        armorY += 2;
        break;
      case "helm":
        helmSize -= 4;
        helmX += 2;
        helmY += 2;
        break;
    }
  }
  rect(width - 120, 20, 40, 40);
  line(width - 120 + 3, 30 + 10, width - 120 + 40 - 3, 30 + 10);
  pop();

  image(imgSave, width - 202, 20, 40, 40);

  image(imgHide, width - 78, 20, 40, 40);

}

