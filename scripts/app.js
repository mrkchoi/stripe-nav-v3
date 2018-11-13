let listItem = document.querySelectorAll('.list__item');

listItem.forEach(box => {
    box.setAttribute('draggable','true');

    box.addEventListener('dragstart', dragStart, false);
    box.addEventListener('drop', dropped, false);
    box.addEventListener('dragenter', enterOver, false);
    box.addEventListener('dragover', enterOver, false);
    
});



function dragStart(e) {
    // e.preventDefault();
    console.log(this);
}
function dropped(e) {
    e.preventDefault();
}
function enterOver(e) {
    e.preventDefault();
}
