pragma solidity ^0.5.0;

contract FundTransfer {
    
    // state variable
    address nodeAddress;
    
    constructor() public {
        nodeAddress = msg.sender;
    }
    
    //event to alert after successful transaction
    event TransferEvent(address indexed toAddress, uint amount);
    
    // function to transfer the amount
    function fundTransfer(address fromAddress, address payable toAddress) public payable checkSender(fromAddress, toAddress) {
        toAddress.transfer(msg.value);
        emit TransferEvent(toAddress, msg.value);
    }
    
    //modifier to validate the transaction
    modifier checkSender(address fromAddress, address toAddress) {
        require(fromAddress != toAddress, "Sender and Receiver Cannot be Same");
        _;
    }
      
}
