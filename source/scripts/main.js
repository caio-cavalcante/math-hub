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
        
        // Remove active class from all buttons
        for (let j = 0; j < coll.length; j++) {
            coll[j].classList.remove('active');
        }
        
        // Hide all content sections
        const allContent = document.getElementsByClassName('content');
        for (let k = 0; k < allContent.length; k++) {
            allContent[k].classList.remove('show');
        }
        
        // Show the selected section and activate the button
        if (targetContent) {
            targetContent.classList.add('show');
            this.classList.add('active');
        }
    });
}