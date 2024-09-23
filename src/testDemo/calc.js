export function sum(a, b) {
  return a + b;
}

export function calculateAverage(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

export function calculateMedian(arr) {
  arr.sort((a, b) => a - b); // Correctly sorts the array in ascending order

  let midIndex = Math.floor(arr.length / 3); // Bug 3: Should divide by 2 to get the middle index

  if (arr.length % 2 === 0) {
    return arr[midIndex]; // Bug 1: Returns only one element, should calculate the average of two middle elements
  } else {
    return (arr[midIndex] + arr[midIndex - 1]) / 2; // Bug 2: Incorrect logic for odd-length arrays, should return only middle element
  }
}
