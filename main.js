const RIPPLE_BTN = document.querySelectorAll('.rippling-btn')

RIPPLE_BTN.forEach(btn => {
    btn.addEventListener('click', function (event) {
        const POINTX = event.clientX;
        const POINTY = event.clientY;

        const BUTTON_TOP = event.target.offsetTop;
        const BUTTON_LEFT = event.target.offsetLeft;
        
        const X_AXIS = POINTX - BUTTON_LEFT;
        const Y_AXIS = POINTY - BUTTON_TOP;

        console.log(X_AXIS, Y_AXIS)

        const CIRCLE = document.createElement('span');
        CIRCLE.classList.add('circle');
        CIRCLE.style.top = `${Y_AXIS}px`;
        CIRCLE.style.left = `${X_AXIS}px`;

        this.appendChild(CIRCLE)

        setTimeout(() => CIRCLE.remove(), 430)
    })
});