import { WINDOW_SIZE } from "../constants";
// plot sma
/** It will return an object that will be used to plot SMA values in the same line chart
 * with the raw data. For the first window_size values do not give sma
 * if values counter > window_size then the sma value is matched with the next date
 * until next date exist  */
function plotSMA({ sma, window_size = WINDOW_SIZE, processed }) {
  const matchSMADates = {};
  sma.forEach((value, index) => {
    if (index >= window_size && index + 1 < sma.length) {
      const { set } = sma[index + 1];
      matchSMADates[set[set.length - 1].xs] = {
        xs: set[set.length - 1].xs,
        sma: value.sma
      };
    }
  });

  // merge matchSMADates with processed
  // if date exist in  processed values then add the sma

  const newProcessed = processed.map((value, index) => {
    const smaValues = { xs: "", sma: "" };

    if (matchSMADates[value.xs]) {
      smaValues.sma = matchSMADates[value.xs].sma;
      smaValues.xs = matchSMADates[value.xs].xs;
    }

    return {
      ...value,
      ...smaValues
    };
  });

  return newProcessed;
}

export default plotSMA;
