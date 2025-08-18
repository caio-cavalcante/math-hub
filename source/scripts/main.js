function year() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

// adds suffix to numbers (1st, 2nd, 3rd, etc.)
export const suffix = (n) => {
    if (n % 100 >= 11 && n % 100 <= 13) return "th";
    switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
    }
};

function lessThanZero(span, num) {
    if (num < 0 || num === "") {
        span.innerHTML = "<br>Please enter a positive number.";
        return true;
    }
    return false;
}

function lessThanZeros(span, num1, num2, num3) {
    if (num1 < 0 || num1 === "" || num2 < 0 || num2 === "" || num3 < 0 || num3 === "") {
        span.innerHTML = "<br>Please enter positive numbers.";
        return true;
    }
    return false;
}

function checkTriangleExistence(sideA, sideB, sideC) {
    if ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA)) {
        return true;
    } else {
        spanTriangle.innerHTML = "<br>The triangle does not exist.";
        return false;
    }
}

function showTriangleInput(numSides) {
    const triangleButton = document.getElementById("triangleButton");

    const triangleInputContainer = document.getElementById("sidesInputContainer");
    const triangleInput = document.getElementById("sidesInput");

    const sideA = document.getElementById("sideA");
    const sideB = document.getElementById("sideB");
    const sideC = document.getElementById("sideC");

    const angleA = document.getElementById("angleA");
    const angleB = document.getElementById("angleB");
    const angleC = document.getElementById("angleC");

    const button1 = document.querySelector(".one.side.resultButton");
    const button2 = document.querySelector(".two.side.resultButton");
    const button3 = document.querySelector(".three.side.resultButton");

    [sideA, sideB, sideC, 
    angleA, angleB, angleC,
    button1, button2, button3].forEach(el => el.style.display = "none");
    triangleInputContainer.style.display = "";

    if (numSides === "3") {
        sideA.style.display = "inline-block";
        sideB.style.display = "inline-block";
        sideC.style.display = "inline-block";
        button3.style.display = "inline-block";
    } else if (numSides === "2") {
        sideA.style.display = "inline-block";
        sideB.style.display = "inline-block";
        angleC.style.display = "inline-block";
        button2.style.display = "inline-block";
    } else if (numSides === "1") {
        sideA.style.display = "inline-block";
        angleB.style.display = "inline-block";
        angleC.style.display = "inline-block";
        button1.style.display = "inline-block";
    } else {
        triangleInputContainer.style.display = "none";
        triangleInput.value = "";
    }
}

function collapse() {
    var coll = document.getElementsByClassName("collapseButton");
    
    // collapsible sections - new behavior for single section visibility
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            const isActive = this.classList.contains('active');

            for (let j = 0; j < coll.length; j++) {
                coll[j].classList.remove('active');
            }

            const allContent = document.getElementsByClassName('content');
            for (let k = 0; k < allContent.length; k++) {
                allContent[k].classList.remove('show');
            }

            if (!isActive && targetContent) {
                targetContent.classList.add('show');
                this.classList.add('active');
            }
        });
    }
}

year();
window.lessThanZero = lessThanZero;
window.lessThanZeros = lessThanZeros;
window.checkTriangleExistence = checkTriangleExistence;
window.showTriangleInput = showTriangleInput;
window.collapse = collapse;