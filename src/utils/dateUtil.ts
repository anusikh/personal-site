export function toDateTime(seconds: number): string {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(seconds);
  const d = t.getDate();
  const m = t.getMonth();
  const y = t.getFullYear();
  const day = t.getUTCDay();

  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return ` ${d}/${m + 1}/${y} ${dayArray[day]}`;
}
