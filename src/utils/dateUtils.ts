import Constants from "@/constants";
import { en } from "@/i18n";
import moment from "moment";
import "moment/locale/en-au";

const locale = "en";

/**
 * Generic method for formatting datetime with moment.js
 * Refer to https://momentjs.com/docs/#/displaying/format/
 * @param date Date | null
 * @param format string. string of tokens
 * @returns string
 */
export function format(date: Date, format: string): string {
  return moment(date.getTime()).format(format);
}

/**
 * Converts string or milseconds to Date
 * @param datetime string | number
 * @returns Date
 */
export function convertToDate(datetime: string | number): Date {
  if (typeof datetime === "number") {
    return moment(datetime).toDate();
  }

  if (datetime === "") {
    return Constants.MinDateTime;
  }

  return moment(new Date(datetime).getTime()).toDate();
}

export function isSameDate(
  date1: Date | string | null,
  date2: Date | string | null
): boolean {
  if (!date1 || !date2) {
    return false;
  }

  const dt1 = typeof date1 === "string" ? convertToDate(date1) : date1;
  const dt2 = typeof date2 === "string" ? convertToDate(date2) : date2;
  return moment(dt1.getTime()).isSame(dt2.getTime(), "day");
}

export function isBetween(date: Date, from: Date, to: Date): boolean {
  return moment(date.getTime()).isBetween(
    moment(from.getTime()),
    moment(to.getTime())
  );
}

export function startOf(
  date: Date | number,
  unitOfTime: moment.unitOfTime.StartOf
): Date {
  if (date instanceof Date) {
    date = date.getTime();
  }

  return moment(date).startOf(unitOfTime).toDate();
}

export function getVarianceMins(
  date1: Date,
  date2: Date,
  abs?: boolean
): number {
  const date1Time = moment(date1.getTime()).startOf("minute");
  const date2Time = moment(date2.getTime()).startOf("minute");
  const diff = date1Time.diff(date2Time, "minute");

  if (abs) {
    return Math.abs(diff);
  }

  return diff;
}

/**
 * Converts to the start datetime of the day of the date. Regardless of tripDateOffset
 * @param date Date
 * @returns Date
 */
export function convertToMidnight(date: Date): Date {
  return startOf(date, "day");
}

export function formatYear(datetime: Date): string {
  moment.locale(locale);
  return moment(datetime.getTime()).format("YYYY");
}

export function formatDate(datetime: Date | null): string {
  if (!datetime) {
    return "00/00/0000";
  }

  moment.locale(locale);
  return moment(datetime.getTime()).format("L");
}

export function formatWeek(datetime: Date | null): string {
  if (!datetime) {
    return "Unknown day";
  }

  moment.locale(locale);
  return moment(datetime.getTime()).format("dddd");
}

export function formatTime(
  datetime: Date | null,
  withSeconds: "with seconds" | "without seconds" = "with seconds"
): string {
  if (!datetime) {
    return "00:00" + withSeconds ? ":00" : "";
  }

  moment.locale(locale);
  return moment(datetime.getTime())
    .startOf(withSeconds === "with seconds" ? "second" : "minute")
    .format(withSeconds === "with seconds" ? "LTS" : "LT");
}

export function formatDatetime(datetime: Date | null): string {
  return `${formatTime(datetime, "without seconds")} ${en.dot} ${formatDate(
    datetime
  )}`;
}

/**
 * Add a number of milseconds to the date.
 * @param date Date. The date to be added.
 * @param offset number. The number of milseconds to be added. For getting a past date, pass a negative value.
 * @returns Date
 */
export function addTimeOffset(date: Date, offset: number): Date {
  return moment(date.getTime()).add(offset, "millisecond").toDate();
}

/**
 * Add a number of days to the date.
 * @param date Date. The date to be added.
 * @param day number. The number of days to be added. For getting a past date, pass a negative value.
 * @returns Date
 */
export function addDay(date: Date, day: number): Date {
  return moment(date.getTime()).add(day, "day").toDate();
}

/**
 * Gets the date of the given date
 * @param date Date
 * @returns Date
 */
export function getDate(date: Date): Date {
  return startOf(date, "day");
}

export function convertToDayFromToday(
  date: string | Date | null,
  today: Date,
  short = false
): string {
  if (!date) {
    return "Unknown date";
  }

  const dateVal = typeof date === "string" ? convertToDate(date) : date;

  moment.updateLocale(locale, {
    calendar: {
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      nextWeek: "dddd",
      lastDay: "[Yesterday]",
      lastWeek: `[${moment(dateVal).fromNow()}]`,
      sameElse: "LL"
    }
  });

  const result = moment([
    dateVal.getFullYear(),
    dateVal.getMonth(),
    dateVal.getDate()
  ]).calendar(moment(today.getTime()));

  if (short) {
    // Keeps month and date only
    // Ex: November 3, 2020 -> November 3
    return result.replace(/\W*\d{4}\W*/gi, "");
  }

  return result;
}

