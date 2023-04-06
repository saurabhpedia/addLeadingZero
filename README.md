
# Add leading zero

Here's a JavaScript function that takes a number as an argument and adds a leading zero if the number is less than 9:

You can call this function with a number as an argument and it will return the number with a leading zero if it's less than 9, or the original number if it's 9 or greater:

```
console.log(addLeadingZero(7)); // Output: "07"
console.log(addLeadingZero(13)); // Output: "13"
console.log(addLeadingZero(9)); // Output: "9"

```

Note that this function assumes that the input number is a positive integer. If the input is not a number, the function will return NaN (not a number). You may want to add additional error handling code if needed.



