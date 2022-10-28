/*let edad=prompt("Introduce la edad");
if(Number(edad)==edad){
    if(edad>=18){alert("puedes conducir");}
    else if(edad<18){alert("no puedes conducir");}
}else{alert("Introduce un valor numerico");}*/

do{
    let nota=prompt("Introduce tu nota");
    if(Number(nota)==nota){
        if(nota<0&&nota>=10){
            if(nota<3){
                alert("Muy deficiente");
            }
            else if(nota<5){
                alert("Insuficiente");
            }
            else if(nota<7){
                alert("Suficiente");
            }
            else if(nota<8){
                alert("Bien");
            }
            else if(nota<9){
                alert("Notable");
            }
            else if(nota>=9){
                alert("Sobresaliente");
            }
        }
        else{
            alert("Introduce un valor valido");
        }
    }
    else{
        if(nota!=undefined){
            alert("Introduce un numero valido");
        }
    }
}while(nota!=undefined);