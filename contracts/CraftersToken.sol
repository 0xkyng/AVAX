// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AVAXToken is ERC20 {
    address public owner;

    constructor() ERC20("AVAXToken", "AVT") {
        owner = msg.sender;
    }

    function mint(address _holder, uint _value) public {
        require(msg.sender == owner, "Not Owner");
        _mint(_holder, _value * 1e18);
    }

    function burn(uint _value) public {
        require(balanceOf(msg.sender) >= _value, "Insufficient balance");
        _burn(msg.sender, _value);
    }

    function transfer(address to, uint256 value) public virtual override returns (bool success) {
        success = super.transfer(to, value);
    }
}