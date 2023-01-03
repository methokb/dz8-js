let baseTode = [
    {
        id:1, text: "i wiil go to piano", isDone: false, isImportant: false, isChange: false
    },
    {
        id:2, text: "i go work", isDone: false, isImportant: false, isChange: false
    },
    {
        id:3, text: "i fork go to", isDone: false, isImportant: false, isChange: false
    }
]



let list = document.querySelector(".content_list")
let addInput = document.querySelector(".form_input")
let addTask = document.querySelector(".form_btn")
let form = document.querySelector(".form")

const addDataForlist = () => {
    list.innerHTML = ""
    baseTode.forEach((item) => {
        list.innerHTML += `
        <li class="content_list_item">${item.text}</li>
        `
    })
}
addDataForlist()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    baseTode = [...baseTode, {
        id: baseTode.length ? baseTode.at(-1).id + 1: 1,
        text: addInput.value,
        isDone: false,
        isImportant: false,
        isChange: false
    }]

    addInput.value = ""
    addDataForlist()
    


})


// var User = {login: "user@gmail.com", password : "****" }
// console.log(typeof User);




const Delet = document.querySelector(".content_btn");
function removFun(a) {
    const remove = a.currentTarget;
    remove.parentElement.remove();
}

Delet.forEach((Delet) => Delet.addEventListener('click', removFun));
Delet();