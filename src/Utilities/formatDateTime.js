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

export function formatedUpdatedDateTime(dateTimeString) {
  const updatedAt = new Date(dateTimeString);

  const yearUpdated = updatedAt.getFullYear();
  const monthUpdated = String(updatedAt.getMonth() + 1).padStart(2, "0");
  const dayUpdated = String(updatedAt.getDate()).padStart(2, "0");
  const hoursUpdated = String(updatedAt.getHours()).padStart(2, "0");
  const minutesUpdated = String(updatedAt.getMinutes()).padStart(2, "0");

  const period = hoursUpdated >= 12 ? "PM" : "AM";
  const formattedHours = String(hoursUpdated % 12 || 12).padStart(2, "0");
  const timeUpdated = `${formattedHours}:${minutesUpdated} ${period}`;

  return {
    yearUpdated,
    monthUpdated,
    dayUpdated,
    timeUpdated,
  };
}
