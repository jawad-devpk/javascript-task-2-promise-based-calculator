Task for Tomorrow: “Promise-Based Mini Calculator”

Goal:
Write a JavaScript program that collects two numbers from the user, chooses an operation, and performs the calculation using Promises, not callbacks.
:pushpin: Requirements

1. Prompt the user for:
First number (number)
Second number (number)
Operation (string: "add", "subtract", "multiply", "divide")
:pushpin: 2. Create a function using Promises

computeWithPromise(num1, num2, operation)
This function should:
Return a new Promise(...)
Inside the promise:

If the operation is valid → resolve the result
If the operation is invalid or division by zero → reject with an appropriate error message

:pushpin: 3. Write two .then() / .catch() usages
Example 1 — Show result nicely
Chain .then() on computeWithPromise(...) to show:
“Result of 5 + 3 is: 8”
If error → show error message.

Example 2 — Log result category
Call computeWithPromise(...) again:
If result < 0 → “The result is negative”
If result between 0–100 → “The result is moderate”
If result > 100 → “Wow, that’s a large result!”

Handle rejections with .catch().

:pushpin: 4. What the final usage looks like
Your program should:
Prompt user for num1, num2, operation
Call computeWithPromise(num1, num2, operation)
Once to display formatted output
Once to analyze the result
