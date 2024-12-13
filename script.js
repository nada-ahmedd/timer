document.getElementById('startBtn').addEventListener('click', () => {
  let totalSeconds = 60;
  const timerDisplay = document.getElementById('timer');
  const messageDisplay = document.getElementById('message');
  
  const countdown = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      timerDisplay.textContent = `${Math.floor(totalSeconds / 60)}:${(totalSeconds % 60).toString().padStart(2, '0')}`;
    } else {
      clearInterval(countdown);
      messageDisplay.textContent = "Good Night";
    }
  }, 1000);
});
