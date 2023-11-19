const button=document.getElementById("btn")
const img=document.getElementById("img")
button.onclick=()=>{
if (img.src.includes("bulboff")) {
    img.src=img.src.replace('bulboff','bulbon')
    img.innerText="yandir"
    document.body.style.backgroundColor="white"
}
else{
    img.src=img.src.replace('bulbon','bulboff')
    img.innerText="sondur"
    document.body.style.backgroundColor="black"
}

}










// body-e background edende jsde css de background vermeyide unutmaki yoxsa kod bir addim sonra isleyecek
// replace ise evvelce noqte qoyub adina img.src=img.src.replace edirik beraberlikle
// /---- yadinda saxla lampada ele if sertinden istifade et ve src(menbesi ile)
//  yazki onun seklini duzgun tuta bilesen, sekli deyismek ucunse normal oaraq replaceden istifade edecsen,
// serti ise muellimin yazdigindan baxdin yeni if-i