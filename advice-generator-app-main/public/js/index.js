const container = document.querySelector(".container");
const idEntry = document.getElementById("id-entry");
const adviceEntry = document.getElementById("advice-entry");
async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();
    idEntry.innerText = `ADVICE #${advice.slip.id}`;
    adviceEntry.innerText = `"${advice.slip.advice}"`;
}
fetchAdvice();
document.querySelector(".btn-container").addEventListener('click', fetchAdvice);
