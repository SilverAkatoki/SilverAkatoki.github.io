"use strict";
const lastUpdateDateStr = "2024-06-20";
const titleSentences = [
    "占位符",
    "null",
    "nullptr",
    "None",
    "undefine",
    "这里要写几句随机展示的话"
];
let bodyContainer = document.getElementById("body_container");
let titleContainer = document.getElementById("title_container");
let headContainer = document.getElementById("head_container");
let navigationBar = document.getElementById("navigation_bar");
let lastUpdateDateLabel = document.getElementById("last_update_date");
let lastUpdateDateDistanceLabel = document.getElementById("last_update_date_distance");
let sentenceLabel = document.getElementById("sentence");
let fixFooterPosition = function () {
    bodyContainer.style.minHeight = `${window.innerHeight
        - titleContainer.offsetHeight
        - headContainer.offsetHeight
        - navigationBar.offsetHeight}px`;
};
fixFooterPosition();
window.addEventListener("resize", () => {
    fixFooterPosition();
});
let curDate = new Date();
let lastUpdateDate = new Date(lastUpdateDateStr);
let formatDate = (dateObj) => {
    return `${dateObj.getFullYear()}.${dateObj.getMonth() + 1}.${dateObj.getDate()}`;
};
let calcDayDistance = (cur_date, last_update_date) => {
    const millisecondDistance = Math.abs(cur_date.getTime() - last_update_date.getTime());
    return Math.floor(millisecondDistance / (1000 * 3600 * 24)).toString();
};
let randomInt = (low, high) => {
    return Math.floor(Math.random() * high) + low;
};
lastUpdateDateLabel.innerHTML = formatDate(lastUpdateDate);
lastUpdateDateDistanceLabel.innerHTML = calcDayDistance(curDate, lastUpdateDate);
sentenceLabel.innerHTML = titleSentences[randomInt(0, titleSentences.length)];
