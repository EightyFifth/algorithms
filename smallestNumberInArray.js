function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  console.log("the smallest number: " + arr[smallestIndex] + ", an index of the smallest number: " + smallestIndex);
}
function selectionSort(arr) {
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    theSmallest = findSmallest(arr);
  }
  console.log(theSmallest);
}
selectionSort([5,3,6,4,10]);
