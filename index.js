const mapping = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty-one",
  22: "twenty-two",
  23: "twenty-three",
  24: "twenty-four",
  25: "twenty-five",
  26: "twenty-six",
  27: "twenty-seven",
  28: "twenty-eight",
  29: "twenty-nine",
  30: "thirty",
};

const minutesToWord = (minutes) => {
  const wordedMinutes = mapping[minutes];
  if (wordedMinutes === "fifteen") {
    return "quarter";
  }
  if (wordedMinutes === "thirty") {
    return "half";
  }
  return wordedMinutes;
};

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // Handles midnight/midday
  if (time === "0:00") {
    return "midnight";
  }
  if (time === "12:00") {
    return "midday";
  }

  const [hour, minutes] = time.split(":");

  // Handles start of the hour
  if (minutes === "00") {
    return `${mapping[hour]} o'clock`;
  }

  // Handles < 30min
  if (Number(minutes) <= 30) {
    const wordedMinutes = minutesToWord(minutes);
    return `${wordedMinutes} past ${mapping[hour]}`;
  }

  // > 30min
  const wordedMinutes = minutesToWord(60 - Number(minutes));
  return `${wordedMinutes} to ${mapping[Number(hour) + 1]}`;
}

module.exports = { convertTimeToWords };

