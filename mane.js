function preload() {

}
function setup() {
    createCanvas(400,400);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);

}