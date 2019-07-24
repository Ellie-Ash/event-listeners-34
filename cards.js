const getRedBox = document.getElementById("unique1")
const getBlueBox = document.getElementById("unique2")
const getInputBox = document.getElementById("message")

getInputBox.addEventListener("keyup", () => {
    getBlueBox.textContent = event.target.value
    getRedBox.textContent = event.target.value
})

const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
   const valueOfWindowScroll = window.scrollY / 3;
    audrey.style.width = `${valueOfWindowScroll}px`

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   const nextValueOfWindowScroll = window.scrollY / 4;
   audrey.style.height = `${nextValueOfWindowScroll}px`

})

document.querySelector("#activate-flight").addEventListener("click", () => {
    const flight = document.getElementById("flight")
    flight.classList.toggle("enabled")
})
document.querySelector("#activate-mindreading").addEventListener("click", () => {
    const mindreading = document.getElementById("mindreading")
    mindreading.classList.toggle("enabled")
})
document.querySelector("#activate-xray").addEventListener("click", () => {
    const xray = document.getElementById("xray")
    xray.classList.toggle("enabled")
})

document.querySelector("#activate-all").addEventListener("click", () => {
    const allPowers = document.querySelectorAll(".power")
    allPowers.forEach(power => {
        power.classList.replace("disabled", "enabled")
    });
})

document.querySelector("#deactivate-all").addEventListener("click", () => {
    const noPowers = document.querySelectorAll(".power")
    noPowers.forEach(power => {
        power.classList.replace("enabled", "disabled")
    });
})