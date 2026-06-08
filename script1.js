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
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        document.getElementById("themeStatus").innerText =
            "Current Theme: Dark ";
    } else {
        document.getElementById("themeStatus").innerText =
            "Current Theme: Light ";
    }
}
