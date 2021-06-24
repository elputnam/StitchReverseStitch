let weave = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  strokeWeight(1);
  background(0);
  let num = height* 0.1;
  for (i  = 0; i < num; i++){
    weave.push(new Line());
  }
}

function draw() {
  background(0, 1);
  for (i = 0; i < weave.length; i++){
    weave[i].display();
    weave[i].update();
    weave[i].edges();
  }

}

class Line{
  constructor(){
    this.loc = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.len = random(height*0.2);
    this.ts = random(2,5);
    this.color = random(360);
  }

  display(){
    strokeCap(PROJECT);
    stroke(this.color, random(100), random(100));
    strokeWeight(random(10));
    line(this.loc.x, this.loc.y, 
      this.loc.x + this.len, this.loc.y + this.len);
  }

  update(){
    //this.a = createVector(random(-2,2), random(-2, 2));
    this.vel.add(random(-2,2), random(-2,2));
    this.vel.limit(this.ts);
    this.loc.add(this.vel);

    let angle = atan2(mouseY - height/2, mouseX - width/2); 
    rotate(angle);

    this.color += 1;
    
  }

  edges() {
    if (this.loc.x > width) {
      this.loc.x = 0;
    }
    if (this.loc.x < 0) {
      this.loc.x = width;
    }
    if (this.loc.y > height) {
      this.loc.y = 0;
    }
    if (this.loc.y < 0) {
      this.loc.y = height;
    }

    if (this.color >= 360){
      this.color = 0;
    }
}
}