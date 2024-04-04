function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

const scrollMouse = () => {
    const anchorLinks = document.querySelectorAll('a[href="#service-block"]');

    anchorLinks.forEach(anchorLink => {
        anchorLink.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = anchorLink.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
}

scrollMouse();
export default scrollMouse;
