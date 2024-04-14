const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(months[date.getMonth()]);
console.log(date.getDate());
console.log(days[date.getDay()]);
console.log(
  `Hours: ${date.getHours()}, Minutes: ${date.getMinutes()}, Seconds: ${date.getSeconds()}`
);
const lastDayOfMonth = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDate();
console.log(lastDayOfMonth);

const tomorrowDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
console.log(
  `${tomorrowDate.getFullYear()}-${
    tomorrowDate.getMonth() + 1
  }-${tomorrowDate.getDate()}`
);

let totalMinutes = 90;

let hour = Math.floor(totalMinutes / 60);
let minute = totalMinutes % 60;

console.log(`${hour} hour(s) and ${minute} minute(s)`);
