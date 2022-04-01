song="";
song2="";

function preload(){
    song=loadSound("Merlin.mp3")
    song2=loadSound("music2(GUMBALL).mp3")
    }
    
    function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
    
    }
    
    function draw(){
    image(video,0,0,600,500)
    }
    
    function play()
    {
      song.play()
    }