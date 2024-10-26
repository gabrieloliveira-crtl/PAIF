function trocaCor(){
    if (document.section.style.backgroundColor === "rgb(27, 27, 27)"){
    document.section.style.backgroundColor = "white";
    document.section.style.color = "black";
    
    document.getElementById("toggleButton").textContent = "Modo Escuro";
    
    
}
else{
        document.body.style.backgroundColor = "rgb(27, 27, 27)";
        document.body.style.color = "white";
        
        document.getElementById("toggleButton").textContent = "Modo Claro";
    }
    
  
};