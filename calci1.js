let output = document.getElementById('inputEl');

function display(num) {
    output.value += num;
}

function Calculate() {
    try {
        output.value = eval(output.value);
    } catch (Error) {
        output.value = Error;
         
    }
}

function Clear() {
    output.value = '';

}

function del() {
    output.value = output.value.slice(0, -1);
}