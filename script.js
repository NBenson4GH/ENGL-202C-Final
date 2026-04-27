function calculateScreenTime() {
  const hours = document.getElementById("hours").value;
  const result = document.getElementById("result");

  if (hours === "" || hours < 0 || hours > 24) {
    result.textContent = "Please enter a valid number between 0 and 24.";
    return;
  }

  const weeklyHours = hours * 7;
  const monthlyHours = hours * 30;

  let message = `At ${hours} hours per day, you spend about ${weeklyHours} hours per week and ${monthlyHours} hours per month on social media.`;

  if (hours >= 5) {
    message += " This is a high amount of daily usage, so setting limits could help improve focus, sleep, and productivity.";
  } else if (hours >= 2) {
    message += " This is a moderate amount of usage. Tracking habits can help prevent overuse.";
  } else {
    message += " This is a relatively low amount of daily usage. Maintaining balance is still important.";
  }

  result.textContent = message;
}
