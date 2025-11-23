$("#hamburger-btn").on("click", function () {
    if ($("#hamburger-menu").hasClass("hidden")) {
        $("#hamburger-menu").removeClass("hidden");
    }
    else {
        $("#hamburger-menu").addClass("hidden");
    }
});
