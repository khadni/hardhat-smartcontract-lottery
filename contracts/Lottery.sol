// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

error Raffle__NotEnoughETHEntered();

contract Lottery {

    /* State variables */
    uint256 private immutable s_entranceFee;
    address payable[] private s_players;

    /* Events */
    event lotteryEntered()
    
    
    constructor(uint256 entranceFee){
        s_entranceFee = entranceFee;
    }

    
    
    // Enter the lottery
    function enterLottery() public payable {
        if(msg.value < s_entranceFee){revert Raffle__NotEnoughETHEntered();}
        s_players.push(payable(msg.sender));
        // Events

    }

    function getEntranceFee() public view returns(uint256){};
    function getPlayer(uint256 index) public view returns(address){
        return s_players[index];
    }


    // Pick a random winner (verifiable - Chainlink random)

    // Pick this random winner automatically every X minutes (Chainlink keepers)
}