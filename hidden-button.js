function WorL(currentButton, randomIndex) {
        if (randomIndex == currentButton) {
            alert("Winner");
        } else {
            alert("Loser");
        }
    }

function generateButtons() {
    let buttonsNr = document.getElementById("text_box").value;
    let randomIndex = Math.floor(Math.random() * buttonsNr);
    let btnContainer = document.getElementById("buttons");

    for (let currentButton = 0; currentButton < buttonsNr; ++currentButton) {
        let newButton = document.createElement("button");
        newButton.onclick = function() {
            WorL(currentButton, randomIndex);
        }
        newButton.innerText = "Click me";
        btnContainer.appendChild(newButton);
    }
}
