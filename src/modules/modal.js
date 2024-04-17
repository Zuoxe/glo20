import { animate } from "./helpers"

const modal = () => {
    const buttons = document.querySelectorAll(".popup-btn")
    const closeBtn = document.querySelector(".popup-close")
    const modal = document.querySelector(".popup")

    const setInitialStyles = () => {

        modal.style.opacity = '0';
        modal.style.display = 'block';
        modal.style.visibility = 'hidden';
        modal.style.transition = 'opacity .4s ease';

    }

    const showModal = () => {

        // modal.style.opacity = '1';
        // modal.style.visibility = 'visible';
        // modal.style.transition = 'opacity .4s ease';

        animate({
            duration: 200,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = progress
                modal.style.visibility = 'visible';
                modal.style.transition = 'opacity .4s ease';
            }
        });

    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            showModal()
        })
    })

    setInitialStyles()
    modal.addEventListener("click", (e) => {

        if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {

            setInitialStyles()

        }
    })

}

export default modal