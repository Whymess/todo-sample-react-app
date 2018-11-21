export default function compare(a, b) {
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

