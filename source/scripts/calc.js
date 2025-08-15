const spanFactorial = document.getElementById("resultFactorial");
const spanFibonacci = document.getElementById("resultFibonacci");
const spanPrime = document.getElementById("resultPrime");
const spanSquare = document.getElementById("resultSquare");
const spanTriangle = document.getElementById("resultTriangle");

function calcFactorial(numFatorial) {
    cantCalc = lessThanZero(spanFactorial, numFatorial);

    if (cantCalc === true) {
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
    updateContentHeight(spanFactorial);
}

// TODO: show the fibonacci sequence until the given number
function calcFibonacci(numFibonacci) {
    cantCalc = lessThanZero(spanFibonacci, numFibonacci);

    if (cantCalc === true) {
        return;
    } else {
        let result = [0, 1];

        for (let i = 2; i <= numFibonacci; i++) {
            result[i] = result[i - 1] + result[i - 2];
        }
        spanFibonacci.innerHTML = `<br>The ${numFibonacci}${suffix(numFibonacci)} fibonacci is ${result[numFibonacci]}.`;
    }
    updateContentHeight(spanFibonacci);
}

// TODO: give the position of the prime as $(numPrime)$(suffix(numPrime))
// maybe consult in a database or have another function giving the nth prime
function calcPrime(numPrime) {
    cantCalc = lessThanZero(spanPrime, numPrime);

    if (cantCalc === true) {
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

        spanPrime.innerHTML = isPrime ? `<br>${numPrime} is a prime number.` : `<br>${numPrime} is not a prime number.`;
    }
    updateContentHeight(spanPrime);
}

// TODO: if the number has more than 3 digits, the result will be too long
//       i.e. (234)² = (200 + 30 + 4)²
function calcSquare(numSquare) {
    if (numSquare === "") {
        spanSquare.innerHTML = "<br>Please enter a number.";
        updateContentHeight(spanSquare);
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

    updateContentHeight(spanSquare);
}

function calcOneSide(sideA, angleB, angleC) {

}

function calcTwoSide(sideA, sideB, angleC) {

}

function calcThreeSide(sideA, sideB, sideC) {
    cantCalc = lessThanZero(spanTriangle, sideA, sideB, sideC);
    if (cantCalc === true) {
        return;
    }
    
    // needs to be after, so the span doesn't get overwritten
    triangleExists = checkTriangleExistence(sideA, sideB, sideC);
    if (triangleExists === false) {
        return;
    }

    
}