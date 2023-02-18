function addList(){
    //get the input text
    var ToDo = document.getElementById("input-text").value;
    
    var list = document.createElement("li");
    list.className = "to-list"

    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = "CheckBox";
    input.name = "name";
    input.className = 'CheckBox'


    var textNode = document.createTextNode(ToDo);
    var InputNode = document.createTextNode(input);

    list.appendChild(input);
    document.getElementById("list-container").appendChild(list);

    list.appendChild(textNode);
    document.getElementById("list-container").appendChild(list);
}

function remove() {

    var list = document.getElementsByTagName("li");
    var checkbox = document.getElementsByClassName("CheckBox");
    var check;
    var List;

    
    for (var i = 0; i < list.length; i++) {
        check = checkbox[i];
        List = list[i];

        if (check.checked == true) {
            check.parentNode.removeChild(check);
            List.parentNode.removeChild(List);
        }
    }
}
