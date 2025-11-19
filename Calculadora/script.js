function insert(num){
    document.getElementById("display").value += num;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function deleteLast(){
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.substring(0, current.length - 1);
}

function calculate(){
    let expression = document.getElementById("display").value;

    try{
        document.getElementById("display").value = eval(expression);
    } catch (e){
        document.getElementById("display").value = "Erro";
    }
}

// teclado
document.addEventListener("keydown", function(event){

    const key = event.key;

    if (!isNaN(key)){
        insert(key);
    }

    if (key === "+" || key === "-" || key === "*" || key === "/"){
        insert(key);
    }

    if (key === "."){
        insert(".");
    }

    if (key === "Enter"){
        calculate();
    }

    if (key === "Backspace"){
        deleteLast();
    }

    if ( key === "Escape"){
        clearDisplay();
    }
});