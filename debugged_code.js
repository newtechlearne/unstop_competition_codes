export function parseBirthday(remarkString) {
  // Regular expression with named capture groups for year, month, and day
  var regex = /year(?<year>\d{4})|month(?<month>\d{1,2})|day(?<day>\d{1,2})/gm;

  let match;
  let year, month, day;

  // Loop through all matches in the string
  while ((match = regex.exec(remarkString)) !== null) {
    // Avoid infinite loops with zero-width matches
    if (match.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // Extract values using named capture groups
    if (match.groups.year) {
      year = match.groups.year;
    } else if (match.groups.month) {
      month = match.groups.month;
    } else if (match.groups.day) {
      day = match.groups.day;
    }
  }

  // Ensure proper formatting of the date
  if (!year || !month || !day) {
    throw new Error("Incomplete date information provided.");
  }

  // Format the date in YYYY-MM-DD format
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}
