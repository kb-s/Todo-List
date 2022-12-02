const todo_list = document.getElementsByClassName("content-sec")[0];
const addBtn = document.getElementById("add-btn");
const addBox = document.getElementById("add-box");
let doneBtnToggle = false;

addBtn.addEventListener("click", () => {

    if (addBox.value.length == 0) {
        alert("please enter something!!!");
        return;
    }
    const item = document.createElement("div");
    item.className = "items";
    item.style.display = "flex";
    item.style.gap = "1rem";
    item.height = "auto";
    item.alignItems = "center";

    const textDiv = document.createElement("div");

    const item_val = document.createElement("p");
    item_val.innerText = addBox.value;

    textDiv.appendChild(item_val);
    textDiv.style.padding = "0";
    textDiv.style.maxWidth = "80%";
    textDiv.style.display = "flex";
    textDiv.style.overflow = "scroll";
    textDiv.style.paddingTop = "1rem";
    textDiv.style.alignItems = "center";
    const icons = document.createElement("div");
    icons.className = "icons";

    const taskDoneLink = document.createElement("a");
    const taskDelLink = document.createElement("a");

    const taskDoneIcon = document.createElement("i");
    const taskDelIcon = document.createElement("i");

    taskDoneIcon.className = "fa-regular fa-circle-check";
    taskDelIcon.className = "fa-regular fa-trash-can";

    taskDoneLink.appendChild(taskDoneIcon);
    taskDelLink.appendChild(taskDelIcon);

    item.appendChild(textDiv);

    icons.appendChild(taskDoneLink);
    icons.appendChild(taskDelLink);

    item.appendChild(icons);

    todo_list.appendChild(item);
    addBox.value = "";

    taskDoneLink.addEventListener("click", () => {
        if (doneBtnToggle == false) {
            item.style.backgroundColor = "#a3b18a";
            doneBtnToggle = true;
            taskDoneLink.classList.add("done-btn-ani-type1");

            taskDelLink.style.transition = "color 0.3s ease-in";
            taskDelLink.style.color = "white";

            item.style.color = "white";
            item.style.transition = "color 0.2s ease-in";

            setTimeout(() => {
                taskDoneLink.classList.remove("done-btn-ani-type1");
                taskDoneLink.style.color = "white";
            }, 500);
        }
        else {
            item.style.backgroundColor = "#f8ad9d";
            doneBtnToggle = false;
            taskDoneLink.classList.add("done-btn-ani-type2");
            taskDelLink.style.color = "rgba(0, 0, 0, 0.629)";
            taskDelLink.style.transition = "color 0.3s ease-in";

            item.style.color = "black";
            item.style.transition = "color .2s ease-in";

            setTimeout(() => {
                taskDoneLink.classList.remove("done-btn-ani-type2");
                taskDelLink.style.color = "rgba(0, 0, 0, 0.629)";
            }, 500);
        }
    })
    taskDelLink.addEventListener("click",()=>{
        todo_list.removeChild(item);
    })
})

addBtn.addEventListener("click",()=>{
    addBtn.classList.add("btn-ani");
    setTimeout(() => {
        addBtn.classList.remove("btn-ani");
    }, 500);
})