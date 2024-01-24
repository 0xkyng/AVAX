// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


contract Errors {
    uint public value;

    // Require statement
    function setValue(uint _value) public {
        require(_value > 0, "Value must be greater than 0");
        value = _value;
    }

    // Assert statement
    function incrementValue(uint _increment) public {
        assert(value + _increment >= value);
        value += _increment;
    }

    // Revert statement
    function resetValue() public {
        if (value == 0) {
            revert("Value must not be 0 to reset");
        }
        value = 0;
    }
}

