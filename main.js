// CALCULADORA DE COMPRAS EN DOLARES
// Está calculadora es útil para poder tener una estimación del monto final
// en pesos argentinos con los impuestos incluidos de lo que tendré que 
// pagar por mi compra en dólares con tarjeta de credito

// streaming (ejmp Netflix) = tiene una carga impositiva de: imp país (8%),
// imp de presuntas gcias (45%) y IVA (21%)

// Otros Bienes menores a 300 dólares = tiene una carga impositiva de:
// imp país (30%), imp presuntas gcias (45%).

// Otros Bienes mayores a 300 dólares = tiene una carga impositiva de:
// imp país (30%), imp presuntas gcias (45%) y Bienes Personales (25%)


function calculadoraComprasEnDolares(){
    const cotizacionOficial =  273.03
    const impPais = 0.30
    const impPaisStreaming = 0.08
    const impPresuntasGcias = 0.45
    const iva = 0.21
    const bienesPersonales = 0.25


    let tipoDeCompra = prompt("¿Cuál es el tipo de compra? (streaming/otras)");
    let montoDeLaCompra = parseFloat(prompt("ingrea el monto en dolares"));
    const totalEnPesosAlOficial = montoDeLaCompra * cotizacionOficial


    if(tipoDeCompra === "streaming" && montoDeLaCompra > 0){
        console.log("Seleccionaste streaming")
        console.log("Monto ingresado: $" + montoDeLaCompra + " dólares")
        console.log("Total en pesos al oficial $" + totalEnPesosAlOficial.toFixed(2))

        const totalEnPesosMasImpStreaming = totalEnPesosAlOficial + (totalEnPesosAlOficial * impPaisStreaming) + (totalEnPesosAlOficial * impPresuntasGcias) + (totalEnPesosAlOficial * iva);

        console.log("Total final en pesos con impuestos incluidos $" + totalEnPesosMasImpStreaming.toFixed(2) );

    }else if(tipoDeCompra === "otras" && montoDeLaCompra < 300) {
        //comprar menos a 300 no incluye bienes personales
        console.log("No seleccionaste streaming y la cantidad es menor que $300");
        console.log("Monto ingresado: $" + montoDeLaCompra + " dólares");
        console.log("Total en pesos al oficial $" + totalEnPesosAlOficial.toFixed(2));

        const totalEnPesosMasImp = totalEnPesosAlOficial + (totalEnPesosAlOficial * impPais) + (totalEnPesosAlOficial * impPresuntasGcias);

        console.log("Total final en pesos con impuestos incluidos $" + totalEnPesosMasImp.toFixed(2) );

    }else if (tipoDeCompra === "otras" && montoDeLaCompra >= 300){
        console.log("No seleccionaste streaming y la cantidad es mayor que $300");
        console.log("Monto ingresado: $" + montoDeLaCompra + " dólares");
        console.log("Total en pesos al oficial $" + totalEnPesosAlOficial.toFixed(2));

        const totalEnPesosMasBsPs = totalEnPesosAlOficial + (totalEnPesosAlOficial * impPais) + (totalEnPesosAlOficial * impPresuntasGcias) + (totalEnPesosAlOficial * bienesPersonales);

        console.log("Total final en pesos con impuestos incluidos + Bienes Personales $" + totalEnPesosMasBsPs.toFixed(2));
    }else {
        console.log("Seleccionaste una opción distinta a 'streaming' o 'otras'. Por favor ingresa una opción correcta")
        
    }

}

calculadoraComprasEnDolares()