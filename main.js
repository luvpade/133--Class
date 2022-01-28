img="";
status="";
objects = [];
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

  }

  function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
  }

  function gotResults(error, results){
    if(error){
      console.log(error);
    }
    console.log(results);
    objects=results;

  }

function preload(){
  img = loadImage('dog_cat.jpg');  
}

function draw(){
    image(img,0 ,0 ,640, 420);
    if(status != ""){
      for (i = 0; i<objects.length; i++){
        document.getElementById("status").innerHTML = "Status Object Detected";
        fill("#ff0000");
        persent=floor(objects[i].confidence * 100);
        text(objects[i].label + " " + persent + "%",objects[i].x, objects[i].y);
        noFill();
        stroke('#ff0000');
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);      

      }
    }
    
    
 

    fill("#ff0000")
    text("Cat", 320,120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);

}