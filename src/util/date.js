const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDate = (day) => {
  var date = new Date();
  date.setDate(date.getDate() + day);
  return (
    weekDays[date.getDay()] +
    ", " +
    months[date.getMonth()] +
    " " +
    date.getDate()
  );
};

export const getDateTime = (dateTime) => {
  let date = new Date(dateTime);
  let hours = date.getHours();
  return (
    weekDays[date.getDay()] +
    ", " +
    months[date.getMonth()] +
    " " +
    date.getDate() +
    " " +
    convertToTwoDigit(hours) +
    ":" +
    convertToTwoDigit(date.getMinutes()) +
    ":" +
    convertToTwoDigit(date.getSeconds()) +
    " " +
    (hours >= 12 ? " PM" : " AM")
  );
};

export const convertToTwoDigit = (number) => {
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
};
