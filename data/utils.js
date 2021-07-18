import data from './metal';

function multiply(a, b) {
  // convert to number
  const resNum = Number(a) * Number(b);
  // convert to locale string
  return resNum.toLocaleString();

}

const getCount = data.length;
const getFans = data.reduce((total, band) => total + band.fans, 0);
const formatFans = multiply(getFans, 1000);

const getUniqueCountries = [...new Set(data.map(band => band.origin))];
const getActiveBands = data.filter(band => band.split === '-').length;
const getSplitBands = data.filter(band => band.split !== '-').length;

const getUniqueStyles = [...new Set(data.reduce((styles, band) => styles.concat(band.style.split(",")), []))];

// console.log(getCount)
// console.log(getFans)
// console.log(formatFans)
// console.log(getUniqueCountries)
// console.log(getActiveBands)
// console.log(getUniqueStyles)

export { multiply, getCount, getFans, formatFans, getUniqueCountries, getActiveBands, getSplitBands, getUniqueStyles }
