const x = document.querySelector("#output");

const word = `<h1 class="text-2xl text-purple-800">Hello World</h1>`;

x.innerHTML = word;

function getInputValue() {
    let input = document.getElementById("name").value;
    alert("Hello " + input);
    document.getElementById("name").value = "";
}
