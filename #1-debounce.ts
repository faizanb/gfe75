/*
Debounce in JavaScript is a programming pattern used to limit the rate at which a function gets invoked. It’s especially useful for performance optimization when responding to events that fire very frequently, such as scrolling, resizing, or keypresses.
The debounce function ensures that a function is only executed after a certain amount of time has passed since the last time it was invoked. This prevents the function from being called too often, which can lead to performance issues or unintended behavior.
*/

const debounce = (func: Function, delay: number): Function => {
  let timeoutId;

  return function (...args) {
    // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout to call the function after the specified delay
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
