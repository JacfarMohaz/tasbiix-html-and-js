const incrementButtom = document.querySelector("#increment")
const resetButtom = document.querySelector("#reset")
const decrementButtom = document.querySelector("#decrement")
const value = document.querySelector("#value")
let startValue = 0

incrementButtom.addEventListener("click", () => {
    startValue ++;    
    value.innerHTML = startValue
    if(startValue == 10){
        value.style.color = "red"
    }else{
        value.style.color = "black"
    }
})

resetButtom.addEventListener("click", () => {
    startValue = 0;
    value.innerHTML = startValue
})
decrementButtom.addEventListener("click", () => {
    if(startValue > 0){
        startValue --;
        value.innerHTML = startValue
    }
    if(startValue == 10){
        value.style.color = "red"
    }else{
        value.style.color = "black"
    }
})
