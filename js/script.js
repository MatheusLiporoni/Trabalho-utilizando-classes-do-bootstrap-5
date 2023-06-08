const h1 = document.querySelector('#title');


const bem = ['Bem vindo ao MLX']

let correntmensage1 = 0
let correntmensage2 = 0
let correntmensage3 = ''
let correntmensage4 = ''

const type = () => {
    correntmensage3 = bem[correntmensage1]
    correntmensage4 = correntmensage3.slice(0,correntmensage2++)
    h1.textContent = correntmensage4
    
}

setInterval(type,200)