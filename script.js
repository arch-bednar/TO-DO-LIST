var list = new Array();
var number = 0;

function addToList(){

    let element = document.getElementById("userInput");

    if (element.value == null || element.value == undefined || element.value.length == 0){
        return;
    }

    list.push(element.value);
    let x = document.getElementById("todo-list");
    //x.innerHTML += `<il id="${number}">${element.value}</il>`;
    x.appendChild(document.createElement("li"));
    number += 1;
    element.value = "";
    //element.reset();
}

function removeFromList(){

}

function addEvent(){

}
function removeFromList(){

}