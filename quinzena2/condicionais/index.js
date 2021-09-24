

//Exercício1

// Resposta A: ele faz o teste para ver se resta algum número. 
// no caso ele roda o comando para ver se é divisivel por dois e sobra 0, no caso de ser este o resultado
// aparece o resultado "passou no teste".
// caso seja um número ímpar, vai restar algum valor, não será divisivel por 2, logo a resposta
// será "não passou no teste" 
// Resposta B: Para números pares.
// Resposta C: Para números ímpares.


// Exercício2

// Resposta A: Para selecionar uma das 4 opções de fruta e seus respectivos valores.
// Resposta B: O preço da fruta Maçã é R$ 2.25
// Resposta C: O preço da fruta Pêra é R$ 5 - Pois o break ele fecha o valor colocado acima dele, possibilitando
// ele rodar e seguir os comandos que classificam sua respectiva case  (neste caso, fruta e preço). Caso não haja,
// não faz sentido para o código, então ele entende e responde o valor de default

// Exercício3
// Resposta A: Ele está possibilitando ao usário escrever um número
// Resposta B: Colocando número 10, apareceria "Esse número passou no teste". Se fosse -10 apareceria um erro pois faltou o comando else"
// Resposta C: Haveria erro apenas se colocado o número negativo, pois não tem o comando else if chamando a possibilidade de 
// números negativos.E a o comando let dentro do bloco só seria possível ser visualizado se houvesse um conselo.log dentro do bloco
// pois fora do bloco o comando não existe. a menos que ao invés de let fosse usado o comando var(que é global)

// Exercícios de escrita de código

let turno =  Number(prompt("Qual turno você estuda"))
let Matutino = (turno)
let Vespertino = (turno)
let Noturno = (turno)

if ( Matutino ) {
    console.log("Bom dia!")}
    else if ( Vespertino ){
    console.log("Boa tarde!")}
    else ( Noturno ) {
console.log("Boa noite!")}

