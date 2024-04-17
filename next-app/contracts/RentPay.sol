// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RentPay {
    //State variables
    address public owner; //Owner of the contract
    mapping(address => uint256) public balances; // Mapping to track balances of tenants
    mapping(address => uint256) public lockedFunds; //Mapping to track locked funds of tenants
    mapping(address => uint256) public autosavePercentage; // Mapping to track autosave percentage of tenants
    mapping(address => mapping(address => uint256)) public contributions; // Mapping to track contributions from external sources

    event RentPaid(address indexed tenant, uint256 amount);
    event UtilitiesPaid(address indexed tenant, uint256 amount);
    event FundLocked(address indexed tenant, uint256 amount);
    event AutosaveConfigured(address indexed tenant, uint256 percentage);
    event ContributionReceived(address indexed contributor, address indexed tenant, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function payRent() external payable {
        require(balances[msg.sender] >= msg.value, "Insufficient funds");
        balances[msg.sender] -= msg.value;
        emit RentPaid(msg.sender, msg.value);
    }

    function payUtilities() external payable {
        require(balances[msg.sender] >= msg.value, "Insufficient funds");
        balances[msg.sender] -= msg.value;
        emit UtilitiesPaid(msg.sender, msg.value);
    }

    function lockFunds(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient funds");
        balances[msg.sender] -= amount;
        lockedFunds[msg.sender] += amount;
        emit FundLocked(msg.sender, amount);
    }

    function configureAutosave(uint256 percentage) external {
        require(percentage <= 100, "Percentage must be less than or equal to 100");
        autosavePercentage[msg.sender] = percentage;
        emit AutosaveConfigured(msg.sender, percentage);
    }

    function contribute(address tenant) external payable {
        contributions[tenant][msg.sender] += msg.value;
        emit ContributionReceived(msg.sender, tenant, msg.value);
    }

    function withdraw() external {
        uint256 amount = balances[msg.sender] + lockedFunds[msg.sender];
        require(amount > 0, "No funds to withdraw");
        balances[msg.sender] = 0;
        lockedFunds[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function withdrawContributions() external {
        uint256 amount = contributions[msg.sender][msg.sender];
        require(amount > 0, "No contributions to withdraw");
        contributions[msg.sender][msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}
