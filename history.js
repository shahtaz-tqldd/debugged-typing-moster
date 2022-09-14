const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    const speed = Math.floor((test.questionText.split(' ').length / test.timeTaken)*60);

    newRow.innerHTML = `
      <h3>${test.questionText}</h3>
      <p>You took: <span class="bold ms-1">${test.timeTaken}</span> seconds</p>
      <p>You made: <span class="bold red ms-1">${test.errorCount}</span> mistakes</p>
      <p>Typing Speed: <span class="bold green ms-1">${speed}</span> words per minute</p>
  `;

    histories.appendChild(newRow);
  });
}
