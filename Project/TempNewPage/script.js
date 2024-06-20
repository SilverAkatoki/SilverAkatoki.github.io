var body_container = document.getElementById("body_container");
var title_container = document.getElementById("title_container");
var head_container = document.getElementById("head_container");
var navigation_bar = document.getElementById("navigation_bar");
var last_update_date_label = document.getElementById("least_update_date");
/**设置 / 修改底栏位置*/
var fixFooterPosition = function () {
    body_container.style.minHeight = "".concat(window.innerHeight
        - title_container.offsetHeight
        - head_container.offsetHeight
        - navigation_bar.offsetHeight, "px");
};
fixFooterPosition();
window.addEventListener("resize", function () {
    fixFooterPosition(); // 
});
/* ---------------------------------- 日期处理 ---------------------------------- */
/**当前时间*/
var cur_date_obj = new Date();
/**上一次更新时间*/
var last_update_date = new Date("2024-06-20T03:24:00");
/**将 `Date` 类型变为 `"YYYY.MM.DD"` 型的字符串 */
var formatDate = function (date_obj) {
    return "".concat(date_obj.getFullYear(), ".").concat(date_obj.getMonth() + 1, ".").concat(date_obj.getDate());
};
last_update_date_label.innerHTML = formatDate(last_update_date);
