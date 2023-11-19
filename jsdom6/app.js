
// Rəqəmlər massivi verilmişdir. Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:
// - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.

let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
let a=2
const task=numbers.filter((numbers)=>numbers<0)
console.log(task);



const task2=numbers.filter((numbers)=>numbers>0)
console.log(task2);

const newmassiv2=()=>{
    console.log(task2*2);
}
newmassiv2();


// const newmassiv=()=>{
//     if (numbers<0) {
//        console.log(task>0);
//     } else {
//         console.log("yalnisdir");
//     }
// }
// newmassiv();
