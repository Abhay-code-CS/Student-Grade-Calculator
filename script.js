
const form = document.getElementById("gradeForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();

    const english = Number(document.getElementById("english").value);
    const maths = Number(document.getElementById("maths").value);
    const physics = Number(document.getElementById("physics").value);
    const chemistry = Number(document.getElementById("chemistry").value);
    const computer = Number(document.getElementById("computer").value);

    const inputs = ["english", "maths", "physics", "chemistry", "computer"];

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    for (const id of inputs) {
        const input = document.getElementById(id);
        const value = input.value.trim();
        const mark = Number(value);

        if (value === "" || !Number.isInteger(mark) || mark < 0 || mark > 100) {
            alert("Enter valid whole-number marks from 0 to 100 in every subject.");
            input.focus();
            return;
        }
    }

    const total = english + maths + physics + chemistry + computer;
    const percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("total").textContent = total;
    document.getElementById("percentage").textContent = percentage + "%";
    document.getElementById("grade").textContent = grade;

    console.log("Student:", name);
    console.log("Total:", total);
    console.log("Percentage:", percentage + "%");
    console.log("Grade:", grade);
});
