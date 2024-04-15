const menu = () => {
    const menu = document.querySelector("menu");


    const showMenu = () => {

        const paddingRight = window.innerWidth - document.documentElement.clientWidth;

        menu.classList.add('active-menu');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${paddingRight}px`;
    };

    const hideMenu = () => {
        menu.classList.remove('active-menu');
        setTimeout(() => {
            document.body.style.overflow = 'visible';
            document.body.style.paddingRight = `${0}px`;
        }, 200)
    };

    const toggleMenu = (e) => {

        const target = e.target;
        const withinBoundaries = e.composedPath().includes(menu);

        target.closest('.menu') ? showMenu() : '';
        target.closest('.close-btn') ? hideMenu() : '';
        target.closest('menu a') ? hideMenu() : '';
        !withinBoundaries && !target.closest('.menu') ? hideMenu() : '';

    };

    document.addEventListener('click', toggleMenu);
}
export default menu