x=0;
y=0;
dc="";
dr="";
api=window.webkitSpeechRecognition;
rec=new api();

function start(){
rec.start();
document.getElementById("status").innerHTML="PLS SPEAK I AM LISTENING"
}

rec.onresult=function(e){
console.log(e)
mySpeech=e.results[0][0].transcript;
document.getElementById("status").innerHTML="YOU SAID "+mySpeech;
if(mySpeech=="circle"){
    x=Math.floor(Math.random()*900)
y=Math.floor(Math.random()*600)
document.getElementById("status").innerHTML="I AM DRAWING A CIRCLE"
dc="HELLO"
}

if(mySpeech=="rectangle"){
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="I am DRAWING A rectangle"
    dr="HELLO"
}
}

function setup(){
    canvas=createCanvas(900,600)
}

function draw(){
    if(dc=="HELLO"){
        radius=100;
        circle(x,y,radius)
        document.getElementById("status").innerHTML="CIRCLE COMPLETED"
        dc=""
    }

    if(dr=="HELLO"){
        rect(x,y,25,30)
        document.getElementById("status").innerHTML="Rectangle COMPLETED"
        dr=""
    }
}