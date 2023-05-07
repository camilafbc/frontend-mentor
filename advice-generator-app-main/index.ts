const container: HTMLElement = document.querySelector(".container")

interface Slip{
    slip: adviceResponse
}

interface adviceResponse {
    id: number
    advice: string
}

async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice')
    const advice: Slip = await response.json()

    container.innerHTML = `
       <p>
            Advice #${advice.slip.id} \n "${advice.slip.advice}"
       </p> 
    `
}

getAdvice()

