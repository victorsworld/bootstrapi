let dogButton = document.querySelector('#button1');
let dogImg = document.querySelector('#img1');

dogButton.addEventListener('click', () => {
    let breed = "dane"
    //use encodeURI for interpolation/concatenation in case of spaces ' ' in your input.
    fetch(encodeURI(`https://dog.ceo/api/breed/${breed}/images/random`))
        .then((response) => { 
            return response.json();
        })
        .then((data) => {
            dogImg.src = data.message;
            //console.log(data.message)
        })
})

let form = document.querySelector('form');
let userInput = document.querySelector('#input');
let buttonW = document.querySelector('#button1');
let displayArea = document.querySelector('.alert1');

form.addEventListener('submit', (event) => {
    event.preventDefault
    
    let url = `https://goweather.herokuapp.com/weather/${userInput.value}`
    console.log(encodeURI(url));
    
    fetch(encodeURI(url))
        .then((response) => {
        return response.json()
        }).then((data) => {
             displayArea.innerText = `${data.description}, ${data.temperature}, ${data.wind}`
        })
})
