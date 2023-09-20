const content = document.querySelecctor(`#fill-to-do-list`)
const taskList = document.querySelector(".task-list")
let todoList = JSON.parse(localStorage.getItem("value")) || []
let countInput

const addTask = () => {
    if(content.value === '') alert("Please fill the input box!")
    else{
        let wrapper = document.createElement("div")
        wrapper.setAttribute("class", "test")
        taskList.appendChild(wrapper)
    }
}