export const first = (array) => {
  let first = {};
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].isChosen) {
      first = array[i];
      break;
    }
  }
  return first;
};
