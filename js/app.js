function sumar(){

    const forma = document.getElementById('forma');
    let valor1 = forma['operandoA'];
    let valor2 = forma['operandoB'];
    let resultado = parseInt(valor1.value) + parseInt(valor2.value);
    if(isNaN(resultado)){
        resultado = "La operacion no tiene numeros";
        document.getElementById('resultado').innerHTML = `El resultado de la suma es: ${resultado}`;

    }else{
        
        document.getElementById('resultado').innerHTML = `El resultado de la suma es: ${resultado}`;
    }
}

function restar(){

    const forma = document.getElementById('forma');
    let valor1 = forma['operandoA'];
    let valor2 = forma['operandoB'];
    let resultado = parseInt(valor1.value) - parseInt(valor2.value);
    if(isNaN(resultado)){
        resultado = "La operacion no tiene numeros";
        document.getElementById('resultado').innerHTML = `${resultado}`;

    }
    else if(resultado < 0){
        document.getElementById('resultado').innerHTML = `El resultado negativo es: ${resultado}`;
    }
    else{
        
        document.getElementById('resultado').innerHTML = `El resultado de la resta es: ${resultado}`;
    
    }
}

function Multiplicar(){

    const forma = document.getElementById('forma');
    let valor1 = forma['operandoA'];
    let valor2 = forma['operandoB'];
    let resultado = parseInt(valor1.value) * parseInt(valor2.value);
    if(isNaN(resultado)){
        resultado = "La operacion no tiene numeros";
        document.getElementById('resultado').innerHTML = `${resultado}`;

    }
    else{
        
        document.getElementById('resultado').innerHTML = `El resultado de la multiplicacion es: ${resultado}`;
    
    }
}


function dividir(){
    
    const forma = document.getElementById('forma');
    let valor1 = forma['operandoA'];
    let valor2 = forma['operandoB'];
    let resultado = parseInt(valor1.value) / parseInt(valor2.value);
    if(isNaN(resultado)){
        resultado = "La operacion no tiene numeros";
        document.getElementById('resultado').innerHTML = `${resultado}`;

    }
    else{
        
        document.getElementById('resultado').innerHTML = `El resultado de la divicion es: ${resultado}`;
    
    }
}

function Limpiar(){
    const forma = document.getElementById('forma');
    forma['operandoA'].value = '';
    forma['operandoB'].value = '';
}

function cambiar(valor){
    valor.style.background = '#d69f7e';
}

function regresar(valor){
    valor.style.background = 'white';
}