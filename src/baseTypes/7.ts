/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  MON = 0,
  TUE = 0,
  WEN = 0,
  THU = 0,
  FRI = 0,
  SAT = 1,
  SUN = 1
}

const isWeekend = (day: Days) => {
  return day ? true : false;
}