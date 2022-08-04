function setup(){
    canvas=createCanvas(700,500);
    canvas.position(400,150);

    video=createCapture(VIDEO);
    video.size(500,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Model is Initialized!');
}
function draw(){
    background('#42f5dd');
}
function gotPoses(results){
  if(results.length>0){
    console.log(results);  }}