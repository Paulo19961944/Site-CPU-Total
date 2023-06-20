// Seleciona as ID
let inputCelsius = document.getElementById('input1');
let inputFahrenheit = document.getElementById('input2');
let button = document.getElementById('btn')



// Calcula a Diferença

function Calcular() {
    let celsius = parseFloat(inputCelsius.value);
    let fahrenheit = parseFloat(inputFahrenheit.value);

    let calculatedFahrenheit = (celsius * 1.8) + 32;
    let calculatedCelsius = (fahrenheit - 32) / 1.8;

    console.log(calculatedCelsius);
    console.log(calculatedFahrenheit);

}


while(true){
    Calcular()
}