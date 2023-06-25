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

function API(){
    // Fazendo uma requisição HTTP para a API
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    // Extraindo a piada da resposta da API
    const joke = data.value;

    // Exibindo a piada no console ou em algum elemento HTML da sua página
    console.log(joke);
    // ou
    // document.getElementById('joke').innerText = joke;
  })
  .catch(error => {
    console.log('Ocorreu um erro ao obter a piada:', error);
  });

}


while(true){
    Calcular()
    API()
    
}
