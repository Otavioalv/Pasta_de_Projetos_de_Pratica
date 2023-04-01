/* Crie a função not que inverte os bits de uma string */

function not(strBts){
    var alt = '';
   
    for(var cont = 0; cont < strBts.length; cont++){
        if(strBts[cont] == 1)        
            alt+=0;
        else   
            alt+=1;
    }
    return alt;
}


var bits = "", bitsNot;

//001101010011

bitsNot = not(bits);

console.log(bitsNot);
