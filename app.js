function updateContent() {
  const currentDate = new Date();

  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const currentDayOfTheWeek = daysOfTheWeek[currentDate.getDay()];
  const currentUTCTime = Date.now();

  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `Current Day of the Week is ${currentDayOfTheWeek}`;

  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current Time is ${currentUTCTime}`;
}

// ? This Set Interval function runs
setInterval(() => {
  updateContent();
}, 1000);
