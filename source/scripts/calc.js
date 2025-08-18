import { getPrimeIndex } from './search.js';
import { suffix } from './main.js';

const spanFactorial = document.getElementById("resultFactorial");
const spanFibonacci = document.getElementById("resultFibonacci");
const spanPrime = document.getElementById("resultPrime");
const spanSquare = document.getElementById("resultSquare");
const spanTriangle = document.getElementById("resultTriangle");

function calcFactorial(numFatorial) {
    if (lessThanZero(spanFactorial, numFatorial) === true) {
        return;
    } else if (numFatorial === 0) {
        spanFactorial.innerHTML = "<br>The factorial of 0 is 1.";
    } else {
        let result = 1;

        for (let i = 1; i <= numFatorial; i++) {
            result *= i;
        }

        spanFactorial.innerHTML = `<br>The factorial of ${numFatorial} is ${result}.`;
    }
}

// TODO: show the fibonacci sequence until the given number CHECK:
function calcFibonacci(numFibonacci) {
    if (lessThanZero(spanFibonacci, numFibonacci) === true) {
        return;
    } else {
        let result = [0, 1];

        for (let i = 2; i <= numFibonacci; i++) {
            result[i] = result[i - 1] + result[i - 2];
        }

        // the sequence should not show the 0th element
        let sequence = result.slice(1).join(", ");
        if (numFibonacci >= 103) {
            sequence = "The sequence is too long to display.";
        }

        spanFibonacci.innerHTML = `<br>The ${numFibonacci}${suffix(numFibonacci)} fibonacci is ${result[numFibonacci]}.<br>${sequence}`;
    }
}

// TODO: give the position of the prime as $(numPrime)$(suffix(numPrime))
// maybe consult in a database or have another function giving the nth prime CHECK:
async function calcPrime(numPrime) {
    if (lessThanZero(spanPrime, numPrime) === true) {
        return;
    } else if (numPrime < 2) {
        spanPrime.innerHTML = `<br>${numPrime} is not a prime number.`;
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(numPrime); i++) {
            if (numPrime % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            const index = await getPrimeIndex(numPrime);
            if (typeof index === "number") {
                spanPrime.innerHTML = `<br>${numPrime} is the ${index}${suffix(index)} prime number.`;
            } else {
                spanPrime.innerHTML = `<br>${index}`;
            }
        } else {
            spanPrime.innerHTML = `<br>${numPrime} is not a prime number.`;
        }
    }
}

// TODO: if the number has more than 3 digits, the result will be too long
//       i.e. (234)² = (200 + 30 + 4)²
function calcSquare(numSquare) {
    if (numSquare === "") {
        spanSquare.innerHTML = "<br>Please enter a number.";
        return;
    }

    let mod = numSquare % 10;
    let num = numSquare - mod;

    let term1 = num * num;
    let term2 = 2 * num * mod;
    let term3 = mod * mod;
    
    const formatNum = (n) => n < 0 ? `(${n})` : n;

    spanSquare.innerHTML = `<br>${formatNum(numSquare)}²
                            <br>(${formatNum(num)} + ${formatNum(mod)})²
                            <br>${formatNum(num)}² + 2 * ${formatNum(num)} * ${formatNum(mod)} + ${formatNum(mod)}²
                            <br>${formatNum(term1)} + ${formatNum(term2)} + ${formatNum(term3)}
                            <br>${formatNum(term1 + term2 + term3)}`;
}

function calcOneSide(sideA, angleB, angleC) {

}

function calcTwoSide(sideA, sideB, angleC) {

}

function calcThreeSide(sideA, sideB, sideC) {
    if (lessThanZeros(spanTriangle, sideA, sideB, sideC) === true) {
        return;
    }
    
    // needs to be after, so the span doesn't get overwritten
    triangleExists = checkTriangleExistence(sideA, sideB, sideC);
    if (triangleExists === false) {
        return;
    }

    
}

window.calcFactorial = calcFactorial;
window.calcFibonacci = calcFibonacci;
window.calcPrime = calcPrime;
window.calcSquare = calcSquare;
window.calcOneSide = calcOneSide;
window.calcTwoSide = calcTwoSide;
window.calcThreeSide = calcThreeSide;