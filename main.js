
var status_1 = "";
objects= [];
function setup() {
canvas = createCanvas(400, 400);
canvas.center();
video= createCapture(VIDEO);
video.hide();
cocossd = ml5.objectDetector("cocossd",modelLoaded);
}
function draw() {
    image(video,0,0);
}
function modelLoaded(){
console.log("yaayy!!!!");
status_1 = true;
document.getElementById("status").innerHTML= "Status : started detecting objects";
cocossd.detect(video, gotResult);

}
function gotResult(error,results){
    if (error){
        console.log(error);
       }
       else{
        objects = [results];
        console.log( objects[0]);
      
       }

}
