const calculatorNumbers = () => {

    const square = document.querySelector(".calc-square");
    const count = document.querySelector(".calc-count");
    const day = document.querySelector(".calc-day");

    const mess = document.querySelector(".mess");
    const email = document.querySelector(".form-email");
    const phoneNumber = document.querySelector(".form-phone");

    function containsOnlyDigits(inputString) {
        const sanitizedInput = inputString.replace(/[^\d]/g, '');
        return /^\d+$/.test(sanitizedInput);
    }

    square.addEventListener("input", () => {
        if (!containsOnlyDigits(square.value)) {
            square.value = "";
        }
    });

    count.addEventListener("input", () => {
        if (!containsOnlyDigits(count.value)) {
            count.value = "";
        }
    });

    day.addEventListener("input", () => {
        if (!containsOnlyDigits(day.value)) {
            day.value = "";
        }
    });

    mess.addEventListener("input", () => {
        const cyrillicPattern = /^[\u0400-\u04FF\s-]+$/;
        if (!cyrillicPattern.test(mess.value)) {
            mess.value = "";
        }
    });

    email.addEventListener("input", () => {
        const emailPattern = /^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~.@]+$/;
        if (!emailPattern.test(email.value)) {
            email.value = "";
        }
    });

    phoneNumber.addEventListener("input", () => {
        const telPattern = /^[0-9()+-]+$/;
        if (!telPattern.test(phoneNumber.value)) {
            phoneNumber.value = "";
        }
    });
};

export default calculatorNumbers;
