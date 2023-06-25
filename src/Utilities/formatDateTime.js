export function formatDateTime(dateTimeString) {
  const createdAt = new Date(dateTimeString);

  const year = createdAt.getFullYear();
  const month = String(createdAt.getMonth() + 1).padStart(2, "0");
  const day = String(createdAt.getDate()).padStart(2, "0");
  const hours = String(createdAt.getHours()).padStart(2, "0");
  const minutes = String(createdAt.getMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = String(hours % 12 || 12).padStart(2, "0");
  const time = `${formattedHours}:${minutes} ${period}`;

  return {
    year,
    month,
    day,
    time,
  };
}
