// const btn=document.querySelector("#button")
// let yazi=document.querySelector("#yazilar")
// yazigizlidir=false;
// yazi.style.color="red"
// btn.onclick=()=>{
//     if (yazigizlidir) {
//         btn.innerText=("yazini gizle")
//         yazi.style.display="block"
//     } else {
//         btn.innerText=("YAZINI GOSTER")
//         yazi.style.display="none"
        
// }
// yazigizlidir=!yazigizlidir
// }


// const buttons=document.querySelectorAll("#bn")
// const text=document.querySelectorAll("#li")
// text.forEach((student)=>{
// student.style.color="red"

// // })
// /-------------------------------

const button=document.querySelector("#button")
const prompt=document.querySelector(".page")
const okbutton=document.querySelectorAll("#okbutton")
const cancelbutton=document.querySelectorAll("#cancelbutton")
button.onclick=()=>{
    prompt.classList.toggle("show")
    
    okbutton.forEach((b) => {
   
        b.onclick=()=>{
      console.log(  b.innerHTML);
    }    
    });
    cancelbutton.forEach((but)=>{

        but.onclick=()=>{
    console.log(but.innerHTML);
}
    })
    
    
   
} 
    
    





// prompt("salam")
