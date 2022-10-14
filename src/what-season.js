const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const winterName = "winter";
  const springName = "spring";
  const summerName = "summer";
  const autumnName = "autumn";
  const error = "Invalid date!";
  const unableToRead = "Unable to determine the time of year!";

  if (!date) return unableToRead;

  try {
    date.getTimezoneOffset();
  } catch (err) {
    throw new Error(error);
  }

  let currentMonth = date.getMonth();

  if (currentMonth >= 2 && currentMonth <= 4) return springName;
  else if (currentMonth >= 5 && currentMonth <= 7) return summerName;
  else if (currentMonth >= 8 && currentMonth <= 10) return autumnName;
  else return winterName;
}

module.exports = {
  getSeason,
};
