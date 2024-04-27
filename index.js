const displayinput = document.getElementById("displayinput")
const submitBtn = document.getElementById("submitBtn")
const textResult =  document.getElementById("textResult")
let age = 18
let message

submitBtn.onclick = function(){
    
    age = displayinput.value
    age = Number(age)

    message = age >= 18 ? ("You are an Adult") : ("You are a Minor")  
   
    textResult.textContent = message

 
}
