// variables
document.getElementById("year").innerHTML = new Date().getFullYear();
var coll = document.getElementsByClassName("collapseButton");

// adds suffix to numbers (1st, 2nd, 3rd, etc.)
const suffix = (n) => {
    if (n % 100 >= 11 && n % 100 <= 13) return "th";
    switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
    }
};

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

function showTriangleInput(numSides) {
    const triangleInputContainer = document.getElementById("sidesInputContainer");
    const triangleInput = document.getElementById("sidesInput");

    const sideA = document.getElementById("sideA");
    const sideB = document.getElementById("sideB");
    const sideC = document.getElementById("sideC");
    const angleA = document.getElementById("angleA");
    const angleB = document.getElementById("angleB");
    const angleC = document.getElementById("angleC");

    if (numSides === "3") {
        sideA.style.display = "inline-block";
        sideB.style.display = "inline-block";
        sideC.style.display = "inline-block";
        angleA.style.display = "none";
        angleB.style.display = "none";
        angleC.style.display = "none";
    } else if (numSides === "2") {
        sideA.style.display = "inline-block";
        sideB.style.display = "inline-block";
        sideC.style.display = "none";
        angleA.style.display = "inline-block";
        angleB.style.display = "none";
        angleC.style.display = "none";
    } else if (numSides === "1") {
        sideA.style.display = "inline-block";
        sideB.style.display = "none";
        sideC.style.display = "none";
        angleA.style.display = "inline-block";
        angleB.style.display = "inline-block";
        angleC.style.display = "none";
    } else {
        triangleInputContainer.style.display = "none";
        triangleInput.value = "";
    }
}