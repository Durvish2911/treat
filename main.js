function setup(){
    canvas=createCanvas(640,490);
    canvas.position(110,250);
    vide0=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    Image(video,0,0,640,490);
    tint(tint_color);
}
function take_snapshot() {
    save("bugati.jpeg")
}
function filter(){
    tint_color=document.getElementById("hi").value;
}