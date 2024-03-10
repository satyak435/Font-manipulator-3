leftWrist_x=0;
rightWrist_x=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet model is loaded!");
}
function draw(){
    background("#969A97");
    textSize(difference);
    fill("#ADD8E6");
    text("Satyak", 54, 130);
}
function gotPoses(results){
        console.log(results);
        leftWrist_x=results[0].pose.leftWrist.x;
        rightWrist_x=results[0].pose.rightWrist.x;
        difference=floor(leftWrist_x-rightWrist_x);
        console.log(leftWrist_x);
        console.log(rightWrist_x);
        console.log(difference);
}