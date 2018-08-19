var listItemParent = document.querySelector("ul");
listItemParent.addEventListener("click", strikeThroughText, false);

function strikeThroughText(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target;
        clickedItem.classList.toggle("strikethrough");
    }
    e.stopPropagation();
}