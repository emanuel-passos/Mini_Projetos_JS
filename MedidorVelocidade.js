
console.log(verificaVelocidade(84));

function verificaVelocidade(velocidade){

    if (velocidade <= 70){
        return "ok"
    }else{
        const pontos = Math.floor(((velocidade - 70) / 5)) ;
        if(pontos >= 12)
            console.log("carteira suspensa")
        else
            console.log("pontos: ", pontos)
        
       
    }
}

//aula