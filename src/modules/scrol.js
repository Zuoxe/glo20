const scrollPageToPosition = (position) => {
    let animationId;
    const start = document.documentElement.scrollTop;
    const target = position;


    const animateScroll = (timestamp) => {
        const progress = Math.min(1, (timestamp - startTime) / duration);
        const newPosition = start + (target - start) * progress;
        document.documentElement.scrollTop = newPosition;

        if (progress < 1) {

            animationId = requestAnimationFrame(animateScroll);
        }
    };

    const duration = 500;
    const startTime = performance.now();


    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(animateScroll);
};

const scrol = () => {
    const menuItems = document.querySelectorAll("ul > li > a");

    const positions = [850, 1146, 2672, 3707, 4249];

    menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener("click", (event) => {
            event.preventDefault();

            scrollPageToPosition(positions[index]);
        });
    });

    // window.addEventListener("scroll", () => {
    //     const top = document.documentElement.scrollTop;
    //     console.log(top);
    // });
};

export default scrol;

