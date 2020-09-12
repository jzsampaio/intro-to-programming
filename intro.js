// Introdução a programação (por JZ, 2020-09-09)

// declarando uma variável
let x;

// associando um valor a uma variável
x = 0;

// imprimindo no console
console.log(x);

// existem outros tipos de valores
x = "juarez"
console.log(x);

x = true;
console.log(x);

x = 0
console.log(x);

// operações aritiméticas
x = (x + 1) * 100;
console.log(x);

// for-loop
let i;
for(i = 0; i < 10; i++) {
  console.log(i);
}

// if/else
if(i > 0) {
  console.log("'i' é maior do que 0");
} else {
  console.log("'i' não é maior do que 0");
}

// função
function task() {
  console.log('task!');
} 
// chamando a função que acabamos de definit
task();

// função que recebe um parâmetros
function task2(x) {
  console.log(x);
} 
task2(1);

// função que recebe dois parâmetros
function task3(x, y) {
  console.log(x + y);
} 
task3(1, 1);

// syntax alternativ para função
const task4 = (x) => {
  console.log(x);
}
task4(99)

let a = [0, 1, 2]
console.log(a[0]);

let o = {
  a: 0
}
console.log(o.a);
console.log(o['a']);
o['marcelo'] = 1;
console.log(o);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})


readline.question(
  `What's your age?`,
  (age_string) => {
    const age_number = Number(age_string);
    console.log(`Your age is: ${age_number}! whose square is ${age_number ** 2}`)
    readline.close()
  })
