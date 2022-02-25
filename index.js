import {validaAltura, validaPeso} from "./validacaoPesoAltura.js";
import {calculoIMC, retornaStatusIMC} from "./fucoesCalculo.js";

let peso = 72;
let altura = 1.74;

let validandoPeso = validaPeso(peso);
let validandoAltura = validaAltura(altura);

if (validandoPeso && validandoAltura){
    let resultadoIMC = calculoIMC(peso,altura);
    let status = retornaStatusIMC(resultadoIMC);
    console.log("seu IMC é: " +resultadoIMC.toFixed(2) + " e vc está: "+status);
}else{console.log("Peso e altura devem ser maiores que ZERO!")}