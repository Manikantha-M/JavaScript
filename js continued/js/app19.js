// Date object

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date();
console.log(date);

const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const time = date.toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});
console.log(time);

const result = `${months[month]} ${date.getDate()}, ${
  days[day]
} ${time}, ${date.getFullYear()}`;
console.log(result);
