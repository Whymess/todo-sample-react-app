const compare = (a, b) => {
  const titleOne = a.title.toUpperCase();
  const titleTwo = b.title.toUpperCase();

  let comparison = 0;
  if (titleOne > titleTwo) {
    comparison = 1;
  } else if (titleOne < titleTwo) {
    comparison = -1;
  }
  return comparison;
}


const compareDates = (a, b) => {
        a = a.date.split("-").join("");
        b = b.date.split("-").join("");
        return a > b ? 1 : a < b ? -1 : 0;
      }

export  {compare, compareDates};

