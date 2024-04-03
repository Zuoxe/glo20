const timer = () => {

    timerHours = document.getElementById("timer-hours");
    timerMinutes = document.getElementById("timer-minutes");
    timerSeconds = document.getElementById("timer-seconds");

    const countTimer = (deadLine) => {

        let dateStop = new Date(deadLine).getTime();
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)


        return { timeRemaining, hours, minutes, seconds }
    }

    const pushZero = (num) => {
        return num < 10 ? "0" + num : num
    }



    const updateClock = () => {

        let getTime = countTimer("4 april 2024, 01:00:59 ")

        timerHours.textContent = pushZero(getTime.hours);
        timerMinutes.textContent = pushZero(getTime.minutes);
        timerSeconds.textContent = pushZero(getTime.seconds);

        let idTimeout = setTimeout(() => {
            updateClock();
            clearTimeout(idTimeout);
        }, 1000);

        if (getTime.timeRemaining <= 0) {
            clearTimeout(idTimeout);
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }
    };

    updateClock();
}
timer();

module.exports = timer;