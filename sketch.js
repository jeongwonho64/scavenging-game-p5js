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

function draw(){

}
