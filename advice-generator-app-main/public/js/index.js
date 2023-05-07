const container = document.querySelector(".container");
async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();
    container.innerHTML = `
       <p>
            Advice #${advice.slip.id} \n "${advice.slip.advice}"
       </p> 
    `;
}
getAdvice();
