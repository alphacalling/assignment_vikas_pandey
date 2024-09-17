// Binary Search
function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === target) {
            return mid;
        } else if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; //not found
}

// handling user input
function searchElement() {
    const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const target = parseInt(prompt("enter the element for searching:"), 10);

    if (isNaN(target)) {
        console.log("Invalid input. enter a numeric value.");
        return;
    }

    const index = binarySearch(sortedArray, target);

    if (index === -1) {
        console.log(`element ${target} is not found in array.`);
    } else {
        console.log(`Element ${target} is at index ${index}.`);
    }
}

searchElement();
