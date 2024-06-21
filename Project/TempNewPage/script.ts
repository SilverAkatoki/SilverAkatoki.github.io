const lastUpdateDateStr: string = "2024-06-20";
const titleSentences: Array<string> = [
    "占位符",
    "null",
    "nullptr",
    "None",
    "undefine",
    "这里要写几句随机展示的话"
];

/* --------------------------------- 获取 DOM 元素 -------------------------------- */

let bodyContainer: HTMLElement = document.getElementById("body_container")!;
let titleContainer: HTMLElement = document.getElementById("title_container")!;
let headContainer: HTMLElement = document.getElementById("head_container")!;
let navigationBar: HTMLElement = document.getElementById("navigation_bar")!;
let lastUpdateDateLabel: HTMLElement = document.getElementById("last_update_date")!;
let lastUpdateDateDistanceLabel: HTMLElement = document.getElementById("last_update_date_distance")!;
let sentenceLabel: HTMLElement = document.getElementById("sentence")!;

/* -------------------------------------------------------------------------- */

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
let lastUpdateDate: Date = new Date(lastUpdateDateStr);

/**将 `Date` 类型变为 `"YYYY.MM.DD"` 型的字符串 */
let formatDate = (dateObj: Date): string => {
    return `${dateObj.getFullYear()}.${dateObj.getMonth() + 1}.${dateObj.getDate()}`;
}

/**计算更新天数间隔 */
let calcDayDistance = (cur_date: Date, last_update_date: Date): string => {
    const millisecondDistance = Math.abs(cur_date.getTime() - last_update_date.getTime())
    return Math.floor(millisecondDistance / (1000 * 3600 * 24)).toString();
}

/* -------------------------------------------------------------------------- */

/**根据给定的上下限随机生成一个位于 `[low, high]` 的整数 */
let randomInt = (low: number, high: number): number => {
    return Math.floor(Math.random() * high) + low;
}


lastUpdateDateLabel.innerHTML = formatDate(lastUpdateDate);
lastUpdateDateDistanceLabel.innerHTML = calcDayDistance(curDate, lastUpdateDate);
sentenceLabel.innerHTML = titleSentences[randomInt(0, titleSentences.length)];