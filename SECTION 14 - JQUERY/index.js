//addind jquery code $ = document.querySelector.
$("h1").addClass("big-title margin-500");
//adding class to h1 element

//changing text.
$("button").html("<em>Hello</em>");

//changing attributes.
$("img").attr("src", "https://avatars0.githubusercontent.com/u/70142?s=200&v=4");

//adding eventListner.
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

$("input").keypress(function(){
    $("h1").text(event.key);
})


