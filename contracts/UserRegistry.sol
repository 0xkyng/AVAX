// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8.0;

contract UserRegistry {
 // Mapping to store registered users
 mapping(address => bool)  registeredUsers;


 // Function to register a user
 function registerUser(address user) public {
    // Ensure the user is not already registered
    require(!registeredUsers[user], "User is already registered");

    // Register the user
    registeredUsers[user] = true;

    // Check if the registration was successful
    assert(registeredUsers[user]);

 }

 // Function to deregister a user
 function deregisterUser(address user) public {
    // Ensure the user is currently registered
    if (!registeredUsers[user]) {
        revert("User is not registered");
    }

    // Deregister the user
    registeredUsers[user] = false;
 }

 // Function to check if a user is registered
 function isRegistered(address user) public view returns (bool) {
    return registeredUsers[user];
 }
}