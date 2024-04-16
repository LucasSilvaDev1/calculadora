function appendToInput(value) {
  document.getElementById("input").value += value;
}

function ClearInput() {
  document.getElementById("input").value = "";
}

function calculate() {
  let input = document.getElementById("input").value;
  let result = eval(input);
  document.getElementById('input').value = result;
}
