const img=document.querySelector("img")
const qazver=document.querySelector("#qazver")
const dayan=document.querySelector("#dayan")


// sadece bir sey ede bilmedimki refresh vermeden duymeler yeniden islemir
//  ilk cehd-de isleyir amma tekrara basdiqda islemir gerek yenilensin
// dusundumki forEache salim ondada islemedi

qazver.onclick=()=>{
    img.classList.add("red");
}


dayan.onclick=()=>{
    img.classList.add("stop")
}
// qazver.addEventListener("click",()=>{

// })