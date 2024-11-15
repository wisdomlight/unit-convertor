//when convert button is clicked 

//get the content of the input box

//convert it three times
//1. Length - from meters to feet and feet to meters
//2. Volume - Liters to gallons gallons to leters
//3. Mass -   Kilograms to pounds pounds to kilos


//Place the conversions into the appropriate parapgraphs

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



const inputBoxEl = document.getElementById("input-box")
const convertBtnEl = document.querySelector("button[type='submit']")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEll = document.getElementById("mass-el")

convertBtnEl.addEventListener("click", function(){
    let inputValue = inputBoxEl.value
    let meterToFeet = (inputValue * 3.281).toFixed(3)
    let feetToMeter = (inputValue / 3.281).toFixed(3)
    let litersToGallons = (inputValue * 0.264).toFixed(3)
    let gallonsToLiters = (inputValue / 0.264).toFixed(3)
    let kilosToPounds = (inputValue * 2.204).toFixed(3)
    let poundsToKilos = (inputValue / 2.204).toFixed(3)

    lengthEl.innerHTML = `<p>${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${feetToMeter}</p>`
    volumeEl.innerHTML = `<p>${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters</p>`
    massEll.innerHTML =  `<p>${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos</p>`
})
console.log("mission complete")