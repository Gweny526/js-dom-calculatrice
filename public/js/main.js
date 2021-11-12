let op = Array.from(document.querySelectorAll('.op'))
let calcul = (a, b, op) => {

    switch (op) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "x":
            return a * b;
            break;
        case "/":
            return a / b;
            break;

    }
    return result;
}
op.forEach(el =>{
    el.addEventListener('click', () => {
        input.value += el.innerText
    })
})

let input = document.querySelector('#inputText')

let btn = Array.from(document.querySelectorAll('.nbr'))
// console.log(btn.innerText);
// console.log(btn);
// let nbr = element.textContent
// console.log(nbr);
btn.forEach(element => {
    console.log(element);
    element.addEventListener('click', () => {
        input.value += element.innerText

    })
});
// btn.addEventListener('click', () =>{
//     btn.forEach(el => {
//         el.value = input.value

//     });
// })
let c = document.querySelector('.clear')
console.log(c);
c.addEventListener('click', () => {
    input.value = '';

})
let del = document.querySelector('.del')
console.log(del);
del.addEventListener('click', () => {
    input.value = input.value.slice(0, -1)
})
// let op = document.querySelector('.op')
// let btnEgale = document.querySelector('.equal')
// btnEgale.addEventListener('click', () => {
//     nbr1 = input.value
//     op = input.value
//     nbr2 = input.value
//     switch (op) {
//         case (op = "+"):
//             input.innerHTML = nbr1 + nbr2
//             break;
//         case (op = "-"):
//             input.innerHTML = nbr1 - nbr2
//             break;
//         case (op = "*"):
//             input.innerHTML = nbr1*nbr2
//             break;
//         case (op = "/"):
//             input.innerHTML = nbr1 / nbr2
//             break;
//         default:
//             break;
//     }
// })
// document.addEventListener('click', (e) => {
//     // result.value += number
//     switch(e.target.value){
//         // case 'c':
//         //     input.innerText = '';
//         //     break;
//         // case 'del':
//         //     input.innerText = input.innerText.slice(0, -1);
//         //     break;
//         // default:
//         //     input.value += e.target.innerText;
//         //     console.log(input);
//     }
// })