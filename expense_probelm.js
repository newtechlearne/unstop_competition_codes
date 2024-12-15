function reportExpenses(balanceSheet) {
  let expenseCount = 0;
  let expenseSum = 0;

  for (let item of balanceSheet) {
    let value = "";

    // Extract numeric part of the string manually
    for (let char of item) {
      if (!isNaN(char) || char === '.' || char === '-' || char === '+') {
        value += char;
      }
    }

    // Parse the value to a number
    if (!isNaN(value) && value !== "") {
      let number = parseFloat(value);

      // Check if it's an expense (negative value)
      if (number < 0) {
        expenseCount++;
        expenseSum += Math.abs(number); // Add absolute value to the sum
      }
    }
  }

  // Return the result in the specified format
  return `expenseCount: ${expenseCount}, expenseSum: ${expenseSum.toFixed(2)}`;
}

// Examples
console.log(reportExpenses(["$1.23", "-5", "-$3.00"])); // expenseCount: 2, expenseSum: 8.00
console.log(reportExpenses(["$1.23", "$5.02", "-$0.00"])); // expenseCount: 0, expenseSum: 0.00
console.log(reportExpenses(["-$100.43", "$23.01", "-50", "Invalid", "100"])); // expenseCount: 2, expenseSum: 150.43
