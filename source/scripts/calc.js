const spanFactorial = document.getElementById("resultFactorial");
const spanFibonacci = document.getElementById("resultFibonacci");
const spanPrime = document.getElementById("resultPrime");
const spanSquare = document.getElementById("resultSquare");

function calcFactorial(numFatorial) {
    if (numFatorial < 0 || numFatorial === "") {
        spanFactorial.innerHTML = "<br>Please enter a positive number."; 
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

function calcFibonacci(numFibonacci) {
    if (numFibonacci < 0 || numFibonacci === "") {
        spanFibonacci.innerHTML = "<br>Please enter a positive number.";
    } else {
        let result = [0, 1];

        for (let i = 2; i <= numFibonacci; i++) {
            result[i] = result[i - 1] + result[i - 2];
        }
        spanFibonacci.innerHTML = `<br>The ${numFibonacci}${suffix(numFibonacci)} fibonacci is ${result[numFibonacci]}.`;
    }
    updateContentHeight(spanFibonacci);
}

function calcPrime(numPrime) {
    if (numPrime < 2 || numPrime === "") {
        spanPrime.innerHTML = "<br>Please enter a number greater than 1.";
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