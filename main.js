noseX=0
noseY=0
leftWrist=0
rightWrist=0
difference=0

function preload(){

}

function setup(){
    video=createCapture(VIDEO)
    video.size(650,600)
    video.position(50, 100)
    canvas=createCanvas(550,500)
    canvas.position(850,150)

    poseNet=ml5.poseNet(video, modelLoaded)

    poseNet.on('pose', gotPoses)
}

function gotPoses(results){
    if (results.length>0)
    {
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        leftWrist=results[0].pose.leftWrist.x
        rightWrist=results[0].pose.rightWrist.x
        difference=floor(leftWrist-rightWrist)

    }
    
}

function modelLoaded(){
    console.log("The model has loaded")
}

function draw(){
    if (difference<100){
    background('#488afa')
    }
    else if(difference>100&&difference<200){
        background("#660bde")
    }
    else if( difference>200&&difference<300){
        background("#fcad03")
    }
    else{
        background("#fc1c03")
    }


    //stroke("darkBlue")
    //fill("rgb(20, 44, 255)")
    //square(noseX, noseY, difference)
    document.getElementById("square_size").innerHTML="The width and height of the square is: "+ difference + "px"
    fill("rgb(6, 199, 167)")
    stroke("black")
    circle(noseX-80, noseY, difference/2)
    circle(noseX-80, noseY-100, difference/3)
    circle(noseX-80, noseY-160, difference/4)

}