var notas = [10, 9, 8];
function media(){
  var soma = notas[0] + notas[1] + notas[2];
  var media = soma / notas.length;
  console.log(media);
}

function setup() 
{
  createCanvas(400,400);
  media();
}

function draw() 
{
background(51);

}

