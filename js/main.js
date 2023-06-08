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
});
