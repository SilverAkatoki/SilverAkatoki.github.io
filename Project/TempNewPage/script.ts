let bodyContainer = document.getElementById("body_container")!;
let titleContainer = document.getElementById("title_container")!;
let headContainer = document.getElementById("head_container")!;
let navigationBar = document.getElementById("navigation_bar")!;
let lastUpdateDateLabel = document.getElementById("last_update_date")!;
let lastUpdateDateDistanceLabel = document.getElementById("last_update_date_distance")!;

/**设置 / 修改底栏位置*/
let fixFooterPosition = function (): void {
    bodyContainer.style.minHeight = `${window.innerHeight
        - titleContainer.offsetHeight
        - headContainer.offsetHeight
        - navigationBar.offsetHeight
        }px`;
};

fixFooterPosition();


window.addEventListener("resize", () => {
    // 页面大小调整时执行
    fixFooterPosition();
});

/* ---------------------------------- 日期处理 ---------------------------------- */

/**当前时间*/
let curDate: Date = new Date();

/**上一次更新时间*/
let lastUpdateDate: Date = new Date("2024-06-20");

/**将 `Date` 类型变为 `"YYYY.MM.DD"` 型的字符串 */
let formatDate = (dateObj: Date): string => {
    return `${dateObj.getFullYear()}.${dateObj.getMonth() + 1}.${dateObj.getDate()}`;
}

/**计算更新天数间隔 */
let calcDayDistance = (cur_date: Date, last_update_date: Date): string => {
    const millisecondDistance = Math.abs(cur_date.getTime() - last_update_date.getTime())
    return Math.ceil(millisecondDistance / (1000 * 3600 * 24)).toString();
}

lastUpdateDateLabel.innerHTML = formatDate(lastUpdateDate);
lastUpdateDateDistanceLabel.innerHTML = calcDayDistance(curDate, lastUpdateDate);