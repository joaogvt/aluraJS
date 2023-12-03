//expressao de funcao
console.log(soma(1, 1));
const soma = function(num1, num2){return num1 + num2;}
//console.log(soma(1, 1));

//hoisting

console.log(apresentar());

function apresentar(){
    return 'ola';
}