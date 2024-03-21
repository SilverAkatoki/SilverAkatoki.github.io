window.addEventListener("load", () => {
    let buttons = document.querySelectorAll(".default_button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => { button.innerText = "按钮被按下" });
    })
});