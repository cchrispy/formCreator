/*
** A helper function to correct the order of questions
** from a delete or re-order action
*/
const order = (obj, i, len) => {

  var copy = Object.assign({}, obj);
  delete copy[i];

  var index = i;
  while (index < len - 1) {
    copy[index] = copy[++index];
  }
  delete copy[index];

  return copy;
}

const reorder = (obj, i, up) => {

  var copy = Object.assign({}, obj);
  var max = Object.keys(obj).length - 1;
  var temp = copy[i];

  if (up && i) {
    copy[i] = copy[i - 1];
    copy[i - 1] = temp;
  } else if (!up && i < max) {
    copy[i] = copy[i + 1];
    copy[i + 1] = temp;
  } else {
    return false;
  }

  return copy;
}

export { order, reorder };