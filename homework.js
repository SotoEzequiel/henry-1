'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var binario=num.split("").reverse();
  var aux=0;
  var decimal=0;
  for (let i = 0; i < binario.length; i++) {
    
    aux=binario[i]*Math.pow(2,i);
    decimal += aux
    
  }
  return decimal
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = "";
    let aux;
    let deci=num;
    while (deci != 0) {
        aux = deci % 2;
        deci = parseInt(deci / 2);
        binario += aux;
        
    }
    var retorno=binario.split("").reverse().join("");
 return retorno

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}