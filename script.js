const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();//save updated content in browser
}

// for click function
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// store task list in browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// show list whenever open browser or refresh it
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();