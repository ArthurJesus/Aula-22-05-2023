function mostrarValor(){
    var elemento = document.getElementById('range')
    var valor = document.getElementById('range').value;
    document.getElementById('slider').innerText = valor;
    
    if (valor > 0){
        var red = 236;
        var green = 245;
        var blue = 66;
        var alpha = 0.3;
        
        document.getElementById('corpo').style.backgroundColor = `rgba(${red}, ${green - valor}, ${blue}, ${alpha + green/100})`

    }

    if (valor < 0){
        var red = 66;
        var green = 255;
        var blue = 170;
        var alpha = 0.3;
        
        document.getElementById('corpo').style.backgroundColor = `rgba(${red}, ${green}, ${blue - (valor)}, ${alpha + (green/100)})`
       
    }

}

/* function mostrarValor(){
    var elemento = document.getElementById('range')
    var valor = document.getElementById('range').value;
    document.getElementById('slider').innerText = valor;
    var red = 0;
    var green = 0;
    var blue = 0;
    var alpha = 0; 
    if (valor == 1){
        red = 236;
        green = 245;
        blue = 66;
        alpha = 0.3;
    }
    
    document.getElementById('corpo').style.backgroundColor = `rgba(${red}, ${green - valor}, ${blue}, ${alpha + green/100})`

    if (valor == -1){
        var red = 66;
        var green = 245;
        var blue = 236;
        var alpha = 0.3;
        document.getElementById('corpo').style.backgroundColor = `rgba(${red}, ${green - valor}, ${blue}, ${alpha + green/100})`
    }
} */