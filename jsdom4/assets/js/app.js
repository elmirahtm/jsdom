// const button=document.querySelector("#btn")
// const div=document.querySelector("#divs");
// console.log(div.getAttribute("title"));
// console.log(div.hasAttribute("title"));
// console.log(div.removeAttribute("title"));
// // console.log(div.setAttribute("title"));

// button.onclick=()=>{
//     div.removeAttribute("title")
// }


// button.onclick=()=>{
//     div.classList.add("black")
//     // div.classList.remove("black")
// }


// button.onclick=()=>{
//     if (div.classList.contains("red")) {
//         div.classList.remove("red")
//     }
//     else{
//         div.classList.add("red")
//     }
// }

// home task/-----------------------/
const todobutton=document.querySelector("#todobutton");
const todoinput=document.querySelector("#todoinput");
const todocontainer=document.querySelector("#todocontainer");

todobutton.onclick=()=>{
    const li=document.createElement("li");
    const editbtn=document.createElement("button")
    const deletbtn=document.createElement("button")
    const span=document.createElement("span")
    todocontainer.appendChild(li)
    span.innerText=todoinput.value
    li.classList.add("liclass");
    editbtn.innerText="🖊️"
    deletbtn.innerText="❌"
   li.append(span,editbtn,deletbtn)

deletbtn.onclick=()=>{
    
todocontainer.removeChild(deletbtn.parentElement)
}

editbtn.onclick=()=>{
    const value=editbtn.previousElementSibling.innerText
  todoinput.value=value
  editbtn.previousElementSibling.innerText=todoinput.value
// todocontainer.add(editbtn.previousElementSibling.innerText)
}

    todoinput.value=" ";
    todoinput.focus();
    // // console.log(todoinput.value);
    // todocontainer.appendChild(li)
    // todocontainer.prepend(li);
}