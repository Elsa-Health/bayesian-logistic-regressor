export const times = (n: number, iteratee: Function): any[] => {
  var index = -1,
    result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
};

export const sum = (array: number[], iteratee: Function) => {
  var result,
    index = -1,
    length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
};

export const mean = (array: number[], iteratee: Function): number => {
  var length = array == null ? 0 : array.length;
  return length ? sum(array, iteratee) / length : 0 / 0;
};
