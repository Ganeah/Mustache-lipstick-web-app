noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();    
    video = createCapture(VIDEO)
    video.size(400,400);
    video.hide();
    PoseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses',gotPoses);    
}
function modelLoaded(){
    console.log("PoseNet is intialized")
}

function draw(){
    image(video,0,0,400,400);
    image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot(){
    save('student_name.jpg');
}

function gotPoses(results){
    
}