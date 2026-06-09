
document.getElementById("history").innerHTML =
    localStorage.getItem("history") || "";


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeStatus").innerText =
        "Current Theme: Dark";
}

function calculate(operation) {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;

    if (operation === "add") {
        result = num1 + num2;
    }
    else if (operation === "subtract") {
        result = num1 - num2;
    }
    else if (operation === "multiply") {
        result = num1 * num2;
    }
    else if (operation === "divide") {

        if (num2 === 0) {
            result = "Cannot divide by zero";
        } else {
            result = num1 / num2;
        }
    }

    document.getElementById("result").innerText =
        "Result: " + result;

  
    let oldHistory =
        localStorage.getItem("history") || "";

    oldHistory +=
        num1 + " " + operation + " " + num2 +
        " = " + result + "<br>";

    localStorage.setItem("history", oldHistory);

    document.getElementById("history").innerHTML =
        oldHistory;
}

function toggleTheme() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        document.getElementById("themeStatus").innerText =
            "Current Theme: Dark";

        localStorage.setItem("theme", "dark");

    } else {

        document.getElementById("themeStatus").innerText =
            "Current Theme: Light";

        localStorage.setItem("theme", "light");
    }
}