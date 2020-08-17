const required = (value) => (value ? undefined : "Required");

const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;

const positiveNumber = minValue(1);

const isCidr = (value) =>
  value.match(/^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$/gim)
    ? undefined
    : "Must be in XXXX.XXXX.XXXX.XXXX/XX format";

const isDomain = (value) =>
  value.match(
    /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/gim
  )
    ? undefined
    : "Examples www.mydomain.com, mysubdomain.mydomain.com";

const isEmail = (value) =>
  value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    ? undefined
    : "Example test@test.com";

const isUrl = (value) => {
  console.log("value", value);
  debugger;
  return value.match(
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  )
    ? undefined
    : "Example http://localhost:1234/src/data/datasets_56102_107707_monthly-beer-production-in-austr.csv";
};

export default {
  required,
  composeValidators,
  number,
  minValue,
  positiveNumber,
  isCidr,
  isDomain,
  isEmail,
  isUrl
};
