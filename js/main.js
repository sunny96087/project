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

// news_button 切換區域內容

$(document).ready(function () {
  //剛進入頁面時除了第一個以外的區域隱藏
  $("news_card:not(:first)").hide();

  //點擊按鈕時動作
  $(".news_item").click(function () {
    // 隱藏所有的 qa_group
    $(".news_card").hide();

    // 移除之前被選中的按钮的類名
    $(".news_item").removeClass("focus");

    // 取得索引值
    let index = $(this).index();

    // 顯示qa_group
    $(".news_card").eq(index).show();

    // 添加被選中的按钮的類名
    $(this).addClass("focus");
  });
});

// news_button 切換區域內容

$(document).ready(function () {
  //剛進入頁面時除了第一個以外的區域隱藏
  $("assurance_card:not(:first)").hide();

  //點擊按鈕時動作
  $(".assurance_item").click(function () {
    // 隱藏所有的 qa_group
    $(".assurance_card").hide();

    // 移除之前被選中的按钮的類名
    $(".assurance_item").removeClass("focus");

    // 取得索引值
    let index = $(this).index();

    // 顯示qa_group
    $(".assurance_card").eq(index).show();

    // 添加被選中的按钮的類名
    $(this).addClass("focus");
  });
});

// store_select 篩選相對應的 tbody
// BUG 無法篩選

// $(document).ready(function () {
//   // 监听select元素的change事件
//   $(".city, .zone").change(function () {
//     var selectedCity = $(".city").val(); // 获取所选的城市
//     var selectedZone = $(".zone").val(); // 获取所选的区域

//     // 遍历tbody中的每一行
//     $("tbody tr").each(function () {
//       var cityName = $(this).find("td:eq(3)").text();
//       // 获取当前行的城市名
//       var zoneName = $(this).find("td:eq(3)").text();
//       // 获取当前行的区域名

//       // 判断当前行是否匹配选择的城市和区域
//       if (
//         (selectedCity === "全區" || cityName.indexOf(selectedCity) !== -1) &&
//         (selectedZone === "全區" || zoneName.indexOf(selectedZone) !== -1)
//       ) {
//         $(this).show(); // 显示匹配的行
//       } else {
//         $(this).hide(); // 隐藏不匹配的行
//       }
//     });
//   });
// });

// store_search_button 篩選關鍵字
$(document).ready(function () {
  // 監聽搜索按钮的點擊事件
  $(".search_button").click(function () {
    filterTable();
  });

  // 監聽输入框的input事件
  $("#search_box").on("input", function () {
    // 不執行篩選邏輯，只在搜索按钮點擊時執行
  });

  function filterTable() {
    var selectedCity = $(".city").val(); // 獲取所選的城市
    var selectedZone = $(".zone").val(); // 獲取所選的區域
    var keyword = $("#search_box").val().toLowerCase();
    // 獲取输入框的值並轉為小寫

    // 遍歷 tbody 中的每一行
    $("tbody tr").each(function () {
      var cityName = $(this).find("td:eq(0)").text();
      // 獲取當前行的店名
      var zoneName = $(this).find("td:eq(2)").text();
      // 獲取當前行的地址

      // 判断當前行是否匹配選擇的店名、地址和關鍵字
      if (
        (selectedCity === "全區" ||
          cityName.indexOf(selectedCity.toLowerCase()) !== -1) &&
        (selectedZone === "全區" ||
          zoneName.indexOf(selectedZone.toLowerCase()) !== -1) &&
        (cityName.indexOf(keyword) !== -1 || zoneName.indexOf(keyword) !== -1)
      ) {
        $(this).show(); // 顯示匹配的行
      } else {
        $(this).hide(); // 隐藏不匹配的行
      }
    });
  }
});

// BUG 無法正常執行
// 在不同斷點下執行
// function executeCodeAtBreakpoint() {
//   var breakpointWidth = 1024; // 设置特定的断点宽度
//   var windowWidth = $(window).width(); // 获取窗口宽度

//   if (windowWidth >= breakpointWidth) {
//     // 在特定断点下执行代码
//     $(".search_button").click(function () {
//       filterTable();
//     });

//     $("#search_box").on("input", function () {
//       // 不执行筛选逻辑，只在搜索按钮点击时执行
//     });
//   } else {
//     // 在其他宽度下不执行任何操作（可以留空或添加注释）
//     // No action needed for other widths
//   }
// }

// news_page 讚+1+1功能
$(document).ready(function () {
  // 新增點擊監聽器
  $(".goob_button").click(function () {
    // 定義並找到顯示數字的元素
    var countElement = $(this).find(".count");

    // 將取得的數字轉換為整數，並將其存儲到 count 變數中
    var count = parseInt(countElement.text());

    // 將原數字加一
    countElement.text(count + 1);

    // 尋找該按鈕中的 img, 並執行以下動畫
    var imgElement = $(this).find("img");

    // 定義動畫效果
    imgElement
      .animate(
        {
          "margin-top": "-3px",
          "margin-bottom": "3px",
        },
        200
      )
      // 將圖片的上邊緣向上移動 3px，下邊緣向下移動 3px，持續 200 毫秒

      .animate(
        {
          "margin-top": "0px",
          "margin-bottom": "0px",
        },
        200
      );
    // 將圖片恢復到原始位置，持續 200 毫秒
  });
});
