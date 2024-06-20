var bodyContainer = document.getElementById("body_container");
var titleContainer = document.getElementById("title_container");
var headContainer = document.getElementById("head_container");
var navigationBar = document.getElementById("navigation_bar");
var lastUpdateDateLabel = document.getElementById("last_update_date");
var lastUpdateDateDistanceLabel = document.getElementById("last_update_date_distance");
/**设置 / 修改底栏位置*/
var fixFooterPosition = function () {
    bodyContainer.style.minHeight = "".concat(window.innerHeight
        - titleContainer.offsetHeight
        - headContainer.offsetHeight
        - navigationBar.offsetHeight, "px");
};
fixFooterPosition();
window.addEventListener("resize", function () {
    // 页面大小调整时执行
    fixFooterPosition();
});
/* ---------------------------------- 日期处理 ---------------------------------- */
/**当前时间*/
var curDate = new Date();
/**上一次更新时间*/
var lastUpdateDate = new Date("2024-06-20");
/**将 `Date` 类型变为 `"YYYY.MM.DD"` 型的字符串 */
var formatDate = function (dateObj) {
    return "".concat(dateObj.getFullYear(), ".").concat(dateObj.getMonth() + 1, ".").concat(dateObj.getDate());
};
/**计算更新天数间隔 */
var calcDayDistance = function (cur_date, last_update_date) {
    var millisecondDistance = Math.abs(cur_date.getTime() - last_update_date.getTime());
    return Math.ceil(millisecondDistance / (1000 * 3600 * 24)).toString();
};
lastUpdateDateLabel.innerHTML = formatDate(lastUpdateDate);
lastUpdateDateDistanceLabel.innerHTML = calcDayDistance(curDate, lastUpdateDate);
