/* Just returns the same state with input */
const follower = ({ getState }) => next => action => {
  // Call the next dispatch method in the middleware chain.
  if (0) {
    console.log('getState:', getState);
  }
  const returnValue = next(action);
  return returnValue;
};

export default follower;
