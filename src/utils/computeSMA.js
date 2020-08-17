import { WINDOW_SIZE } from "../constants";

function computeSMA(time_s, window_size = WINDOW_SIZE, property = "ys") {
  let r_avgs = [],
    avg_prev = 0;
  for (let i = 0; i <= time_s.length - window_size; i++) {
    let curr_avg = 0.0,
      t = i + window_size;
    for (let k = i; k < t && k <= time_s.length; k++)
      curr_avg += time_s[k][property] / window_size;

    r_avgs.push({ set: time_s.slice(i, i + window_size), sma: curr_avg });

    avg_prev = curr_avg;
  }

  return r_avgs;
}

export default computeSMA;
