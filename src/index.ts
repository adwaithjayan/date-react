export type FormatOptions = {
  locale?: string;
  showDate?: boolean;
  showTime?: boolean;
  hour12?: boolean;
  dateStyle?: "full" | "long" | "medium" | "short";
  timeStyle?: "full" | "long" | "medium" | "short";
  customFormat?: string;
  structured?: boolean;
};

export type StructuredDate = {
  day: number;
  month: number;
  year: number;
  hours: number;
  minutes: number;
  seconds: number;
  ampm?: "AM" | "PM";
};

export function formatDate(
  inputDate: Date | string | number,
  options: FormatOptions = {}
): string | StructuredDate {
  const {
    locale = "en-US",
    showDate = true,
    showTime = false,
    hour12,
    dateStyle = "medium",
    timeStyle = "short",
    customFormat,
    structured = false,
  } = options;

  const date = new Date(inputDate);

  if (structured) {
    const hoursRaw = date.getHours();
    const isAM = hoursRaw < 12;
    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      hours: hour12 ? convertTo12Hour(hoursRaw) : hoursRaw,
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      ...(hour12 !== undefined ? { ampm: isAM ? "AM" : "PM" } : {}),
    };
  }

  if (customFormat) {
    return customFormat
      .replace(/dd/g, pad(date.getDate()))
      .replace(/mm/g, pad(date.getMonth() + 1))
      .replace(/yyyy/g, String(date.getFullYear()))
      .replace(/yy/g, String(date.getFullYear()).slice(-2))
      .replace(
        /HH/g,
        pad(hour12 ? convertTo12Hour(date.getHours()) : date.getHours())
      )
      .replace(/MM/g, pad(date.getMinutes()))
      .replace(/SS/g, pad(date.getSeconds()))
      .replace(/AMPM/g, date.getHours() >= 12 ? "PM" : "AM");
  }

  if (!showDate && !showTime) {
    throw new Error("At least one of showDate or showTime must be true.");
  }

  const formatter = new Intl.DateTimeFormat(locale, {
    ...(showDate ? { dateStyle } : {}),
    ...(showTime ? { timeStyle } : {}),
    ...(hour12 !== undefined ? { hour12 } : {}),
  });

  return formatter.format(date);
}

function pad(n: number): string {
  return n < 10 ? "0" + n : String(n);
}

function convertTo12Hour(hour: number): number {
  const h = hour % 12;
  return h === 0 ? 12 : h;
}
