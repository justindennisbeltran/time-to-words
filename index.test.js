const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles midday", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });

  it("Handles start of hour", () => {
    const timeInWords = convertTimeToWords("8:00");
    expect(timeInWords).toBe("eight o'clock");
  });

  it("Handles minutes past the hour", () => {
    const timeInWords = convertTimeToWords("8:27");
    expect(timeInWords).toBe("twenty-seven past eight");
  });

  it("Handles quarter past the hour", () => {
    const timeInWords = convertTimeToWords("8:15");
    expect(timeInWords).toBe("quarter past eight");
  });

  it("Handles half past the hour", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles minutes to the hour", () => {
    const timeInWords = convertTimeToWords("2:33");
    expect(timeInWords).toBe("twenty-seven to three");
  });

  it("Handles quarter to the hour", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });
});
