const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block")
    const calcType = document.querySelector(".calc-type")
    const calcSquare = document.querySelector(".calc-square")
    const calcCount = document.querySelector(".calc-count")
    const calcDay = document.querySelector(".calc-day")
    const total = document.getElementById("total")



    const countcCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value

        const time = 5000;
        const step = 10;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
        } else {
            totalValue = 0;
        }

        outNum(Math.round(totalValue))

        // total.textContent = totalValue;
    }

    function outNum(num) {
        let n = 0;
        const step = 100; // Шаг изменения числа
        const time = 1; // Время анимации (в миллисекундах)
        const interval = Math.round(time / (num / step));

        const animate = () => {
            n += step;
            if (n >= num) {
                clearInterval(animInterval);
                n = num;
            }
            total.textContent = n;
        };

        const animInterval = setInterval(animate, interval);
    }


    calcBlock.addEventListener("input", (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countcCalc();
        }
    })


}

export default calc