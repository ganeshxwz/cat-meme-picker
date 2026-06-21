import { catsData } from "./data.js";

const radioEl = document.getElementById('radios-element')
const getImgBtn = document.getElementById('get-img-btn')
const gifOnly = document.getElementById('gif-only')

const modal = document.getElementById('modal')
const modalInner = document.getElementById('modal-inner')
const xBtn = document.querySelector('.x')

// additional close feature

// document.addEventListener("click",function(e){
//     if(!e.target.id === modal){
//        modal.style.display = "none"
//     }
// })

getImgBtn.addEventListener("click", renderCat)

function getMatchingCatsArray(){
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifOnly.checked
        const matchingArray = catsData.filter(function(cats){
            if(isGif){
            return  cats.emotionTags.includes(selectedEmotion) && cats.isGif
            }else {
            return cats.emotionTags.includes(selectedEmotion)}
        })
   return matchingArray

    }
}

function getSingleCat(){
    const matchingcat = getMatchingCatsArray()
    if (matchingcat.length === 1){
        return matchingcat[0]
    }else{
        let random = Math.floor(Math.random()* matchingcat.length)
       return matchingcat[random]
    }
}


function renderCat(){
    let cat = getSingleCat()
    console.log(cat)
    modal.style.display = "flex"
    modalInner.innerHTML = `<img class="inner-img" src="./images/${cat.image}" alt="${cat.alt}">`
}


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



xBtn.addEventListener("click",function close(){
    modal.style.display = "none"
})
