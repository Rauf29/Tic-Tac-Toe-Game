let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetGameBtn = document.querySelector("#reset-btn");
let player1 = "X";
let player2 = "O";
let turnO = true;
// winning combinations
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = player1;
            turnO = false;
        } else {
            box.innerText = player2;
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    })
})

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWin = () => {
    for (let pattern of winPatterns) {
        let position1Val = boxes[pattern[0]].innerText;
        let position2Val = boxes[pattern[1]].innerText;
        let position3Val = boxes[pattern[2]].innerText;
        if (position1Val != "" && position2Val != "" && position3Val != "") {
            if (position1Val == position2Val && position2Val == position3Val) {
                console.log("win");
                showWinner(position1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetGameBtn.addEventListener("click", resetGame);