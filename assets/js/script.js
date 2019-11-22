var c = document.getElementById("home");
var ctx = c.getContext("2d");
//Carré principale de la maison
ctx.beginPath();
  ctx.moveTo(0,400);
  ctx.lineTo(200,400);
  ctx.lineTo(200,200);
  ctx.lineTo(0,200);
  ctx.closePath();
  ctx.fillStyle = '#ADD8E6';
  ctx.fill();
//Toit de  la maison
  ctx.beginPath();
  ctx.moveTo(0,200);
  ctx.lineTo(100,70);
  ctx.lineTo(200,200);
  ctx.closePath();
  ctx.fillStyle = '#CD853F';
  ctx.fill();
//fenetre gauche
  ctx.beginPath();
  ctx.moveTo(20,220);
  ctx.lineTo(60,220);
  ctx.lineTo(60,260);
  ctx.lineTo(20,260);
  ctx.closePath();
  ctx.fillStyle = '#CACACA';
  ctx.fill();
//fenetre droite
 ctx.beginPath();
  ctx.moveTo(140,220);
  ctx.lineTo(180,220);
  ctx.lineTo(180,260);
  ctx.lineTo(140,260);
  ctx.closePath();
  ctx.fillStyle = '#CACACA';
  ctx.fill();
//porte
  ctx.beginPath();
  ctx.moveTo(80,400);
  ctx.lineTo(80,330);
  ctx.lineTo(120,330);
  ctx.lineTo(120,400);
  ctx.closePath();
  ctx.fillStyle = '#CACACA';
  ctx.fill();
