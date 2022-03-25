const array = [70, 70, 80]

console.log(mediaDoAluno(array))

function mediaDoAluno(notas){

    const media = calculaMedia(notas);

      if(media < 59) return 'F';
      if(media < 69) return 'D';
      if(media < 79) return 'C';
      if(media < 89) return 'B';
      return 'A';

}

function calculaMedia(array){
   
    let soma = 0;

    for(let i = 0; i<array.length; i++){
        soma += array[i];
      }

      return soma/(array.length);

}