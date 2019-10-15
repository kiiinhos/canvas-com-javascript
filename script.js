// Movimentar objetos em eixo (X,Y) e diagonais

var canvas = document.createElement("canvas");
b = canvas.getContext("2d");


canvas.width = 400;
canvas.height = 400;


document.body.appendChild(canvas);

b.fillStyle = "black";
b.fillRect(0,0, canvas.width, canvas.height);


let positionX = 200;
let positionY= 200;
 dx = 0;
 dy = 0;



setInterval(function(){
    // Para não fazer a linha branca
    // b.fillStyle = "black";
    // b.fillRect(0,0, canvas.width, canvas.height);
    
     positionX += dx;
     positionY += dy;
    
    if(positionX > 390){
         dx = 0;
         positionX = 390;
     }

    if(positionX < 0){
        dx = 0;
        positionX = 0;
    }

    if(positionY > 390){
        dy = 0;
        positionY = 390;
    }

    if(positionY < 0){
        dy = 0;
        positionY = 0;
    }
    b.fillStyle = "white";
    b.fillRect(positionX,positionY,10,10);
},20);

window.addEventListener("keydown", press001, true);
// Controlar o ponto branco com as setas
function press001(event){
    switch (event.keyCode){
        case 37:
            dx = -1;
            dy = 0;
            break;
           
            case 38:
            dx = 0;
            dy = -1;
            break;

            case 39:
            dx = 1;
            dy = 0;
            break;

            case 40:
            dx = 0;
            dy = 1;
            break;

            case 32:
            dx = 0;
            dy = 0;
            break;
    
    }
}