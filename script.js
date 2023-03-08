const slidePage = document.querySelector(".slide-page");
const firtNextBtn = document.querySelector(".next")//Próx 2

const prevSecBtn = document.querySelector(".prev-1") //Antes 1
const nextSecBtn = document.querySelector(".next-1") //Próx 3

const prevThirdBtn = document.querySelector(".prev-2") //Antes 2
const nextThirdBtn = document.querySelector(".next-2") //Próx 4

const prevFourthBtn = document.querySelector(".prev-3") //Antes 3
const submitBtn = document.querySelector(".submit") //Enviar

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


function page1() {
 
  const firstName = document.querySelector(".firstName").value
  const lastName = document.querySelector(".lastName").value
 
  if(firstName != "" && lastName != "" ) {
    document.querySelector(".firstNext").disabled = false
    return
  }
  document.querySelector(".firstNext").disabled = true
}


function page2() {

  const email = document.querySelector(".email").value
  const phoneNumber = document.querySelector(".phone-number").value

  if(email != '' && phoneNumber != "") {
    document.querySelector(".next-1").disabled = false
    return
  }
  document.querySelector(".next-1").disabled = true
}

function page3() {
  
    const nasc = document.querySelector(".nasc").value

  
    if(nasc != "") {
      document.querySelector(".next-2").disabled = false
      return
    }
    document.querySelector(".next-2").disabled = true

}

function page4() {
  
  const username = document.querySelector(".username").value
  const password = document.querySelector(".password").value


  if(username != "" && password != "") {
    document.querySelector(".submit").disabled = false
    return
  }
  document.querySelector(".submit").disabled = true

}