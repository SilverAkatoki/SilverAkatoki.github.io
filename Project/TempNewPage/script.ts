let body_container = document.getElementById("body_container")!;
let title_container = document.getElementById("title_container")!;
let head_container = document.getElementById("head_container")!;
let navigation_bar = document.getElementById("navigation_bar")!;
let last_update_date_label = document.getElementById("least_update_date")!;

/**设置 / 修改底栏位置*/
let fixFooterPosition = function () {
    body_container.style.minHeight = `${window.innerHeight
        - title_container.offsetHeight
        - head_container.offsetHeight
        - navigation_bar.offsetHeight
        }px`;
};

fixFooterPosition();


window.addEventListener("resize", () => {
    // 页面大小调整时执行
    fixFooterPosition();
});

/* ---------------------------------- 日期处理 ---------------------------------- */

/**当前时间*/
let cur_date_obj: Date = new Date();

/**上一次更新时间*/
let last_update_date: Date = new Date("2024-06-20");

/**将 `Date` 类型变为 `"YYYY.MM.DD"` 型的字符串 */
let formatDate = function (date_obj: Date) {
    return `${date_obj.getFullYear()}.${date_obj.getMonth() + 1}.${date_obj.getDate()}`;
}

last_update_date_label.innerHTML = formatDate(last_update_date);
