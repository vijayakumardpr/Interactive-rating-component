const button = document.querySelector(".submit")
const rating = document.querySelectorAll(".rating-container .circle")
const main = document.querySelector("main")

let rated = ""

rating.forEach((rate) => {
  rate.addEventListener("click", () => {
    rated = rate.innerText
  })
})

button.addEventListener("click", () => {
  rated === ""
    ? alert("Please choose rating 1-5")
    : (main.innerHTML = `
    <div class="feedback-container">
        <img  class="feedback-img" src="./img/illustration-thank-you.svg"/>
        <div class="feedback-rated">You selected ${rated} out of 5</div>
        <h3> Thank you!</h3>
        <p>We appreciate you taking the time to give a rating.
           if you ever need more support, don't hesitate to 
                        get in touch!</p>
      </div>
  `)
})
