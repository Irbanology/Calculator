// var inp = document.getElementById('inputnode').value;

// function dbao(e) {
//     console.log(e);
//     document.getElementById('inputnode').value += e;
// }
// function ac() {
//     document.getElementById('inputnode').value = "";

// } 
// function del() {
//     var currentValue = document.getElementById('inputnode').value;
//     document.getElementById('inputnode').value = currentValue.slice(0, -1);
// }

// function equal(){
//     var nn = document.getElementById('inputnode').value;
//     var mn = eval(nn.value);
//     document.getElementById('inputnode').value = mn

// }



function dbao(e) {
    console.log(e);
    document.getElementById('inputnode').value += e;
}

function ac() {
    document.getElementById('inputnode').value = "";
}

function del() {
    var currentValue = document.getElementById('inputnode').value;
    document.getElementById('inputnode').value = currentValue.slice(0, -1);
}

function equal() {
    var nn = document.getElementById('inputnode').value;
    var mn = eval(nn);
    document.getElementById('inputnode').value = mn;
}
