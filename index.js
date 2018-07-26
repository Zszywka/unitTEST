const formatDate = (timeInSeconds) => {
  //string timeInSeconds -> number numberTime
  const numberTime = Number(timeInSeconds);

  let hour = Number(Math.floor(numberTime / 3600));
  let minute = Number(Math.floor(numberTime % 3600 / 60));
  let second = Number(Math.floor(numberTime % 3600 % 60));
  let results = '';


  if (timeInSeconds === undefined) {
    results = '0s';
  }
  else if (numberTime <= 60) {
    results = numberTime + 's';
  }
  else if (numberTime > 60 && numberTime < 3600) {
    if (second != 0) {
      results = minute + 'm ' + second + 's'
    } else {
      results = minute + 'm'
    }
  }
  else if (numberTime >= 3600) {
    if (second != 0 && minute !=0 ) {
      results = (hour + 'h ' + minute + 'm ' + second + 's');
    }
    else if (minute != 0 && second === 0) {
      results = hour + 'h ' + minute + 'm'
    }
    else if (minute === 0 && second != 0) {
      results = hour + 'h ' + second + 's'

    } else {
      results = hour + 'h'
    }
  }
  return results;
}

module.exports = formatDate;
