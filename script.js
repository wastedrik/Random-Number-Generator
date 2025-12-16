document.getElementById("rollButton").onclick = function() {
  document.getElementById("number").textContent = String(Math.floor(Math.random() * 100) + 1);
}

document.getElementById("resetButton").onclick = function() {
  document.getElementById("number").textContent = "0";
}