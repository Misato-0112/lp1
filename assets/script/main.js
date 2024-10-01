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
  $(".tab-button").click(function () {
    // アクティブなタブのスタイルを更新
    $(".tab-button").removeClass("active");
    $(this).addClass("active");

    // 対象のタブコンテンツをフェードイン・フェードアウトで切り替え
    var target = $(this).data("target");
    $(".tab-content").fadeOut(200); // フェードアウト（200ms）
    $("#" + target).fadeIn(200); // フェードイン（200ms）
  });
});
