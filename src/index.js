module.exports = function toReadable (number) {
  let readableStr = '';
  let numberArr = number.toString().split('');

  if(number >= 100) {
    let str = toReadableToTen(+(numberArr[numberArr.length-3]));
    readableStr = str + ' hundred';
    readableStr = toReadableLessHundred(numberArr, readableStr);
  } else {
    readableStr = toReadableLessHundred(numberArr, readableStr);
  }
  return readableStr.trim() !== '' ? readableStr.trim() : 'zero';
};

function toReadableLessHundred(numberArr, readableStr) {
  let strTenToNineteen = toReadableTenToNineteen(+(numberArr[numberArr.length-2] + numberArr[numberArr.length-1]));
    if(strTenToNineteen !== '') {
      return readableStr = readableStr + ' ' +strTenToNineteen;
    } else {
      let strTens = toReadableTens(+(numberArr[numberArr.length-2]));
      readableStr = readableStr + ' ' + strTens;
      str = toReadableToTen(+(numberArr[numberArr.length-1]));
      return readableStr = readableStr.trim() + ' ' + str;
    }
};

function toReadableToTen(number) {
  let str = '';
  switch(number) {
    case 0: str = '';
    break;
    case 1: str = 'one';
    break;
    case 2: str = 'two';
    break;
    case 3: str = 'three';
    break;
    case 4: str = 'four';
    break;
    case 5: str = 'five';
    break;
    case 6: str = 'six';
    break;
    case 7: str = 'seven';
    break;
    case 8: str = 'eight';
    break;
    case 9: str = 'nine';
    break;
  };
  return str;
};

function toReadableTens(number) {
  let strTens = '';
  switch(number) {
    case 0: strTens = '';
    break;
    case 2: strTens = 'twenty';
    break;
    case 3: strTens = 'thirty';
    break;
    case 4: strTens = 'forty';
    break;
    case 5: strTens = 'fifty';
    break;
    case 6: strTens = 'sixty';
    break;
    case 7: strTens = 'seventy';
    break;
    case 8: strTens = 'eighty';
    break;
    case 9: strTens = 'ninety';
    break;
  };
  return strTens;
};

function toReadableTenToNineteen(number) {
  let strTenToNineteen = '';
  switch(number) {
    case 10: strTenToNineteen = 'ten';
    break;
    case 11: strTenToNineteen = 'eleven';
    break;
    case 12: strTenToNineteen = 'twelve';
    break;
    case 13: strTenToNineteen = 'thirteen';
    break;
    case 14: strTenToNineteen = 'fourteen';
    break;
    case 15: strTenToNineteen = 'fifteen';
    break;
    case 16: strTenToNineteen = 'sixteen';
    break;
    case 17: strTenToNineteen = 'seventeen';
    break;
    case 18: strTenToNineteen = 'eighteen';
    break;
    case 19: strTenToNineteen = 'nineteen';
    break;
  };
  return strTenToNineteen;
};
