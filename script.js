console.log("hello");
button = document.getElementById("sev");
input = document.getElementById("input");
console.log(input);
mode="";
reset = 0

function ins(number){
    console.log("WORKS");
    console.log(number);
    document.getElementById("input").value = document.getElementById("input").value + number;
}

function cle(){
    console.log("cleared");
    document.getElementById("input").value = " ";
}

function ad(){
    fval = document.getElementById("input").value;
    document.getElementById("input").value = ""
    mode="add";
    console.log("add");
    reset = 1
}

function min(){
    fval = document.getElementById("input").value;
    document.getElementById("input").value = ""
    mode="minus";
    console.log("minus");
    reset = -1
}

function times(){
    fval = document.getElementById("input").value;
    document.getElementById("input").value = ""
    mode="times";
    console.log("times");
    reset = 2
}

function divide(){
    fval = document.getElementById("input").value;
    document.getElementById("input").value = ""
    mode="divide";
    console.log("divide");
    reset = -2
}

function point(){
    document.getElementById("input").value = document.getElementById("input").value + "."
}

function percent(){
    document.getElementById("input").value = document.getElementById("input").value / 100
}

function sign(){
    document.getElementById("input").value = -document.getElementById("input").value
}

function eq(){
    if (mode == "add"){
        sval = document.getElementById("input").value
        document.getElementById("input").value = parseFloat(sval) + parseFloat(fval);
        if (reset == 1){
            fval = sval;
        }
        reset = 0
        console.log("addequal");
        console.log(document.getElementById("input").value)
    }
    if (mode == "minus") {
        if (reset == -1){
            sval = document.getElementById("input").value
        }
        document.getElementById("input").value = parseFloat(fval) - parseFloat(sval);

        fval = document.getElementById("input").value;

        reset = 0
        console.log("minusequal");
        console.log(document.getElementById("input").value)
    }
    if (mode == "times"){
        sval = document.getElementById("input").value
        document.getElementById("input").value = parseFloat(sval) * parseFloat(fval);
        if (reset == 2){
            fval = sval;
        }
        reset = 0
        console.log("timesequal");
        console.log(document.getElementById("input").value)
    }
    if (mode == "divide") {
        if (reset == -2){
            sval = document.getElementById("input").value
        }
        document.getElementById("input").value = parseFloat(fval) / parseFloat(sval);

        fval = document.getElementById("input").value;

        reset = 0
        console.log("divideequal");
        console.log(document.getElementById("input").value)
    }
}