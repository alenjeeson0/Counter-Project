const increasebtn = document.getElementById("increase-btn");
const decreasebtn = document.getElementById("decrease-btn");
const resetbtn = document.getElementById("reset-btn");
const countlabel = document.getElementById("count-label");

let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}