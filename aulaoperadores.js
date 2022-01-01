//operadores aritméticos matemáticos
//operadores atribuição
//operadores de comparação
//operadores lógicos
//operadores bitwise

//aritmético +,  -, *, /, ** (exponencial)
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

// ++ e -- incremento

let idade = 20;

console.log(++idade);
console.log(idade);

console.log(--idade);
console.log(idade);

//operadores de atribuição

let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer; // tbm valido para o sinal '-'
console.log(valorTecladoGamer);

//operadores igualdade -  igualdade escrita

console.log (1 === 1);
console.log('1' === 1 );

//operador ternário

let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//operadores lógicos

// operador lógico e (&&)
//retorna TRUE se os dois operadores forem 'true'

//console.log(true && true);
//console.log(false && true);

//let maiorDeIdade =  true;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicarVaga = maiorDeIdade && possuiCarteiraDeTrabalho;

//console.log(podeAplicarVaga);


//operador lógico ou (||)

//let maiorDeIdade =  false;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicarVaga = maiorDeIdade || possuiCarteiraDeTrabalho;

//console.log(podeAplicarVaga);

//operador NOT (!)

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicarVaga = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar: ',podeAplicarVaga);

let candidatoRecusado = !podeAplicarVaga;

console.log('Candidato Recusado',candidatoRecusado);
