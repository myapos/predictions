/* Log redux actions in console */
const logger = ({ getState }) => next => action => {
  console.log('will dispatch', action);

  // Call the next dispatch method in the middleware chain.
  const returnValue = next(action);

  console.log('state after dispatch', getState());

  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue;
};

export default logger;
