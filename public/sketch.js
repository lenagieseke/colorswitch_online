"use strict";

let socket = io();

function setup()
{
    createCanvas(windowWidth, windowHeight);

    socket.on('changeColor', data =>
    {
        console.log('I received:', data);

        let colorComingIn = [0,0,0];
        colorComingIn[data] = 255;
        
        background(colorComingIn[0], colorComingIn[1], colorComingIn[2]);
    });
}

function draw()
{
    fill(255, 0, 0);
    rect(10, 10, 100, 100);

    fill(0, 255, 0);
    rect(120, 10, 100, 100);

    fill(0, 0, 255);
    rect(230, 10, 100, 100);
}

function mouseClicked()
{
    if(mouseY > 10 && mouseY < 110)
    {
        // red
        if(mouseX > 10 && mouseX < 110)
        {
            background(255, 0, 0);
            socket.emit('buttonPressed', 0);
        }
        // green
        else if(mouseX > 120 && mouseX < 220)
        {
            background(0, 255, 0);
            socket.emit('buttonPressed', 1);
        }
        // blue
        else if(mouseX > 230 && mouseX < 330)
        {
            background(0, 0, 255);
            socket.emit('buttonPressed', 2);
        }
    }

}