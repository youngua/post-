// $(document).ready(function () {

//     if ($('#post-image > img').visible(true)) {

//         // if this image is in view, show the date
//         $('#weektitle > h2').text("CHANGE");

//     } else {

//         // if this image is not in view, hide the dates
//         $('#weektitle > h2').text("BYE");
//     }

// });

$(document).ready(function () {

    $("#index, #close").click(function () {
        $("#index-content").toggle("slide", { direction: "left" }, 100);
    });

});

// $("#index").click(function () {
//     $("#index-content").toggle("slide", { direction: "left" }, 1000);
// });

// $(function () {
//     $(window).scroll(function () {

//         if ($(window).scrollTop() > $('#post-image > img').offset().top
//             && $(window).scrollTop() < $('#post-image > img').offset().top + $('#post-image > img').outerHeight(true)) {

//             $('#weektitle > h2').text('Section 1');
//         } else {
//             $('#weektitle > h2').text('Arcade Fire');
//         }
//     });
// });