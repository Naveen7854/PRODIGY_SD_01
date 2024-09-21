function convertTemperature() {
    let temp = parseFloat(document.getElementById('temperature').value);
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let resultText = '';

    if (isNaN(temp)) {
        resultText = "Please enter a valid number.";
    } else if (fromUnit === toUnit) {
        resultText = `The temperature remains the same: <strong>${temp.toFixed(2)} ${getUnitSymbol(toUnit)}</strong>`;
    } else {
        let convertedTemp;

        switch (fromUnit) {
            case 'celsius':
                convertedTemp = convertFromCelsius(temp, toUnit);
                break;
            case 'fahrenheit':
                convertedTemp = convertFromFahrenheit(temp, toUnit);
                break;
            case 'kelvin':
                convertedTemp = convertFromKelvin(temp, toUnit);
                break;
            default:
                resultText = "Invalid unit selected.";
        }

        if (convertedTemp !== undefined) {
            resultText = `Converted Temperature: <strong>${convertedTemp.toFixed(2)} ${getUnitSymbol(toUnit)}</strong>`;
        }
    }

    document.getElementById('result').innerHTML = resultText;
}

function convertFromCelsius(temp, toUnit) {
    switch (toUnit) {
        case 'fahrenheit':
            return (temp * 9 / 5) + 32;
        case 'kelvin':
            return temp + 273.15;
    }
}

function convertFromFahrenheit(temp, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return (temp - 32) * 5 / 9;
        case 'kelvin':
            return ((temp - 32) * 5 / 9) + 273.15;
    }
}

function convertFromKelvin(temp, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return temp - 273.15;
        case 'fahrenheit':
            return (temp - 273.15) * 9 / 5 + 32;
    }
}

function getUnitSymbol(unit) {
    switch (unit) {
        case 'celsius':
            return '°C';
        case 'fahrenheit':
            return '°F';
        case 'kelvin':
            return 'K';
    }
}
