
// toggles the index slide out nav. 
$("#index, #close").click(function () {
    $("#index-content").toggle("slide", { direction: "left" }, 100);
});

// don't scroll the page when cover page is visible
$(".cover-page:visible").is(function () {
    $('body').css('overflow', 'hidden');
});

// open about modal
$("#about").click('shown', function () {
    $("#about-content").toggle();
    $('body').css('overflow', 'hidden');
});

// close about modal
$("#close-about").click('shown', function () {
    $("#about-content").toggle();
    $('body').css('overflow', 'auto');
});

// when you hover over single template Week Title & Date, arrow w animate
$(".post-title").hover(function () {
    $("#left-arrow").css("animation-name", "bounce-left");
    $("#right-arrow").css("animation-name", "bounce-right");
}, function () {
    $("#left-arrow").css("animation-name", "none");
    $("#right-arrow").css("animation-name", "none");
}
);