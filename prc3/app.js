// 3. yaddas oyunu
// 10 dene kart olacaq
// kartin icerisinde reqemler olacaq bu reqemler arraydan gelecek
// karta klik etdikde kartin icerisindeki yazi gorsensin
// iki kartin deyerleri bir birine beraberdirse ekranda xal yazilmalidir ve xalin uzerine 10 elave edilmelidir
// butun kartlar acilandan sonra oyun bitdi yazilacaq ve son xal qeyd edilecek

// const box=document.querySelector(".box")


const box1=document.querySelector(".box1");
const box2=document.querySelector(".box2");
const box3=document.querySelector(".box3");
const box4=document.querySelector(".box4");
const box5=document.querySelector(".box5");
const box6=document.querySelector(".box6");
const box7=document.querySelector(".box7");
const box8=document.querySelector(".box8");
const box9=document.querySelector(".box9");
const box10=document.querySelector(".box10");


const arr=[10,20,9,12,5]



box1.onclick=()=>{
    box1.append(arr[0])
    // box1.style.transform="rotate(180deg)"
}
box2.onclick=()=>{box2.append(arr[1])}
box3.onclick=()=>{box3.append(arr[2])}
box4.onclick=()=>{box4.append(arr[3])}
box5.onclick=()=>{box5.append(arr[4])}
box6.onclick=()=>{box6.append(arr[2])}
box7.onclick=()=>{box7.append(arr[4])}
box8.onclick=()=>{box8.append(arr[3])}
box9.onclick=()=>{box9.append(arr[1])}
box10.onclick=()=>{box10.append(arr[0])}



// box1.onclick=()=>{
//     box1.append(arr[0])
// if (box1.append(arr[0])===box10.append(arr[0])) {
    
    
// }
// }




// const finish=()=>{
//     if (box1.append(arr[0])===box10.append(arr[0])) {
      
//         box1.append(arr[0]+10)
        
//     }
// }
// finish();





// box.forEach(()=>{
    // })
    // box.onclick=()=>{
    //     box1.append(arr[0]),box6.append(arr[1])
    //     box2.append(arr[1]),box7.append(arr[4])
    //     box3.append(arr[2]),box8.append(arr[3])
    //     box4.append(arr[3]),box9.append(arr[2])
    //     box5.append(arr[4]),box10.append(arr[0])
    // }