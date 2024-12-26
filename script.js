document.addEventListener('DOMContentLoaded', () => {
    const countdown = () => {
        const now = new Date();
        let christmasDate = new Date(now.getFullYear(), 11, 25); // Christmas date
        let newYearDate = new Date(now.getFullYear() + 1, 0, 1); // New Year date

        if (now.getMonth() === 11 && now.getDate() > 25) {
            christmasDate = new Date(now.getFullYear() + 1, 11, 25); // Next Christmas
        }

        const currentTime = now.getTime();
        const christmasTime = christmasDate.getTime();
        const newYearTime = newYearDate.getTime();

        const remainingChristmasTime = christmasTime - currentTime;
        const remainingNewYearTime = newYearTime - currentTime;

        const getTimeComponents = (time) => {
            const seconds = Math.floor(time / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            return {
                days: days,
                hours: hours % 24,
                minutes: minutes % 60,
                seconds: seconds % 60
            };
        };

        const christmasComponents = getTimeComponents(remainingChristmasTime);
        const newYearComponents = getTimeComponents(remainingNewYearTime);

        document.getElementById('christmas-days').textContent = christmasComponents.days;
        document.getElementById('christmas-hours').textContent = christmasComponents.hours;
        document.getElementById('christmas-minutes').textContent = christmasComponents.minutes;
        document.getElementById('christmas-seconds').textContent = christmasComponents.seconds;

        document.getElementById('newyear-days').textContent = newYearComponents.days;
        document.getElementById('newyear-hours').textContent = newYearComponents.hours;
        document.getElementById('newyear-minutes').textContent = newYearComponents.minutes;
        document.getElementById('newyear-seconds').textContent = newYearComponents.seconds;
    };

    countdown();
    setInterval(countdown, 1000);
});
