import bands from './metal-all';

function multiply(a, b) {
  // convert to number
  const resNum = Number(a) * Number(b);
  // convert to locale string
  return resNum.toLocaleString();
}

// sort array of objects alphabetically
function alphabetize(array) {
  const copied = [...array];
  copied.sort((a,b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  })
  return copied;
};

// const burp = data.map(band => band.band_name);
// const boop = alphabetize(burp);
// console.log(boop);

const uniqueBands = [...new Set(bands.map(band => band.band_name))];

// return a new array with that maps unqiue band names to the first object in bands that has that band name
const bandMap = uniqueBands.map(band => {
  return bands.find(bandObj => bandObj.band_name === band);
});

const data = bandMap;
// console.log(data.length, bands.length);

const getCount = data.length;
const getFans = data.reduce((total, band) => total + band.fans, 0);
const formatFans = multiply(getFans, 1000);

const getUniqueCountries = [...new Set(data.map(band => band.origin))];
const getActiveBands = data.filter(band => band.split === '-').length;
const getSplitBands = data.filter(band => band.split !== '-').length;

const getUniqueStyles = [...new Set(data.reduce((styles, band) => styles.concat(band.style.split(",")), []))];

// group band objects by style
const groupByStyle = data.reduce((styles, band) => {
  const style = band.style.split(",");
  styles[style[0]] = styles[style[0]] || [];
  styles[style[0]].push(band);
  return styles;
}, {});

// console.log(getCount)
// console.log(getFans)
// console.log(formatFans)
// console.log(getUniqueCountries)
// console.log(getActiveBands)
// console.log(getUniqueStyles);
// console.log(groupByStyle['Heavy']);

export { alphabetize, multiply, bandMap, getCount, getFans, formatFans, getUniqueCountries, getActiveBands, getSplitBands, getUniqueStyles, groupByStyle }
