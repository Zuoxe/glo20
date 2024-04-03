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

        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        modal.style.transition = 'opacity .4s ease';

    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            showModal()
        })
    })

    closeBtn.addEventListener("click", () => {
        setInitialStyles()
    })


    setInitialStyles()

}

export default modal