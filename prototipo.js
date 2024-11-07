function calculateTransfer() {
    // Obtener valores ingresados
    const amount = parseFloat(document.getElementById("amount").value);
    const exchangeRate = parseFloat(document.getElementById("exchangeRate").value);

    if (isNaN(amount) || isNaN(exchangeRate)) {
        alert("Por favor ingrese valores válidos.");
        return;
    }

    // Simulación de optimización de tarifa
    const baseFee = 5; // Tarifa base en dólares
    const optimizedFee = baseFee * 0.9; // Aplicamos un descuento del 10%
    
    // Monto total que recibirá la familia en Colombia
    const totalInPesos = (amount - optimizedFee) * exchangeRate;

    // Mostrar resultado en la página
    document.getElementById("result").innerHTML = `
        <p>Monto enviado (USD): $${amount.toFixed(2)}</p>
        <p>Tarifa optimizada aplicada: $${optimizedFee.toFixed(2)} USD</p>
        <p>Total recibido en Colombia (COP): $${totalInPesos.toFixed(2)}</p>
    `;
}
