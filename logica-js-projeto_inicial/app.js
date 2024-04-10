alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 29;
console.log(numeroSecreto);

//declarando o chute e também informando ao desenvolvedor
let chute = prompt("Escolha um número entre 1 e 30");
console.log(chute);
console.log('Resultado da comparação', chute == numeroSecreto);


// se chute for igual ao número secreto

if(numeroSecreto == chute) {
    alert(`Isso aí, você descobriu o número secreto (${numeroSecreto})`);
}

else{
    alert("Você errou!");
}