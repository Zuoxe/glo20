const tabs = () => {
    const tabPanel = document.querySelector(".service-header")
    const tabcontent = document.querySelectorAll(".service-tab");
    const tabs = document.querySelectorAll(".service-header-tab")

    tabPanel.addEventListener("click", (e) => {

        if ((e.target.closest(".service-header-tab"))) {
            const tabBtn = e.target.closest(".service-header-tab")

            tabs.forEach((tab, index) => {
                if (tab === tabBtn) {
                    tab.classList.add("active")
                    tabcontent[index].classList.remove("d-none")
                } else {
                    tab.classList.remove("active")
                    tabcontent[index].classList.add("d-none")

                }
            });
        }
    })
}

export default tabs