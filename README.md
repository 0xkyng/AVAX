# User Registry Smart Contract

## Introduction

The User Registry Smart Contract is a Solidity contract designed to implement and showcase the usage of `require()`, `assert()`, and `revert()` statements. It manages user registrations on the Ethereum blockchain, providing a simple and secure way to register, deregister, and check the registration status of users.

## Features

- **User Registration**: Allows users to register by adding their Ethereum address to the registry.
- **Deregistration**: Provides a mechanism for users to deregister if needed.
- **Registration Status Check**: Allows anyone to check whether a specific Ethereum address is registered.

## Smart Contract Details

- **Solidity Version**: 0.8.8
- **License**: MIT (See [LICENSE](./LICENSE))

## Smart Contract Functions

### `registerUser(address user)`

Registers a user by adding their Ethereum address to the registry.

**Parameters:**
- `user` (address): Ethereum address of the user.

**Note:** This function uses the `require()` statement to ensure that a user cannot be registered more than once.

### `deregisterUser(address user)`

Deregisters a user by removing their Ethereum address from the registry.

**Parameters:**
- `user` (address): Ethereum address of the user.

**Note:** This function uses the `require()` statement to ensure that only registered users can be deregistered. It also uses `revert()` to provide a specific error message if the user is not registered.

### `isRegistered(address user)`

Checks if a user is registered.

**Parameters:**
- `user` (address): Ethereum address of the user.

**Returns:**
- `true` if the user is registered.
- `false` if the user is not registered.

**Note:** This function uses the `assert()` statement to ensure that the registration status check is accurate.

