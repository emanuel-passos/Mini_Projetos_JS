

const resultado = retornaFIzzBuzz(15);
function retornaFIzzBuzz(valor){

    if(typeof valor != 'number'){
        return "não é um numero"
    }
    else if(valor % 3 == 0 && valor % 5 != 0 ){
        return "fizz"
    }
    else if(valor % 5 == 0 && valor % 3 != 0){
        return "buzz"
    }
    else if(valor % 3 == 0 && valor % 5 == 0){
    return "fizzbuzz"
    }
};

console.log(resultado)


