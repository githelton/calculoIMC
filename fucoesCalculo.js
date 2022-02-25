//calculadora IMC
const calculoIMC = (peso, altura) => {
    let imc = peso / (altura * altura);
    return imc;
}
//status do IMC
const retornaStatusIMC = (imc) => {
    let status;
    if (imc  < 18.5) {status = 'abaixo do peso';}
    else if(imc > 18.5 && imc <24.9) {status = 'peso normal';}
    else if(imc > 24.9 && imc < 30) {status = 'acima do peso';}
    else {status = 'obeso';}
    return status;
}
export {calculoIMC, retornaStatusIMC}
