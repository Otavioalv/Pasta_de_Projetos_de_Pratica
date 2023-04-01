function clique(){
    var val = document.getElementById("test");

    if(val.innerText == "Clicou"){
        val.innerText = "Clique";
        val.style.backgroundColor = "#82e674";
    }
    else{    
        val.innerText = "Clicou";
        val.style.backgroundColor = "#e67474";
    }

    var cor = document.getElementById("iCor");
    document.body.style.backgroundColor = cor.value;
}