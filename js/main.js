// header_hb 漢堡選單_顯示隱藏_旋轉動畫

$(document).ready(function () {
  $(".hb").click(function () {
    // 漢堡選單_顯示隱藏
    $(".nav_list_hb").toggleClass("nav_list_hb_toggle");

    // 漢堡選單_旋轉動畫
    $(".hb").children(".hb_ea:eq(0)").toggleClass("rotate_45");

    $(".hb").children(".hb_ea:eq(1)").toggleClass("rotate_none");

    $(".hb").children(".hb_ea:eq(2)").toggleClass("rotate_-45");
  });

  // 點擊頁面空白處
  $(document).click(function (event) {
    // 檢查漢堡選單是否展開
    if ($(".nav_list_hb").hasClass("nav_list_hb_toggle")) {
      
      // 檢查點擊事件的目標是否為漢堡選單或其子元素
      if (!$(event.target).closest(".hb, .nav_list_hb").length) {

        // 關閉漢堡選單
        $(".nav_list_hb").removeClass("nav_list_hb_toggle");

        // 重置漢堡選單旋轉動畫
        $(".hb").children(".hb_ea:eq(0)").removeClass("rotate_45");

        $(".hb").children(".hb_ea:eq(1)").removeClass("rotate_none");

        $(".hb").children(".hb_ea:eq(2)").removeClass("rotate_-45");
      }
    }
  });
});

// news slesct 切換區塊內容

$(document).ready(function () {
  // 隐藏所有區塊内容
  $(".card_none").hide();

  // 顯示初始選項的區塊內容
  $("#all").show();

  $(".news_select").change(function () {
    var selectedOption = $(this).val();

    // 隐藏所有區塊内容
    $(".card_none").hide();

    // 顯示選中的區塊内容
    $("#" + selectedOption).show();
  });

  //  assurance_card 切換區塊內容
  $(".assurance_card").change(function () {
    var selectedOption = $(this).val();

    // 隐藏所有區塊内容
    $(".card_none").hide();

    // 顯示選中的區塊内容
    $("#" + selectedOption).show();
  });
});
