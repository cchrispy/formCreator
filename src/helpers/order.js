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

export default order;