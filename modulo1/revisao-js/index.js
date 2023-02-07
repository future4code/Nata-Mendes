// // const num1 = Number(prompt("insira um número, Zé"))
// //  const num2 = Number(prompt("insira um número, Caposka"))

// //  console.log(`aí Mateux, seus números são: num1 = ${num1} e num2 = ${num2}`)
// // console.log(num1 + num2)
// // console.log(num1 - num2)
// // console.log(num1 * num2)
// // console.log(num1 / num2)
// // console.log(num1 % num2)

// // Exercício 3

// // const numeroSorteadoParsa = Math.floor(Math.random() * 10) + 1
// // const numeroQueVaiDa = Number(prompt(`Coloca aí,fela. De um a Deis kkkk`))

// // console.log(`o número sorteado foi ${numeroSorteadoParsa}` )
// // if (numeroQueVaiDa === numeroSorteadoParsa) {
// // console.log ("seu número é igual ao numero sorteado, seu filho da puta")
// // } else if (numeroQueVaiDa > numeroSorteadoParsa) {
// // console.log ("é maior né jdhow!?") 
// // } else 
// //     console.log ("menózin")

// // Exercício 4 

// // const digiteIdade = prompt(`digite sua idade!`)
// // const digiteAltura = prompt(`digite sua altura em centímetros!`)
// // const eDoente = prompt(`tem problema cardíaco? S/N`)

// // if (digiteIdade >= 18 && digiteAltura >= 160 && eDoente === "N" || "n") {
// //     console.log("pode entrar, bebê")
// // } else {
// //    console.log ("senta lá, Cláudia!")
// // }

// // Exercício 5

// // const frase = " Hoje eu vou comer cenoura, ebaa "
// // console.log (frase, frase.length)

// // console.log (frase.trim(),  frase.length)
// // console.log (frase.toLowerCase())
// // console.log (frase.includes("comer") )
// // console.log (frase.includes("potatoes") )

// // const novaFrase = frase.replaceAll("cenoura" , "batata") 
// // console.log (novaFrase)
// // console.log(novaFrase.includes("comer"))
// // console.log(novaFrase.includes("batata"))

// // Exercício 6

// const lista = ["batata", "cenoura","beterraba"]

// console.log (lista ["1"])
// console.log(lista.length)
// lista.push("mandioca")
// console.log(lista)
// console.log(lista.includes("cenoura"))
// lista.splice(1,1) 
// console.log(lista)

// Exercício 7

// const array = [4,7,9,11,12]

// function soma (blxDeNumeros) {

//     const primeiro = blxDeNumeros [0] / 2
//     const ultimo = blxDeNumeros [blxDeNumeros.length-1] / 2

//     blxDeNumeros [0] = primeiro
//     blxDeNumeros [blxDeNumeros.length-1] = ultimo

//     return blxDeNumeros
// }

// console.log (soma(array))

// Exercício 8

// const pessoa = {
//     nome: "Naldinho",
//     idade: 390,
//     generoMusical: "lambada"
// }

// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`)

// const novaPersona = {
//     ... pessoa,
//     nome: "Chupisco" ,
//     sobrenome: "Kinkão"
// }

// console.log (novaPersona)

//Exercício 9
 
// const numeroUser = Number(prompt ("digite some number here: "))
//  const bichinho = prompt("digite cachorro, gato ou vaca")

// switch (bichinho) {

//     case 'gato':
//     console.log ("Miau")
//     break

//     case 'vaca':
//         console.log ("Muuuuu... ito certo")
//         break

//         case 'cachorro':
//        console.log("Au au au")
//         break

//        default:  console.log('bichin desconhecido')
//        break
       
// }


// if (bichinho === "gato") {
//     console.log ("Miau")
// }  else if (bichinho === "vaca") {
//     console.log ("Muuuuu... ito certo")
// } else if (bichinho === "cachorro") {
//     console.log ("Au au au") 
// } else {
//     console.log("bichin desconhecido")
// }


// if  (numeroUser % 2 === 0) {
//     console.log ("é par")
// } else {
//     console.log ( "é ímpar ")
// }

// Exercício 10

// const numeros = [ 14,18,200,500,19,23,25,99]
// let evelly = -Infinity

// // let i = 0 
// // while (i < numeros.length) {
// //     if (numeros[i] > evelly) {
// //         evelly = numeros[i]
// //     }

    
// //     i++
// // }


// // for (let i = 0; i < numeros.length; i++) {
// //     if (numeros[i] > evelly) {
// //         evelly = numeros[i]
// //     }
// // }

// // for (let qpassaporcadaposicao of numeros) {
// //     if (qpassaporcadaposicao > evelly) {
// //      evelly = qpassaporcadaposicao //evely aqui vai pegar o valor de qpassaporcadaposicao e vai valer esse valor da posição respectiva q qpassaporcadaposicao estava naquele momento sabendo q essa variavel pula de casa em casana array. ofr of é mais simplificada e nao tem declarar o "i" e nem o seu valor.
// //   }
// // }
// console.log(`o maior número é: ${evelly}`)

// Exercício 11


// const nata = {
//     nome: "Natã",
//     idade: 25,
//     tocaBaixo: true,
//     tocaBateria: false,
//     musicasFavoritas: ["kings and queens",  "Tell me whyyyyy...!", "To The Moon"],
//     talkEnglish: () => console.log("what about you sonava, bit**?"),
//      muler: {
//         nome: "evelly",
//         idade: 23,
//         especialidade: "canta Muito",
//     generosqMaisGosta : ["rap", "pagode - bléh", "mpb"]  
//  }
// }

//     const info = (sobreMim) => {

//     if (sobreMim) {
//         return "toco baixo há 11 anos"
//     } else { 
//         return "Não toco bateria, ainda!"
//     }
// }

// const tocaBaixo = info(nata.tocaBaixo)
// const tocaBateria = info(nata.tocaBateria)

// const musicas = []

// for ( let i = 1; i <= nata.musicasFavoritas.length; i++ ) {
//     musicas.push(`${i}) ${nata.musicasFavoritas[i-1]}`)
// }
// //  console.log(musicas)



//  const musicasEvelly = []


//  for ( let i = 1; i <= nata.muler.generosqMaisGosta.length; i++){
//      musicasEvelly.push(`${i}) ${nata.muler.generosqMaisGosta[i-1]}`)

//  }
// //  console.log(musicasEvelly)

// const frase = `Hey, dude. eu sou ${nata.nome}, tenho ${nata.idade} anos de idade, eu ${tocaBaixo} e eu ${tocaBateria}.
// As músicas que gosto atualmente são: ${musicas}. 
// Sou casado com ${nata.muler.nome}, 
// ela tem ${nata.muler.idade} anos de idade 
// e sua especialidade é que ela ${nata.muler.especialidade}. 
// as músicas que ela mais curte são:
// ${musicasEvelly}. 
// `
// console.log(frase)
// nata.talkEnglish ()

// Exercicio 12 

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
//    ]


// //    const novoArray1 = produtos.map((products)=>{
// //     return {... products, preco: (products.preco*0.9).toFixed(2) }
// //    }) 
       
//    const hortifruti = produtos.filter((products) => {
//        return products.categoria === "Hortifruti"
//    }).map((products)=>{
//     return {... products, preco: (products.preco*0.9).toFixed(2) }
//    }) 
// //    console.log(novoArray1)
//    console.log(hortifruti)