alert("Boas vindas ao jogo do número secreto!");

let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

//declarando o chute e também informando ao desenvolvedor
let chute;
let tentativas = 1;
console.log(chute);
console.log('Resultado da comparação', chute == numeroSecreto);


//enquanto o chute não for igual ao número secreto

while (numeroSecreto != chute) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se chute for igual ao número secreto

    if(numeroSecreto == chute) {
        break;    
    }

    else{
        if (numeroSecreto > chute) {
            alert(`Você não acertou! O número secreto é maior que ${chute}`);
        }
        else {
            alert(`Você não acertou! O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1){
//    alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas`);
//}

//else{
//    alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa`);
//}