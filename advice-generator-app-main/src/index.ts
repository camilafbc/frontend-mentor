const idEntry = document.getElementById("id-entry")
const adviceEntry = document.getElementById("advice-entry")

interface Slip{
    slip: adviceResponse
}

interface adviceResponse {
    id: number
    advice: string
}

async function fetchAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const advice: Slip = await response.json()

    idEntry.innerText = `ADVICE #${advice.slip.id}`
    adviceEntry.innerText = `"${advice.slip.advice}"`
}

fetchAdvice()

document.querySelector(".btn-container").addEventListener('click', fetchAdvice)

