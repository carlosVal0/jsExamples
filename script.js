const h1 = document.querySelector("h1")
const form = document.querySelector("#form")
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const button = document.querySelector("#btnCalcular")


form.addEventListener("submit",addInputValues)


function addInputValues(event){
    event.preventDefault()
    let result = parseInt(input1.value) + parseInt(input2.value)
    let p = document.getElementById("result")
    p.innerText = result
    
}