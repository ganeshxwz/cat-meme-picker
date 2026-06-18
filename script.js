import { catsData } from "./data.js";

const radioEl = document.getElementById('radios-element')
const getImgBtn = document.getElementById('get-img-btn')
const checkBox = document.getElementById('checkbox')


//  continue from here 
// const isGif = checkBox.checked

// getImgBtn.addEventListener('click', getcatimages)

// function getcatimages(){

// }



radioEl.addEventListener("change", gethighlighted)

function gethighlighted(e){
  const radios =  document.getElementsByClassName("radios-div")
    for (let radio of radios){
        radio.classList.remove("highlighted")
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlighted")

}





function getCatsEmotionArray(cats){

    let emotionArray = []
    for (let cat of cats ){
        for (let emotion of cat.emotionTags){
            if(!emotionArray.includes(emotion)){
            emotionArray.push(emotion)}
        }
    }
    return emotionArray
}


function renderEmotionArray(){
   let radiohtml =  ``
   const emotions = getCatsEmotionArray(catsData)
    for (let emotion of emotions){
        radiohtml += `
        <div class="radios-div">
        <label for="${emotion}">${emotion}</label>
        <input type="radio"
         id="${emotion}"
         value="${emotion}"
         name="radio" >
         </div>`
    }
    radioEl.innerHTML = radiohtml
}

renderEmotionArray()

console.log(getCatsEmotionArray(catsData))