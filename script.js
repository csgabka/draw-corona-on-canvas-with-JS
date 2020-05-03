const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

function drawCorona() {
	// Outer circle
	ctx.fillStyle = 'rgba(191,37,37)';
	ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    //First  leg
    ctx.beginPath();
    ctx.fillStyle = 'rgba(142,43,43)';
    ctx.ellipse(200, 90, 10, 25, Math.PI/2, 0, 2 * Math.PI);
    ctx.rect(195, 100, 8, 20);
    ctx.fill();
    ctx.stroke();

    //second leg
    ctx.beginPath();
   	ctx.ellipse(200, 200, 15, 20, Math.PI/2, 0, 2 * Math.PI);
   	ctx.fill();
    ctx.stroke();
   
   	//third
    ctx.beginPath();
    ctx.ellipse(200, 260, 10, 18, Math.PI/2, 0, 2 * Math.PI);
    ctx.rect(198, 240, 5, 10);
    ctx.fill();
    ctx.stroke();
    ctx.save();

    //fourth
    ctx.beginPath();
    ctx.ellipse(260, 110, 10, 18, Math.PI*0.75, 0, 2 * Math.PI);
    //horizontal center (x, y), w, h Its horizontal center is at (x + w / 2). Its vertical center is at (y + h / 2)
	ctx.translate(243, 115);
	ctx.rotate(45 * Math.PI / 180); //The rotation angle, clockwise in radians. You can use degree * Math.PI / 180 to calculate a radian from a degree.
	ctx.translate(-243, -115);
    ctx.rect(250, 110, 6, 10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    //fifth
    ctx.beginPath();
    ctx.ellipse(260, 160, 10, 20, Math.PI*0.8, 0, 2 * Math.PI);
	ctx.translate(265, 190);
	ctx.rotate(50 * Math.PI / 180);
	ctx.translate(-265, -115);
    ctx.rect(235, 110, 6, 10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    //sixth
    ctx.beginPath();
    ctx.ellipse(260, 280, 18, 15, Math.PI*0.8, 0, 2 * Math.PI);
	ctx.translate(245, 267);
	ctx.rotate(140 * Math.PI / 180);
	ctx.translate(-245, -267);
    ctx.rect(240, 262, 6, 10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    //seventh
    ctx.beginPath();
    ctx.ellipse(310, 160, 18, 13, Math.PI/3, 0, 2 * Math.PI);
	ctx.translate(293, 167);
	ctx.rotate(60 * Math.PI / 180);
	ctx.translate(-293, -167);
    ctx.rect(290, 162, 6, 10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    //eight
    ctx.beginPath();
    ctx.ellipse(305, 230, 18, 10, Math.PI*0.6, 0, 2 * Math.PI);
	ctx.translate(291, 225);
	ctx.rotate(110 * Math.PI / 180);
	ctx.translate(-291, -225);
    ctx.rect(288, 220, 6, 10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

     //ninth
    ctx.beginPath();
    ctx.ellipse(140, 150, 20, 15, Math.PI*0.7, 0, 2 * Math.PI);
	ctx.translate(158, 160);
	ctx.rotate(120 * Math.PI / 180);
	ctx.translate(-158, -160);
    ctx.rect(155, 155, 6, 10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    //tenth
    ctx.beginPath();
    ctx.ellipse(150, 300, 20, 12, Math.PI*0.15, 0, 2 * Math.PI);
	ctx.translate(160, 287);
	ctx.rotate(35 * Math.PI / 180);
	ctx.translate(-160, -287);
    ctx.rect(157, 282, 6, 10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    //eleventh
    ctx.beginPath();
    ctx.ellipse(105, 135, 20, 8, Math.PI*0.8, 0, 2 * Math.PI);
	ctx.translate(112, 145);
	ctx.rotate(140 * Math.PI / 180);
	ctx.translate(-112, -145);
    ctx.rect(110, 140, 4, 10);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    //twelwth
    ctx.beginPath();
    ctx.ellipse(75, 200, 20, 15, Math.PI*0.5, 0, 2 * Math.PI);
    ctx.translate(94, 202);
	ctx.rotate(90 * Math.PI / 180);
	ctx.translate(-94, -202);
    ctx.rect(92, 195, 4, 12);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();

    //thirteenth
    ctx.beginPath();
    ctx.ellipse(95, 275, 22, 13, Math.PI*0.3, 0, 2 * Math.PI);
    ctx.translate(112, 264);
	ctx.rotate(50 * Math.PI / 180);
	ctx.translate(-112, -264);
    ctx.rect(110, 254, 4, 17);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.save();
}

drawCorona();