var togglButton = document.getElementById("toggle-Skills");
var Skills = document.getElementById("Skills");
togglButton.addEventListener("Click", function () {
    if (Skills.style.display === "none") {
        Skills.style.display = "block";
    }
    else {
        Skills.style.display = "none";
    }
});
