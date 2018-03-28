function humanReadable(seconds) {

  function humanReadableFormat(input) {
    if (input < 10) {
      input = `0${input}`;
    }
    return input;
  }

  const inputSeconds = humanReadableFormat(seconds % 60);
  const inputMinutes = humanReadableFormat(Math.floor(seconds / 60) % 60);
  const inputHours = humanReadableFormat(Math.floor((seconds / 60) / 60));
  return `${inputHours}:${inputMinutes}:${inputSeconds}`;
}
console.log(humanReadable(60)) // 00:01:00
console.log(humanReadable(86399)) // 23:59:59
console.log(humanReadable(359999)) // 99:59:59