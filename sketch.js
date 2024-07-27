let ray;
let walls = [];
let particle;
let collectibles = [];
let randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let screen = "intro";
let fills = ["rgb(161,255,161)", "rgb(35,0,101)", "rgb(255,254,161)"];
let fills2 = ["rgb(161,255,161)", "rgb(35,0,101)", "rgb(255,254,161)"];
let max = 8000;
let score = max;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Example walls
  walls.push(
    new Wall(
      windowWidth / 2,
      windowHeight / 8,
      windowWidth / 2,
      (windowHeight * 5) / 8
    )
  );
  walls.push(
    new Wall(
      (windowWidth * 3) / 16,
      (windowHeight * 4) / 16,
      (windowWidth * 5) / 16,
      (windowHeight * 2) / 16
    )
  );
  walls.push(
    new Wall(
      (windowWidth * 7) / 16,
      (windowHeight * 4) / 16,
      (windowWidth * 9) / 16,
      (windowHeight * 2) / 16
    )
  );
  walls.push(
    new Wall(
      (windowWidth * 7) / 16,
      (windowHeight * 14) / 16,
      (windowWidth * 6) / 16,
      (windowHeight * 7) / 16
    )
  );

  walls.push(new Wall(0, 0, 0, width));
  walls.push(new Wall(width, width, 0, width));
  walls.push(new Wall(width, width, width, 0));
  walls.push(new Wall(0, 0, width, 0));

  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );
  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );
  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );
  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );
  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );
  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );
  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );
  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );
  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );
  collectibles.push(
    new Collectible(
      (windowWidth * random(randoms)) / 16,
      (windowHeight * random(randoms)) / 16,
      windowHeight / 80
    )
  );

  for (let collectible of collectibles) {
    for (let wallo of collectible.lines) {
      walls.push(wallo);
    }
  }

  particle = new Particle(100, 200, [200, 255, 200]);
}

function draw() {
  if (screen == "intro") {
    score = max;
    push();
    background(0);
    textSize(windowHeight / 10);
    fill(200, 255, 200);
    textAlign(CENTER);
    text("Scavenger", windowWidth / 2, windowHeight / 10);
    textSize(windowHeight / 25);
    text(
      "Use the up-down arrows to move forward / backwards",
      windowWidth / 2,
      (windowHeight * 4) / 20
    );
    text(
      "Use the left-right arrows to rotate",
      windowWidth / 2,
      (windowHeight * 6) / 20
    );
    text(
      "Find the blinking squares, then go over it to claim",
      windowWidth / 2,
      (windowHeight * 8) / 20
    );
    text(
      "Find the 10 squares as quickly as possible within the time limit",
      windowWidth / 2,
      (windowHeight * 10) / 20
    );

    if (
      mouseX > (windowWidth * 5) / 20 &&
      mouseX < (windowWidth * 15) / 20 &&
      mouseY > (windowHeight * 13) / 20 &&
      mouseY < (windowHeight * 17) / 20
    ) {
      //print('yes')
      fills = ["rgb(35,0,101)", "rgb(255,254,161)", "rgb(161,255,161)"];
    } else {
      fills = ["rgb(161,255,161)", "rgb(35,0,101)", "rgb(255,254,161)"];
    }

    rectMode(CENTER);
    fill(fills[0]);
    stroke(fills[2]);
    strokeWeight(windowHeight / 40);
    rect(
      windowWidth / 2,
      (windowHeight * 3) / 4,
      windowWidth / 2,
      windowHeight / 5
    );

    noStroke();
    fill(fills[1]);
    textSize(windowHeight / 8);
    text(
      "Start",
      windowWidth / 2,
      (windowHeight * 3) / 4 + (windowHeight * 3) / 80
    );

    pop();
  } 
  else if (screen == "game") {
    background(0);
    score--;

    // Display walls
    for (let wall of walls) {
      wall.show();
    }

    for (
      let collectible = 0;
      collectible < collectibles.length;
      collectible++
    ) {
      particle.show(walls, collectible, collectibles);
      collectibles[collectible].display();
    }

    if (collectibles.length == 0 || score == 0) {
      screen = "game over";
    }

    if (keyIsPressed) {
      if (keyCode == UP_ARROW) {
        particle.move(0);
      } else if (keyCode == RIGHT_ARROW) {
        particle.move(1);
      } else if (keyCode == DOWN_ARROW) {
        particle.move(2);
      } else if (keyCode == LEFT_ARROW) {
        particle.move(3);
      }
    }

    push();
    fill("salmon");
    textSize(windowHeight / 20);
    text(particle.score, windowHeight / 20, windowHeight / 20);
    text(score, windowHeight / 20, (windowHeight * 19) / 20);
    pop();
  } 
}
