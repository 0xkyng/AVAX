# DegenToken Smart Contract

## Overview

`DegenToken` is an ERC-20 token named "Degen" with the symbol "DGN" deployed on the Avalanche Fuji Testnet. This token allows the owner to mint new tokens, create items associated with unique IDs, burn tokens, and redeem items. The contract is built on the Ethereum blockchain using OpenZeppelin's ERC-20 implementation.

## Contract Details

### Token Information

- **Name:** Degen
- **Symbol:** DGN

### Functions

1. **Constructor:**

   - Initializes the ERC-20 token with the specified name and symbol.
   - Sets the contract deployer as the owner.

2. **mint(address to, uint256 amount):**

   - Mints new tokens and assigns them to the specified address.
   - Only the contract owner can call this function.

3. **createItems(string memory \_name, uint256 amount):**

   - Creates items associated with unique IDs.
   - Only the contract owner can call this function.

4. **burn(uint amount):**

   - Burns a specified amount of tokens from the caller's balance.
   - Ensures that the caller has a sufficient balance to burn.

5. **redeem(uint8 itemID\_):**

   - Redeems items associated with a given item ID.
   - Transfers the ownership of the item to the caller.

6. **viewItemOwner(uint8 itemID\_):**

   - Returns the current owner of the item associated with the given item ID.

7. **showItem(uint id\_):**
   - Returns detailed information about the item associated with the given ID.

## Deployment

The contract is deployed on the Avalanche Fuji Testnet at the following address: [DegenToken Contract](https://testnet.snowtrace.io/address/0x3330Ec15317EB7f4Dc50C807C269B1d2e568E87d).

## Interacting with the Contract

- The contract owner can mint new tokens and create items using the respective functions.
- Any address with a balance can burn their tokens.
- Items can be redeemed by calling the `redeem` function, and their ownership can be viewed using the `viewItemOwner` function.
- Detailed information about items can be obtained using the `showItem` function.

## Disclaimer


This contract is provided under the MIT License. Use it at your own risk. Be sure to review and test the contract thoroughly before deploying it in a production environment.