// function
function isPalindrome(str) {
    // converting lower case and removing alphanumeric char 
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

    // Two-pointer technique
    let left = 0;
    let right = normalizedStr.length - 1;

    while (left < right) {
        if (normalizedStr[left] !== normalizedStr[right]) {
            return false;  //not matched 
        }
        left++;
        right--;
    }

    return true;  //matched
}

// user input 
const inputStr = prompt('Enter a string:');

// if found
if (isPalindrome(inputStr)) {
    alert(`The string '${inputStr}' is a palindrome.`);
} else {
    alert(`The string '${inputStr}' is not a palindrome.`);
}


