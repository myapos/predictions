/** This function accepts as a parameter the state and a property of the state and returns
 * the property information from the state */

const findStateProperty = (state, property) => {
  const { persisted } = state;
  const output = persisted[property];

  return output;
};

export default findStateProperty;
