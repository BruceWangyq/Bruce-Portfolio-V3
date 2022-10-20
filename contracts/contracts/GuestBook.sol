// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract GuestBook {
    struct Message {
        address sender;
        string message;
    }

    Message[] messages;

    mapping(address => uint256) public lastMessagedAt;

    function message(string memory _message) public {
        require(
            lastMessagedAt[msg.sender] + 30 seconds < block.timestamp,
            "Wait 30 seconds"
        );

        lastMessagedAt[msg.sender] = block.timestamp;

        messages.push(Message(msg.sender, _message));
    }

    function getAllMessages() public view returns (Message[] memory) {
        return messages;
    }
}