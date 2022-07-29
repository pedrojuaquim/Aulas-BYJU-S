var weight = [35,38,42,45,43,34,36,41,48,32];
function media (){
  var soma = 0;
  for (var i = 0; i<weight.length; i++){
    soma += weight[i];
  }
  var media = soma/weight.length
  console.log(media);
}

function setup() {
  createCanvas(400,400);
  media();
}

function draw() 
{
  background(30);
}

 

