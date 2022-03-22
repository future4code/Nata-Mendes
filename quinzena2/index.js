// // //Exercício1 - Interpretação
// // const filme = {
// // 	nome: "Auto da Compadecida", 
// // 	ano: 2000, 
// // 	elenco: [
// // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// // 		"Virginia Cavendish"
// // 		], 
// // 	transmissoesHoje: [
// // 		{canal: "Telecine", horario: "21h"}, 
// // 		{canal: "Canal Brasil", horario: "19h"}, 
// // 		{canal: "Globo", horario: "14h"}
// // 		]
// // }

// // console.log(filme.elenco[0])
// // console.log(filme.elenco[filme.elenco.length - 1])
// // console.log(filme.transmissoesHoje[2])

// // // Resposta: Matheus Nachtergaele, Virginia Cavendish , canal: "Globo", horario: "14h"

// // //Exercício2

// // const cachorro = {
// // 	nome: "Juca", 
// // 	idade: 3, 
// // 	raca: "SRD"
// // }

// // const gato = {...cachorro, nome: "Juba"}

// // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// // console.log(cachorro)
// // console.log(gato)
// // console.log(tartaruga)

// // // Resposta: 
// // // nome: "Juca", 
// // // 	idade: 3, 
// // // 	raca: "SRD"

// // //     nome: "Juba", 
// // // 	idade: 3, 
// // //     raca: "SRD"

// // //     nome: "Jubo", 
// // // 	idade: 3, 
// // // 	raca: "SRD"
     
// // // os três pontos copia as informações do objeto anterior. ex. ...cachorro, chamou para o gato, as informações do cachorro.

// // //Exercício3

// // function minhaFuncao(objeto, propriedade) {
// // 	return objeto[propriedade]
// // }

// // const pessoa = {
// //   nome: "Caio", 
// //   idade: 23, 
// //   backender: false
// // }

// // console.log(minhaFuncao(pessoa, "backender"))
// // console.log(minhaFuncao(pessoa, "altura"))

// // // Resposta: 
// // // A) false;
// // // undefined

// // // B)Porque, quando não existe valor (no caso "altura") informado no objeto e é lançado no console.log,
// // //  como é um valor negativo ou inexistente NÃO INTENCIONAL (ex esqueceu-se de colocar), aparece undefined. ou seja, faltou informações. 
// // // ao contrário do NUll, que é adicionado quando o valor negativo ou 0 é intencional.

// // // Exercício1 - Escrita de código



//      const pessoa = {
//         nome: "josevalda",
//         apelidos: ["valda","valdinha", "zinha"]
        
//     }

//     function objetoPessoa(pessoa) {
//          console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou ${pessoa.apelidos[2]}`)
//     }
// objetoPessoa(pessoa)

// const outrosApelidos = {
//     ...pessoa,
//     apelidos: ["zeca", "valdete", "espaguete"]

    
// }

// objetoPessoa(outrosApelidos)

// // Exercício2 - Escrita de código

// const pessoaUm = {
//     nome: "José",
//     idade: 24,
//     profissão: "aviador"
    

// }
    
// const pessoaDois = {
//     nome: "Antonio",
//     idade: 25,
//     profissão: "candanga"
    

// }
    
// // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// // 1. O valor de `nome`
// // 2. O numero de caracteres do valor `nome`
// // 3. O valor de `idade`
// // 4. O valor de `profissão`
// // 5. O numero de caracteres do valor `profissão`
// // - Exemplo

// //     const pessoa = {
// //     	nome: "Bruno", 
// //       idade: 23, 
// //     	profissao: "Instrutor"
// //     }

// //     minhaFuncao(pessoa)

// //     // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
// //     ```

// function profissoesPessoa(pessoaUm) {
//     const array = [pessoaUm.nome, primeira.nome.length, primeira.idade, primeira.profissao, primeira.profissao.length]
//     return array
// }

// console.log(profissoesPessoa(primeira))


// const pessoa = { 
//     nome: "jani",
//     genêro: "feminino",


// }

// function minhaFuncao (pessoa) { 
//     console.log(`Bem vinda${pessoa.nome}`)

// }
//  minhaFuncao(pessoa)

let primeiroNumero =  Number(prompt("digite um numero"))
let segundoNumero =  Number(prompt("digite um numero"))


function numeroLoko(num1, num2) {
    if ( num1 > num2) {
        console.log("primeiro numero maior que o segundo")
    } else if( num1 < num2 ) {
    console.log("primeiro numero menor que o segundo")
}
    if (num1 === num2 ) {
    console.log("numeros iguais")}


}
numeroLoko(primeiroNumero, segundoNumero)
numeroLoko(0,0)
numeroLoko(8,9)