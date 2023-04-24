function displayDate()
{
    let date = new Date();
    //console.log(date)
    let dt = date.toString().split(" ")
    //console.log(dt)
    document.getElementById("date").innerHTML = dt[1] +" "+dt[2]+" "+ dt[3]
}
window.onload=function()
{
    displayDate();
    displayItem();
}


$("#addTodo").click(function () {
    const inputTodo =$("input").val();
    $("#todolist").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val();
});

$(document).on("change", "input[type=checkbox]", function(){
    if($(this).is(":checked")){
        $(this).parent().css("text-decoration", "line-through");
        $(this).parent().css("color","#ccc");
    } else{
        $(this).parent().css("text-decoration", "none");
        $(this).parent().css("color","#000");
    }
});