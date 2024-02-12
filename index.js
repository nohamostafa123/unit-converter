/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl1 = document.getElementById("length-el1")
let lengthEl2 = document.getElementById("length-el2")
let lengthEl3 = document.getElementById("length-el3")

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl1.textContent = `${baseValue} meters = ${Number(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${Number(baseValue / meterToFeet).toFixed(3)} meters`
    
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl2.textContent = `${baseValue} liters = ${Number(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${Number(baseValue / literToGallon).toFixed(3)} liters` 
    
})

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl3.textContent = `${baseValue} kilograms = ${Number(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${Number(baseValue / kiloToPound).toFixed(3)} kilograms`
    
})