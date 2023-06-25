export function formatGoogleDate(dateTimeString) {
  const createdAt = new Date(dateTimeString);

  const gYear = createdAt.getFullYear();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const gMonth = monthNames[createdAt.getMonth()];
  const gDay = String(createdAt.getDate()).padStart(2, "0");
  const hours = String(createdAt.getHours()).padStart(2, "0");
  const minutes = String(createdAt.getMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = String(hours % 12 || 12).padStart(2, "0");
  const gTime = `${formattedHours}:${minutes} ${period}`;

  return {
    gYear,
    gMonth,
    gDay,
    gTime,
  };
}
