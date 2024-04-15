


const slider = () => {
    const sliderBlock = document.querySelector(".portfolio-content")
    const sliders = document.querySelectorAll(".portfolio-item")
    const dots = document.querySelectorAll(".dot")

    let interval;
    let currentSlide = 0;

    const prevSlide = (elems, index, srtClass) => {
        elems[index].classList.remove(srtClass)
    }

    const nextSlide = (elems, index, srtClass) => {
        elems[index].classList.add(srtClass)
    }

    const autoSlide = () => {
        prevSlide(sliders, currentSlide, "portfolio-item-active")
        prevSlide(dots, currentSlide, "dot-active")
        currentSlide++;
        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }
        nextSlide(sliders, currentSlide, "portfolio-item-active")
        nextSlide(dots, currentSlide, "dot-active")

    }

    const startSlide = () => {
        interval = setInterval(autoSlide, 2000)
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener("click", (e) => {
        e.preventDefault()

        if (!e.target.matches(".dot, .portfolio-btn")) {
            return;

        }

        prevSlide(sliders, currentSlide, "portfolio-item-active")
        prevSlide(dots, currentSlide, "dot-active")

        if (e.target.matches("#arrow-right")) {
            currentSlide++;

        } else if (e.target.matches("#arrow-left")) {
            currentSlide--;

        } else if (e.target.classList.contains("dot")) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = sliders.length - 1;
        }

        nextSlide(sliders, currentSlide, "portfolio-item-active")
        nextSlide(dots, currentSlide, "dot-active")
    })

    sliderBlock.addEventListener("mouseenter", (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
            stopSlide()

        }
    }, true)

    sliderBlock.addEventListener("mouseleave", (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
            startSlide()

        }
    }, true)

    startSlide()

}

export default slider