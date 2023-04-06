function addLeadingZero(number:any) {
  if (number < 9) {
    return '0' + number;
  }
  return number;
}

module.exports = { addLeadingZero };
