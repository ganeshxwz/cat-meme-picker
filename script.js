import { catsData } from "./data.js";

const radioEl = document.getElementById('radios-element')

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