function tela(val){
    var digito = document.getElementById("result");
    if(val == "C")
        digito.value = null;
    
    else if(val == "e"){
        digito.value =  digito.value.slice(0, -1);
    }
    else if(val == "%"){
        var valid = /[-+\*]+/.test(digito.value);
        if(valid){
            calc();
            digito.value = parseFloat(digito.value)/1000; 
        }else
            digito.value = parseFloat(digito.value)/100;
    }
    else
        digito.value += val;
};

function calc(){
    var digi = document.getElementById("result");
    if(digi.value == 0)
        document.getElementById("result").value = null;
    else
        document.getElementById("result").value = eval(digi.value);
};