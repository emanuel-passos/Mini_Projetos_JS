let a = 5;
let b = 10;

function retornaMaior(valor1, valor2){

if(valor1>valor2){
    return valor1;
}else{
    return valor2;
}

}

console.log(retornaMaior(a, b));


let max = retornaMaior(3, 8);
console.log(max)