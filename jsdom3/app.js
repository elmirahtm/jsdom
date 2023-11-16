const btn=document.querySelectorAll("#btn")
const circle1=document.querySelector("#circle1")
const circle2=document.querySelector("#circle2")
const circle3=document.querySelector("#circle3")
const circle4=document.querySelector("#circle4")

circle1.onclick=()=>{
    document.body.style.backgroundColor="blue"
}
circle2.onclick=()=>{
    document.body.style.backgroundColor="red"
}
circle3.onclick=()=>{
    document.body.style.backgroundColor="green"
}
circle4.onclick=()=>{
    document.body.style.backgroundColor="black"
}