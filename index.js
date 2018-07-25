const formatDate = (timeInSeconds) => {
  //string timeInSeconds -> number numberTime
  const numberTime = Number(timeInSeconds);

  let hour = Number(Math.floor(numberTime / 3600));
  let minute = Number(Math.floor(numberTime % 3600 / 60));
  let second = Number(Math.floor(numberTime % 3600 % 60));

  const resultHour = 0 <= hour ? '' : (hour + 'h');
  const resultMinute = 0 <= minute ? '' : (minute + 'm');
  const resultSecond = 0 <= second ? '' : (second + 's');

  let results = '';
  // let sumAllTime = (resultHour + resultMinute + resultSecond);

  // //param does'n exsist
  // if (timeInSeconds === undefined ) {
  //   results = '0s';
  // }
  // // else {
  // //   results = sumAllTime;
  // }
  // return results;

  //param does'n exsist
  // if (timeInSeconds === undefined) {
  //   results = '0s';
  // }
  // else if (resultHour === 0) {
  //   if (resultMinute === 0){
  //     results = resultSecond
  //   } else if (resultSecond === 0) {
  //     results = resultMinute
  //   } else if (resultMinute === 0 && resultSecond === 0) {
  //     results = '0s'
  //   } else {
  //     results = (resultMinute + resultSecond);
  //   }
  // }
  // else if (resultMinute === 0) {
  //   if (resultSecond === 0) {
  //     results = resultHour
  //   } else {
  //     results = (resultHour + resultSecond);
  //   }
  // }
  // else if (resultSecond === 0) {
  //   results = (resultHour + resultMinute);
  // }
  // else {
  //   results = (resultHour + resultMinute + resultSecond)
  // }
  // return results;

  if (timeInSeconds === undefined) {
    results = '0s';
  }
  else if (resultHour === 0) {
    results = (resultMinute + resultSecond);
  }
  else if (resultMinute === 0) {
    results = (resultHour + resultSecond);
  }
  else if (resultSecond === 0) {
    results = (resultHour + resultMinute);
  }
  else {
    results = (resultHour + resultMinute + resultSecond);
  }
  return results;
}

module.exports = formatDate;
