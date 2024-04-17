// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RentPay {
    //State variables
    address public owner; //Owner of the contract
    mapping(address => uint256) public balances; // Mapping to track balances of tenants
    mapping(address => uint256) public lockedFunds; //Mapping to track locked funds of tenants
    mapping(address => uint256) public autosavePercentage; // Mapping to track autosave percentage of tenants
    mapping(address => mapping(address => uint256)) public contributions; // Mapping to track contributions from external sources

    event RentPaid(address indexed tenant, uint256 amount); // Event emitted when rent is paid
    event UtilitiesPaid(address indexed tenant, uint256 amount); // Event emitted when utilities are paid
    event FundLocked(address indexed tenant, uint256 amount); // Event emitted when funds are locked
    event AutosaveConfigured(address indexed tenant, uint256 percentage); // Event emitted when autosave is configured
    event ContributionReceived(address indexed contributor, address indexed tenant, uint256 amount); // Event emitted when contribution is received

    constructor() {
        owner = msg.sender; // Assign contract deployer as owner
    }

    // Modifier to allow only owner to execute certain functions
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    // Function to pay rent
    function payRent() external payable {
        require(balances[msg.sender] >= msg.value, "Insufficient funds");
        balances[msg.sender] -= msg.value;
        emit RentPaid(msg.sender, msg.value);
    }

    // Function to pay utilities
    function payUtilities() external payable {
        require(balances[msg.sender] >= msg.value, "Insufficient funds");
        balances[msg.sender] -= msg.value;
        emit UtilitiesPaid(msg.sender, msg.value);
    }

    // Function to lock funds for budgeting
    function lockFunds(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient funds");
        balances[msg.sender] -= amount;
        lockedFunds[msg.sender] += amount;
        emit FundLocked(msg.sender, amount);
    }

    // Function to configure autosave
    function configureAutosave(uint256 percentage) external {
        require(percentage <= 100, "Percentage must be less than or equal to 100");
        autosavePercentage[msg.sender] = percentage;
        emit AutosaveConfigured(msg.sender, percentage);
    }

    // Function for external contribution
    function contribute(address tenant) external payable {
        contributions[tenant][msg.sender] += msg.value;
        emit ContributionReceived(msg.sender, tenant, msg.value);
    }

    // Function to withdraw funds
    function withdraw() external {
        uint256 amount = balances[msg.sender] + lockedFunds[msg.sender];
        require(amount > 0, "No funds to withdraw");
        balances[msg.sender] = 0;
        lockedFunds[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    // Function to withdraw contributions
    function withdrawContributions() external {
        uint256 amount = contributions[msg.sender][msg.sender];
        require(amount > 0, "No contributions to withdraw");
        contributions[msg.sender][msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}
