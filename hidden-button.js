function generateButtons() {
    let buttonsNr = document.getElementById("text_box").value;
    let randomIndex = Math.floor(Math.random() * buttonsNr);
    let btnContainer = document.getElementById("buttons");

    for (let i = 0; i < buttonsNr; ++i) {
        let newButton = document.createElement("button");
        newButton.onclick = function() {
            if (randomIndex == i) {
                alert("Winner");
            } else {
                alert("Loser");
            }
        }
        newButton.innerText = "Click me";
        btnContainer.appendChild(newButton);
    }
}
