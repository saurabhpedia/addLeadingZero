function addLeadingZero(number) {
  if (number < 9) {
    return '0' + number;
  }
  return number;
}

module.exports = { addLeadingZero };
