let body = document.getElementById("body");
let wheel_moving_status = 0;    // 0 静止 1 向下滚动过 -1 向上滚动过
let update_point = false;
let can_jump = true;
let nav_button_containers = document.querySelectorAll(".nav_button_container");
let page_list = [];
nav_button_containers.forEach(nav_button_container => { page_list.push(nav_button_container.querySelector("span.nav_button_name").innerText) });

let point = 0;

const SCROLL_DELAY = 10;    // 10
const MOUSEWHEEL_UPDATE_POINT_DELAY = 30;   // 30
const BUTTON_UPDATE_POINT_DELAY = 0;    // 0
const MOUSEWHEEL_STATUS_UPDATE_DELAY = 16;  // 16

window.addEventListener("load", () => {
    let scroll_timeout = null;

    // 滚动时间限制
    window.addEventListener("scroll", () => {
        can_jump = false;
        window.clearTimeout(scroll_timeout);
        scroll_timeout = window.setTimeout(() => { can_jump = true; }, SCROLL_DELAY);
    })

    // 按钮更新焦点
    setInterval(() => {
        nav_button_containers.forEach(nav_button_container => {
            let nav_button_name = nav_button_container.querySelector("span.nav_button_name").innerText;
            if (page_list.indexOf(nav_button_name) == point) {
                nav_button_container.classList.add("active");
            }
            else {
                nav_button_container.classList.remove("active");
            }
            nav_button_container.addEventListener("click", () => {
                if (can_jump) {
                    point = page_list.indexOf(nav_button_name);
                    update_point = true;
                }
            });
        });

        // 滚动到焦点
        if (update_point && can_jump) {
            update_point = false;
            jumpTo(page_list[point]);
        }
    }, BUTTON_UPDATE_POINT_DELAY);

    window.addEventListener("wheel", (mouse) => {
        mouse.preventDefault(); // 阻止默认滚动操作

        if (mouse.deltaY > 0) {
            wheel_moving_status = 1;
        } else {
            wheel_moving_status = -1;
        }

        // 重置滚动状态
        setTimeout(() => {
            wheel_moving_status = 0;
        }, MOUSEWHEEL_STATUS_UPDATE_DELAY);
    }, { passive: false });

    window.addEventListener("touchmove", (ev) => {
        ev.preventDefault(); // 阻止默认滚动操作

        if (ev.deltaY > 0) {
            wheel_moving_status = 1;
        } else {
            wheel_moving_status = -1;
        }

        // 重置滚动状态
        setTimeout(() => {
            wheel_moving_status = 0;
        }, MOUSEWHEEL_STATUS_UPDATE_DELAY);
    }, { passive: false });

    // 鼠标更新焦点事件
    setInterval(() => {
        if (can_jump) {
            switch (wheel_moving_status) {
                case 1:
                    if (0 <= point && point < page_list.length - 1) {
                        point += 1;
                        update_point = true;
                    }
                    break;
                case -1:
                    if (0 < point && point <= page_list.length - 1) {
                        point -= 1;
                        update_point = true;
                    }
                    break;
                default:
                    break;
            }
        }
    }, MOUSEWHEEL_UPDATE_POINT_DELAY);


});

function jumpTo(new_interface_id) {
    /****
     * @name 切换界面的函数
     * @param String new_interface_id 切换到的新<div>标签ID
     *****/

    document.getElementById(new_interface_id).scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
    })
}