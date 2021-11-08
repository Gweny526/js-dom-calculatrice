// import calcul from './calcul'

let input = document.querySelector('input')

console.log(input);
let btn = document.querySelectorAll('button')
console.log(btn);

// let calculate = (number) =>{
//     result.value = result.value + number


document.addEventListener('click', (e) => {
    // result.value += number
    switch(e.target.innerText){
        case 'c':
            input.innerText = '';
            break;
        case 'DEL':
            if(input.innerText){
                input.innerText = input.innerText.slice(0, -1);
            }
            break;
        default:
            input.value += e.target.innerText;
            console.log(input);
    }
})