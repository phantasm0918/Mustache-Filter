function preload(){
    MustacheIMG = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
    MCanvas = createCanvas(350, 350)
    MCanvas.center()
    MCam = createCapture(VIDEO)
    MCam.hide()
    MyModel1 = ml5.poseNet(MCam, modelLoaded)
    MyModel1.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("Model has been loaded.")
}

NoseX = 0
NoseY = 0

function gotPoses(results){
    if(results.length > 0){
       NoseX = results[0].pose.nose.x-210
       NoseY = results[0].pose.nose.y-60
    }
}

function draw(){
    image(MCam, 0, 0, 350, 350)
    image(MustacheIMG, NoseX, NoseY, 100, 50)
}

function Take_Snapshot(){
    save("Mustache.png")
}
