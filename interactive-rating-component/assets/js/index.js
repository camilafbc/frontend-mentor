const valueBtn = document.querySelectorAll("input[type='button']")
const submitBtn = document.getElementById("submit")

const content = document.querySelector(".content")
const container = document.querySelector(".container")
const valueEntry = document.querySelector(".value-entry")
let btnValue = ""

valueBtn.forEach((button) => {
    button.addEventListener('click', () => {
        btnValue = button.value
        return btnValue
    })
})

submitBtn.addEventListener('click', function(){
    if(btnValue == "") return

    container.remove()
    content.innerHTML += newContainer()
})

function newContainer(){
    return`
    <div class="second-container">
      <img src="assets/img/illustration-thank-you.svg" alt="">
      <div class="select-text">
        <p>You selected ${btnValue} out of 5</p>
      </div>
      <div class="second-container-text">
        <h3>Thank you!</h3>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </p>
      </div>
    </div>
    `
}


