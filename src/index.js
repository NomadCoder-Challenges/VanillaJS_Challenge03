const rangeInput = document.querySelector("#set-range input");
const guessNumInput = document.querySelector("#guess-num input");
const playButton = document.querySelector("#guess-num button");
const showNumber = document.querySelector("#showNumber");
const showResult = document.querySelector("#showResult");

function playGame(evt) {
  evt.preventDefault();
  const range = parseInt(rangeInput.value, 10);
  const userNumber = parseInt(guessNumInput.value, 10);
  const machineNumber = Math.floor(Math.random() * (range + 1));

  if (range < 0) {
    // evt.preventDefault();
    alert("only POSITIVE number!");
    showNumber.classList.add("hidden");
    showResult.classList.add("hidden");
  } else {
    showNumber.classList.remove("hidden");
    showNumber.innerText = `You chose: ${userNumber}, the machine chose: ${machineNumber}.`;
    showResult.classList.remove("hidden");
    if (userNumber === machineNumber) {
      showResult.innerText = "You won!";
    } else {
      showResult.innerText = "You lost!";
    }
  }
}

playButton.addEventListener("click", playGame);

/*

(V) 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
(V) 범위에는 음수가 포함될 수 없습니다.
(V) 실시간으로 범위 값을 업데이트해야 합니다.
(V) 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
(V) 유저에게 게임의 승패를 알려야 합니다.

*/
