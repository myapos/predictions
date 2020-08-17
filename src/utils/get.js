// http://localhost:1234/src/data/datasets_56102_107707_monthly-beer-production-in-austr.csv
const get = async ({ url, mode = "text" }) => {
  const res = await fetch(url);
  let result;
  if (mode === "json") {
    result = res.json();
  } else {
    result = res.text();
  }

  return result;
};

export default get;
