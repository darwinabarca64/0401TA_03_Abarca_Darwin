function ejecutarPrograma() {
    // 1. INPUTS CON VALIDACIÓN SIMPLE
    let edad = prompt("Introduce tu edad:");
    if (edad === "" || isNaN(edad)) {
        alert("Edad no válida. Introduce un número.");
        return; 
    }
    edad = parseInt(edad);

    let nivel = prompt("Introduce tu nivel (junior, mid, senior):").toLowerCase();
    if (nivel !== "junior" && nivel !== "mid" && nivel !== "senior") {
        alert("Nivel no válido. El programa se detendrá.");
        return; 
    }

    let numeroFavorito = prompt("Introduce tu número favorito:");
    if (numeroFavorito === "" || isNaN(numeroFavorito)) {
        alert("Número favorito no válido.");
        return; 
    }
    numeroFavorito = parseInt(numeroFavorito);

    // 2. GENERAR LETRA
    let letra;
    if (edad < 18) {
        letra = "X";
    } else if (edad <= 35) {
        letra = "A";
    } else if (edad <= 60) {
        letra = "B";
    } else {
        letra = "C";
    }

    // 3. GENERAR PRIMER NÚMERO
    let primerNumero;
    switch (nivel) {
        case "junior": primerNumero = 1; break;
        case "mid":    primerNumero = 2; break;
        case "senior": primerNumero = 3; break;
    }

    // 4. GENERAR SEGUNDO NÚMERO
    let segundoNumero;
    if (numeroFavorito % 2 === 0) {
        segundoNumero = numeroFavorito * 2;
    } else {
        segundoNumero = numeroFavorito + 5;
    }

    // 5. MOSTRAR CÓDIGO FINAL
    // Usamos String() para asegurar que se junten y no se sumen matemáticamente
    let codigoFinal = letra + String(primerNumero) + String(segundoNumero);
    
    // IMPORTANTE: Asegúrate de que en tu HTML diga id="pantalla"
    document.getElementById("pantalla").innerText = codigoFinal;
}
