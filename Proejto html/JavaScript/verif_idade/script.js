const date = new Date();

const year = date.getFullYear(),
      month = date.getMonth() + 1, // janeiro é 0
      day = date.getDate();

function verificar(){
    const ano = document.getElementById("iNascimento"),
            result = document.getElementById("iResultado"),
            resu = document.getElementById("iResul"); 
            sex = document.querySelector('input[name="nSexo"]:checked');   
        
    result.style.display = "block";
    
    if(ano.value == "" || !sex) {
        result.innerText = "Algo não marcado";
        result.style.color = "#ff0000";
        console.log(result.innerText);
    }
    else if(ano.value > year || ano.value < 1893){
        result.innerText = "erro ano nascimento"
        result.style.color = "#ff0000";
        console.log(result.innerText);
    } 
    else{
        const idade = year - ano.value;
        
        resu.style.display = "block";
        resu.innerText = `${sex.value} ${idade} anos `

        result.innerText = "Detectamos"
        result.style.color = "#000000";
        console.log(result.innerText);
    }
}