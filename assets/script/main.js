$(document).ready(function () {
    // ハンバーガーメニューのトグル
    $(".hamburger-menu__button").on("click", function () {
        $(".hamburger-menu").slideToggle(300);
    });

    $(window).on("resize", function () {
        if ($(window).width() > 767) {
            $(".hamburger-menu").hide();
        }
    });

    $(".hamburger-menu a").on("click", function () {
        $(".hamburger-menu").hide();
    });

    // タブ切り替え
    document.querySelectorAll(".tab-link").forEach(function (tab) {
        tab.addEventListener("click", function (event) {
            event.preventDefault(); // デフォルトのリンク動作を防ぐ

            // すべてのタブリンクからactiveクラスを削除
            document.querySelectorAll(".tab-link").forEach(function (link) {
                link.classList.remove("active");
            });

            // クリックされたタブリンクにactiveクラスを追加
            this.classList.add("active");

            // すべてのタブコンテンツを非表示
            document.querySelectorAll(".tab-content").forEach(function (content) {
                content.style.display = "none";
            });

            // 対象のタブコンテンツを表示
            var targetContent = document.querySelector(this.getAttribute("href"));
            if (targetContent) {
                targetContent.style.display = "block";
            }
        });
    });
});
