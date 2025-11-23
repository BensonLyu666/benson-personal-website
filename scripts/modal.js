$("#open-modal").on("click", function () {
    $("#simple-modal").removeClass("hidden");
    $("#modal-overlay").removeClass("hidden");
    $("#close-modal").removeClass("hidden");
});

$("#close-modal").on("click", function () {
    $("#simple-modal").addClass("hidden");
    $("#modal-overlay").addClass("hidden");
    $("#close-modal").addClass("hidden");
});


$("#resume-btn").on("click", function () {

    if ($("#resume-pic").hasClass("hidden")) {

        $("#resume-pic").removeClass("hidden");

    } else {

        $("#resume-pic").addClass("hidden");
    }
});

// $("#resume-btn").on("click", function () {
//     $("#resume-pic").removeClass("hidden");
// });
