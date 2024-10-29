function trocaCor(){
    if (document.body.style.backgroundColor === "rgb(27, 27, 27)"){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    
    document.getElementById("toggleButton").textContent = "Modo Escuro";
    
    
}
else{
        document.body.style.backgroundColor = "rgb(27, 27, 27)";
        document.body.style.color = "white";
        
        document.getElementById("toggleButton").textContent = "Modo Claro";
    }
    
  
};