const appDiv = document.getElementById("app");

const button = document.getElementById("submitButton");
const myInput = document.getElementById("todoInput");
const myList = document.getElementById("todoList");



button.addEventListener("click", function () {
    const userInput = myInput.value;
    const item = "<li ><span contenteditable>" + userInput + "</span><button class='removeBtn'>remove</button><button class='doneBtn'>done</button></li>"
    myList.innerHTML += item
    myInput.value = "";
    const removeBtnList = document.querySelectorAll("li .removeBtn")

    // const aa = document.createAttribute("contentEditable")



    removeBtnList.forEach(removeButton => {
        removeButton.addEventListener("click", function () {
            removeButton.parentElement.remove()

        })


    })

    const doneBtnList = document.querySelectorAll("li .doneBtn")

    // const aa = document.createAttribute("contentEditable")



    doneBtnList.forEach(doneButton => {
        doneButton.addEventListener("click", function () {
            doneButton.parentElement.firstElementChild.style.textDecoration="line-through"
        })


    })
})
