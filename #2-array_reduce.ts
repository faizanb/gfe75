/* 
Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
The reduce method can be used to perform operations like summing numbers, concatenating strings, or even transforming data structures. It takes two parameters: a callback function and an optional initial value. If the initial value is not provided, the first element of the array is used as the initial accumulator value.
*/

interface Array<T> {
  myReduce<U>(
    callbackFn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue?: U
  ): U;
}

Array.prototype.myReduce = function <T extends U, U>(
  this: T[],
  callbackFn: (
    previousValue: U,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => U,
  initialValue?: U
) {
  let array = this;
  let accumulator: U;
  let startIndex: number = 0;

  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    if (array.length === 0)
      throw new Error("Reduce on an empty array and no initial value");
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callbackFn(accumulator, array[i], i, array);
  }
  return accumulator;
};
