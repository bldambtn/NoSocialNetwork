const dayjs = require("dayjs");

// Function to format a JavaScript Date object using dayjs
const formatDate = (date) => {
  // If no date is provided, return the current date in a custom format
  return dayjs(date).format("MMMM D, YYYY h:mm A"); // e.g., "January 1, 2024 10:30 AM"
};

module.exports = formatDate;
