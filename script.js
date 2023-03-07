const slidePage = document.querySelector(".slide-page");
const firtNextBtn = document.querySelector(".next")

const prevSecBtn = document.querySelector(".prev-1")
const nextSecBtn = document.querySelector(".next-1")

const prevThirdBtn = document.querySelector(".prev-2")
const nextThirdBtn = document.querySelector(".next-2")

const prevFourthBtn = document.querySelector(".prev-3")
const submitBtn = document.querySelector(".submit")

const progressText = document.querySelectorAll(".step p")

const progressCheck = document.querySelectorAll(".step .check")

let max = 4
let current = 1

const bullet = document.querySelectorAll(".step .bullet")

firtNextBtn.addEventListener("click", function() {
  slidePage.style.marginLeft = "-25%"
  bullet[current - 1].classList.add("active")
  progressText[current - 1].classList.add("active")
  progressCheck[current - 1].classList.add("active")
  current += 1
})

nextSecBtn.addEventListener("click", function() {
  slidePage.style.marginLeft = "-50%"
  bullet[current - 1].classList.add("active")
  progressText[current - 1].classList.add("active")
  progressCheck[current - 1].classList.add("active")
  current += 1
})

nextThirdBtn.addEventListener("click", function() {
  slidePage.style.marginLeft = "-75%"
  bullet[current - 1].classList.add("active")
  progressText[current - 1].classList.add("active")
  progressCheck[current - 1].classList.add("active")
  current += 1
})

submitBtn.addEventListener("click", function() {
  bullet[current - 1].classList.add("active")
  progressText[current - 1].classList.add("active")
  progressCheck[current - 1].classList.add("active")
  current += 1
  setTimeout(function(){
    alert("Você teve sucesso no cadastro")
    location.reload()
  }, 100)
})



prevSecBtn.addEventListener("click", function() {
  slidePage.style.marginLeft = "0%"
  bullet[current - 2].classList.remove("active")
  progressText[current - 2].classList.remove("active")
  progressCheck[current - 2].classList.remove("active")
  current -= 1
})

prevThirdBtn.addEventListener("click", function() {
  slidePage.style.marginLeft = "-25%"
  bullet[current - 2].classList.remove("active")
  progressText[current - 2].classList.remove("active")
  progressCheck[current - 2].classList.remove("active")
  current -= 1
})
prevFourthBtn.addEventListener("click", function() {
  slidePage.style.marginLeft = "-50%"
  bullet[current - 2].classList.remove("active")
  progressText[current - 2].classList.remove("active")
  progressCheck[current - 2].classList.remove("active")
  current -= 1
})