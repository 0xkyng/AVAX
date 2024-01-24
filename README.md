# Errors Smart Contract

## Overview

`Errors`is a simple Solidity smart contract that demonstrates the use of `require()`, `assert()`, and `revert()` statements for error handling.
**Features**

`setValue`: This function checks if a given unsigned integer is greater than 0 using the `require()` statement. If the condition is not met, it reverts the transaction and provides an error message.
`incrementValue`: This function checks if a given unsigned integer is greater than 0 using the `assert()` statement. If the condition is not met, it reverts the transaction.
`resetValue`: This function resets the current value to zero if the current value is not zero. If the current value is zero, it reverts the transaction and provides an error message.

