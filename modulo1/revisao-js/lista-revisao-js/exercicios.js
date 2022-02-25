// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}


// EXERCÍCIO 02

function retornaArrayInvertido(array) {
  const arrays = array
  
  
  return arrays.reverse();
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const arrays = array

      return arrays.sort ((a,b)=> a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  // const arrays = array
  const pares = []
  for (let i = 0; i <= array.length-1; i++) {
    if( array [i] % 2 === 0 ) {
      pares.push(array [i])
  
    
    
    } 
  }
  return  pares
}
 

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const arrayDePares = retornaNumerosPares(array)
  for (let i = 0; i <= arrayDePares.length-1; i++){
    arrayDePares[i] = arrayDePares[i]*arrayDePares[i]
  }

 return arrayDePares
// console.log(arrayDePares)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numeroMaior = -Infinity
  for ( let i = 0; i <= array.length-1; i++ ) {
    if(array [i] > numeroMaior) {
      numeroMaior = array [i];
    }
  }
    return numeroMaior
  }

  
  
  // if se numero atual é maior q anterior
  // 
  

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  // const num1 = 8
  // const num2 = 9
  // const maiorNumero = retornaMaiorNumero (array)
  // const maiorDivisivelPorMenor = false
  // if ( maiorNumero % maiorDivisivelPorMenor) {
  //   maiorDivisivelPorMenor = true
  // } 


  // const objeto = {

  // }
}

// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {
  const arrayDeNumerosPares = [];
  for (let i=0; n > arrayDeNumerosPares.length ; i += 2) {
    if ( i % 2 === 0) {
      arrayDeNumerosPares.push(i)
    }
  }
  return arrayDeNumerosPares;
   
}

console.log(retornaNPrimeirosPares(3));

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let numeroMaiorr = retornarMaiorNumero(array)
  let numeroMenor = max(numeroMaiorr)
  for ( let i = 0; i <= array.length-1; i++ ) {
    if(array [i] < numeroMenor) {
      numeroMenor = array [i];
    }
    return (numeroMenor , numeroMaiorr)
}
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  // const filmeNovo = filme
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}
// EXERCÍCIO 12
 
function retornaPessoaAnonimizada(pessoa) {

  const novaInfo = {
    ...pessoa,
    nome: "ANÔNIMO"      
  }
return novaInfo

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const arrays = consultas

  return arrays.sort((a,b) => a - b);
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}