const CURSOR_MOVING_DELAY_TIME = "16";  // ms

const OUTER_CURSOR_HOVER_ANIMATION_TIME = ".3s";
const OUTER_CURSOR_MOUSEOVER_SIZE = "24px";
const OUTER_CURSOR_MOUSEOVER_BACKGROUND_COLOR = "rgba(255, 255, 255, 0.75)";

const CURSOR_CLICKED_ANIMATION_TIME = ".5s";
const CURSOR_CLICKED_ANIMATION_DELAY_TIME = "1s";

let is_on_PC = !/windows/i.test(navigator.userActivation);

let can_clickeditems = document.querySelectorAll(".can_clickeditem");
let can_choose = document.querySelectorAll(".can_chooseitem");

let cursor = document.querySelector(".cursor");
let outer_cursor = document.querySelector(".outer_cursor");
let clicked_cursor = document.querySelector(".clicked_cursor");

let cursor_posX = 0;
let cursor_posY = 0;

let can_play_clicked_animation = true;


function throttle(func, delay) {
    /************************************************
        * 节流函数
        * @param {function} func 需要节流的函数
        * @param {number} delay 延迟时间(ms)
        * @returns {function} 延迟执行后的函数
    *************************************************/
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTime > delay) {
            lastTime = now;
            func.apply(this, args);
        }
    }
}

window.addEventListener("load", () => {
    if (!is_on_PC) { return; }

    outer_cursor.style.opacity = 1;

    document.addEventListener("mousedown", function (mouse) {
        if (can_play_clicked_animation) {
            can_play_clicked_animation = false;

            clicked_cursor.style.left = mouse.clientX + "px";
            clicked_cursor.style.top = mouse.clientY + "px";

            clicked_cursor.style.animation = "none";
            void clicked_cursor.offsetWidth;
            clicked_cursor.style.animation = `clicked_cursor_animation ${CURSOR_CLICKED_ANIMATION_TIME} ease-in-out`;

            clicked_cursor.addEventListener("animationend", () => { setTimeout(() => { can_play_clicked_animation = true; }, CURSOR_CLICKED_ANIMATION_DELAY_TIME) })
        }
    });

    document.addEventListener("mousemove", function (mouse) {
        cursor_posX = mouse.clientX;
        cursor_posY = mouse.clientY;
    });

    setInterval(() => {
        outer_cursor.style.left = cursor_posX + "px";
        outer_cursor.style.top = cursor_posY + "px";
    }, CURSOR_MOVING_DELAY_TIME);

    can_choose.forEach(function (can_chooseitem) {
        can_chooseitem.addEventListener("mouseover", function () {
            outer_cursor.style.opacity = "0";
        });

        can_chooseitem.addEventListener("mouseout", function () {
            outer_cursor.style.opacity = "1";
        });
    });

    can_clickeditems.forEach(function (can_clickeditem) {
        can_clickeditem.addEventListener("mouseover", function () {
            outer_cursor.style.width = OUTER_CURSOR_MOUSEOVER_SIZE;
            outer_cursor.style.height = OUTER_CURSOR_MOUSEOVER_SIZE;
            outer_cursor.style.transform = "translate(-50%, -50%)";
            outer_cursor.style.backgroundColor = OUTER_CURSOR_MOUSEOVER_BACKGROUND_COLOR;
            outer_cursor.style.transition = `background-color ${OUTER_CURSOR_HOVER_ANIMATION_TIME}, width ${OUTER_CURSOR_HOVER_ANIMATION_TIME}, height ${OUTER_CURSOR_HOVER_ANIMATION_TIME}`;
        });

        can_clickeditem.addEventListener("mouseout", function () {
            outer_cursor.style.width = "";
            outer_cursor.style.height = "";
            outer_cursor.style.transform = "";
            outer_cursor.style.backgroundColor = "";
            outer_cursor.style.transition = "";
        });
    });

})
