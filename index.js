function getText() {
    const saveText = document.getElementsByTagName('h1')[0].innerText

    document.getElementsByTagName('p')[0].innerText = saveText
}

//POP UP
let demos = document.getElementById("demos");
demos.onclick = showMessage;

function showMessage() {
    alert("Hello, World!");
}

//Untuk mendapatkan text dalam kolom input text
function getInput() {
    const valueInput = document.getElementsByTagName('input')[0].value

    document.getElementsByTagName('p')[1].innerText = valueInput
}

//Hello World memakai element.innerHTML
let demo = document.getElementById("demo");

console.log(demo.innerHTML); // Output: Hello, World!

// Ubah konten <p id="demo"> menjadi Hello, Dunia!
demo.innerHTML = "Hello, Dunia!";

console.log(demo.innerHTML); // Output: Hello, Dunia!