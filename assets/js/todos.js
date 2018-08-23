var listItemParent = document.querySelector("ul");
listItemParent.addEventListener("click", strikeThroughText, false);

function strikeThroughText(e) {
    if ((e.target !== e.currentTarget) && (/todoItem/.test(e.target.className)) ) {
        var clickedItem = e.target;
        clickedItem.classList.toggle("strikethrough");
    }
    e.stopPropagation();
}

$("ul").on("click", ".deleteButton", function fadeOutAndRemove(e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13) {
        var newTodoText = $(this).val();
        $("ul").append("<li class='todoItem'>" + newTodoText + "<span class='deleteButton'><i class='fas fa-trash'></i></span>" + "</li>")
        $(this).val("");
    }
});

$("#toggleInputBox").click(function(){
    $("input[type='text']").fadeToggle();
    $(this).toggleClass("fa-plus fa-minus")
});