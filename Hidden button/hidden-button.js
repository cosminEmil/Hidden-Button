let enterButton = document.getElementById("enterBtn");
let textBox = document.getElementById("textBox");

enterButton.addEventListener('click', function() {
    enterButton.style.display = 'none';
    textBox.style.display = 'none';
    
});

function generateButtons() {
    let noButtons = document.getElementById("textBox").value;
    let buttonContainer = document.getElementById("generateButtons");
    for (let i = 0; i < noButtons; ++i) {
        let newButton = document.createElement("button");
        newButton.innerText = "Button " + (i + 1);
        buttonContainer.appendChild(newButton);
    }
}

let buttons = document.querySelectorAll('.buttonContainer');
let randomIndex = Math.floor(Math.random() * buttons.length);
let messages = ["Winner", "Loser"];

let randomButton = buttons[randomIndex];
randomButton.addEventListener('click', function() {
  let randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
});