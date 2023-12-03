//arrow function
const greeting = nome => `eu sou ${nome}`;
const soma = (num1, num2) => num1 + num2;

const somaNumPequeno = (num1, num2) => {
    if(num1 > 10 || num2 > 10){
        return 'numeros de 1 a 9';
    }else{
        return num1 + num2;
    }
}

//hoisting