$(document).ready(function () {
    var hamburger = $(".hamburger-menu");
    $(".hamburger-menu-button").on("click", function () {
        hamburger.toggleClass("active");
    });

    $(window).on("resize", function () {
        // console.log('resize');
        hamburger.removeClass("active");
    });
});

// タブ切り替え
document.querySelectorAll(".tab-link").forEach(function (tab) {
    tab.addEventListener("click", function (event) {
        event.preventDefault();

        document.querySelectorAll(".tab-link").forEach(function (link) {
            link.classList.remove("active");
        });

        this.classList.add("active");

        document.querySelectorAll(".tab-content").forEach(function (content) {
            content.style.display = "none";
        });

        var targetContent = document.querySelector(this.getAttribute("href"));
        if (targetContent) {
            targetContent.style.display = "block";
        }
    });
});