/**
 * Converts to date ISOString
 * @param date Date | moment.Moment
 * @returns string (YYYY-MM-DD)
 */
export function toISODateString(date: Date | moment.Moment): string {
  const format = "YYYY-MM-DD";

  if (date instanceof Date) {
    return moment(date.getTime()).format(format);
  }

  return date.format(format);
}

/**
 * Converts to datetime ISOString
 * @param date Date
 * @param option "with time" | "without time".
 * "with time" attaches the current time info;
 * "without time" attaches T00:00:00.000";
 * @returns string (YYYY-MM-DDTHH:MM:SS.sss)
 */
export function toISODatetimeString(
  date: Date | moment.Moment,
  option: "with time" | "without time" = "without time"
): string {
  if (option === "without time") {
    return toISODateString(date) + "T00:00:00.000";
  }

  const timeFormat = "HH:mm";
  let time = "";

  if (date instanceof Date) {
    time = moment(date.getTime()).format(timeFormat);
  } else {
    time = date.format(timeFormat);
  }

  return toISODateString(date) + `T${time}:00.000`;
}

/**
 * Gets the duration object of two dates
 * @param date1 Date
 * @param date2 Date
 * @returns moment.Duration. The duration object of two dates
 */
export function getDuration(date1: Date, date2: Date): moment.Duration {
  const d1 = moment(date1.getTime()).startOf("second");
  const d2 = moment(date2.getTime()).startOf("second");

  return moment.duration(d2.diff(d1));
}

export function getDurationFormatted(date1: Date, date2: Date): string {
  const d1 = moment(date1.getTime()).startOf("minute");
  const d2 = moment(date2.getTime()).startOf("minute");
  const duration = getDuration(date1, date2).asHours();
  const diff = Math.abs(d2.diff(d1));

  if (duration < 1) {
    return moment.utc(diff).format("m [min]");
  }

  return moment.utc(diff).format("H[h] m[m]");
}

export function getTimeDiffMilliseconds(start: Date, end: Date): number {
  const time1 = moment(start.getTime());
  const time2 = moment(end.getTime());
  return moment.duration(time2.diff(time1)).asMilliseconds();
}

export function formatSecondsHumanised(
  seconds: number,
  withSecs: "with seconds" | "without seconds" = "with seconds",
  short = true
): string {
  const unitHour = short ? "h" : " hour";
  const unitMin = short ? "m" : " minute";
  const unitSec = short ? "s" : " second";
  const pluralMark = "s";
  let unit = "";

  const hours = moment.utc(seconds * 1000).hours();
  unit = unitHour + (!short && hours !== 1 ? pluralMark : "");
  const hourText = hours + unit;

  const mins = moment.utc(seconds * 1000).minutes();
  unit = unitMin + (!short && mins !== 1 ? pluralMark : "");
  const minText = mins + unit;

  const secs = moment.utc(seconds * 1000).seconds();
  unit = unitSec + (!short && secs !== 1 ? pluralMark : "");
  const secText = secs + unit;

  if (hours === 0 && mins === 0 && secs === 0) {
    unit = !short ? pluralMark : "";
    return 0 + (withSecs === "with seconds" ? unitSec : unitMin) + unit;
  }

  if (hours > 0) {
    if (withSecs === "with seconds") {
      return (
        hourText + " " + (mins > 0 ? minText : "") + (secs > 0 ? secText : "")
      );
    }

    if (mins > 0) {
      unit = unitMin + (!short && mins !== 1 ? pluralMark : "");
      return hourText + (mins > 0 ? ` ${mins + 1}${unit}` : "");
    }

    return hourText;
  }

  if (mins > 0) {
    if (withSecs === "with seconds") {
      return minText + " " + (secs > 0 ? secText : "");
    }

    return minText;
  }

  if (withSecs === "without seconds") {
    return 0 + unitMin + (!short ? pluralMark : "");
  }

  return secText;
}

export function formatSeconds(seconds: number): string {
  return moment.utc(seconds * 1000).format("HH:mm:ss");
}

export function formatFromMinutes(mins: number): Date {
  return moment.utc(mins * 60 * 60 * 1000).toDate();
}

/**
 * Gets the difference of two dates in an unit of measurement.
 * @param date1 Date
 * @param date2 Date
 * @param unitOfTime moment.unitOfTime.Diff. default: "minutes"
 * @returns number. The difference of two dates in an unit of measurement.
 */
export function getDiff(
  date1: Date,
  date2: Date,
  unitOfTime: moment.unitOfTime.Diff = "minutes"
): number {
  return Math.abs(
    moment(date1.getTime()).diff(moment(date2.getTime()), unitOfTime)
  );
}

export function isSameOrAfter(date: Date, to: Date): boolean {
  return moment(date.getTime()).isSameOrAfter(moment(to.getTime()));
}
