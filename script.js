document.getElementById('calculateBtn').addEventListener('click', calculateEmissions);

function calculateEmissions() {
    const distance = document.getElementById('distance').value;
    const flightClass = document.getElementById('class').value;

    if (!distance || distance <= 0) {
        alert('Please enter a valid distance.');
        return;
    }

    let emissionFactor;

    // Emission factors (kg CO2 per km)
    if (distance <= 1500) {
        emissionFactor = 0.255; // Short-haul
    } else if (distance <= 4000) {
        emissionFactor = 0.150; // Medium-haul
    } else {
        emissionFactor = 0.130; // Long-haul
    }

    // Class-based adjustment
    let classMultiplier = 1;
    if (flightClass === 'premium-economy') classMultiplier = 1.5;
    if (flightClass === 'business') classMultiplier = 2;
    if (flightClass === 'first-class') classMultiplier = 3;

    const totalEmissions = distance * emissionFactor * classMultiplier;
    document.getElementById('result').textContent = `Estimated Emissions: ${totalEmissions.toFixed(2)} kg CO2`;
}
