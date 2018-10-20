// Establishing connectivity in console
const mainConnected = () => {
    console.log("Main is connected")
};
mainConnected();

// Variables for container
let element = document.getElementById("hyde");
let elementProperty = element.getBoundingClientRect();

var ul = document.getElementById("list");
var li = document.createElement("li");

// Making array to contain behavial history
const history = [];
// Handle events in history
const storeEvent = (pX,pY) => {
    history.push(pX);
    history.push(pY);
    console.log(history);
};
const listEvent = () => {
    history.forEach(function(history){
        console.log(history);
        //
        li.appendChild(document.createTextNode(history));
        ul.appendChild(li);
    }
    );
    console.log("list complete");
};

// Get measurements and  print them in element
const dimmentions = () => {
    
    console.log(element);
    console.log(element.clientWidth);
    console.log(element.clientHeight);
    console.log(elementProperty);
    console.log(elementProperty.x);
    console.log(elementProperty.y);
    element.innerHTML=`This box measures ${element.clientWidth} pixels by ${element.clientHeight} pixels`;
};
dimmentions();

element.addEventListener("click", function(event) {
    
    let pX = event.pageX - elementProperty.x;
    let pY = event.pageY - elementProperty.y;
    console.log(pX);
    console.log(pY);
    storeEvent(pX,pY);
    listEvent();
}
);

//edit