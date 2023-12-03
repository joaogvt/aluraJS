//parametros de funcao
function soma(num1, num2){
    return num1 + num2;
}

// console.log(soma(5, 10));
// console.log(soma(2, 2));
// console.log(soma(25, 30));

//parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade){
    return `eu sou ${nome} e tenho ${idade} anos`;
}

// onsole.log(nomeIdade(55, 'caneta'));

function times(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(times(soma(4, 5)));