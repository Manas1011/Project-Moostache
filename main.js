nosex=0;
nosey=0;
function preload(){
 image_moo=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}
function modelloaded(){
    console.log("YOUR MODEL IS LOADED")
}

function draw(){
    image(video,0,0,300,300);
    image(image_moo,nosex-30,nosey,60,50);
}

function take_snapshot(){
    save("Moostache.png");
}
