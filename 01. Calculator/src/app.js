function clearInput() {
    document.getElementById("input").value = "";
}

function userInput(input) {
    switch(input) {
        case "0":
            document.getElementById("input").value += 0;
            break;
        case "1":
            document.getElementById("input").value += 1;
            break;
        case "2":
            document.getElementById("input").value += 2;
            break;
        case "3":
            document.getElementById("input").value += 3;
            break;
        case "4":
            document.getElementById("input").value += 4;
            break;
        case "5":
            document.getElementById("input").value += 5;
            break;
        case "6":
            document.getElementById("input").value += 6;
            break;
        case "7":
            document.getElementById("input").value += 7;
            break;
        case "8":
            document.getElementById("input").value += 8;
            break;
        case "9":
            document.getElementById("input").value += 9;
            break;
        case "+":
            document.getElementById("input").value += "+";
            break;
        case "-":
            document.getElementById("input").value += "-";
            break;
        case "AC":
            document.getElementById("input").value = "";
            break;
    }
}

function equals() {    
    document.getElementById("input").value = eval(document.getElementById("input").value);
}