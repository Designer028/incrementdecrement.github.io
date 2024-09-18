let incrementValue = 1;
        let decrementValue = 100;
        let incrementInterval, decrementInterval;

        function startIncrement() {
            incrementInterval = setInterval(() => {
                if (incrementValue > 50) {
                    incrementValue = 1;
                }
                document.getElementById('increment-counter').textContent = incrementValue;
                incrementValue++;
            }, 1000); 
        }

        function stopIncrement() {
            clearInterval(incrementInterval);
        }

        function startDecrement() {
            decrementInterval = setInterval(() => {
                if (decrementValue < 51) {
                    decrementValue = 100;
                }
                document.getElementById('decrement-counter').textContent = decrementValue;
                decrementValue--;
            }, 1000); 
        }

        function stopDecrement() {
            clearInterval(decrementInterval);
        }

        document.getElementById('start-increment').addEventListener('click', startIncrement);
        document.getElementById('stop-increment').addEventListener('click', stopIncrement);
        document.getElementById('start-decrement').addEventListener('click', startDecrement);
        document.getElementById('stop-decrement').addEventListener('click', stopDecrement);