function preload(){}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model wants to eat chole bhature , butter chicken and chicken biriyani");

}

function draw(){
    image(video,0,0,300,300);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("leftShoulderx = "+results[0].pose.leftShoulder.x);
        console.log("leftShouldery = "+results[0].pose.leftShoulder.y);

        console.log("rightEyeX = "+results[0].pose.rightEye.x);
        console.log("rightEyeY = "+results[0].pose.rightEye.y);

        console.log("rightShoulderx = "+results[0].pose.rightShoulderx);
        console.log("rightShouldery = "+results[0].pose.rightShouldery);
    }
}

function take_snapshot(){
    save('myimage.jpg');
}

function take_snapshot(){
    save('myimage.jpg');
}

