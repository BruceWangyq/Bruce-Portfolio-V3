// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract GuestBook {
    struct Message {
        address sender;
        string name;
        string message;
        uint256 timestamp;
    }

    Message[] public messages;

 

    function message(string memory _name, string memory _message) public {
        messages.push(Message(msg.sender, _name ,_message, block.timestamp));
    }

    function getAllMessages() public view returns (Message[] memory) {
        return messages;
    }
}