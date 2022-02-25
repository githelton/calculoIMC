//VALIDAR ALTURA E PESO
const validaPeso = (peso) => { //validando o peso
    let pesoValido = false;
        if(peso > 0){pesoValido = true}
    return pesoValido;    
}
const validaAltura = (altura) => { //validando altura
    let alturaValida = false;
        if(altura > 0){alturaValida = true}
    return alturaValida;    
}

export {validaPeso, validaAltura}