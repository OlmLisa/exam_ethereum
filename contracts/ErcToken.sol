pragma solidity >=0.4.22 <0.7.0;

contract ErcToken {

    string public name;
    string public symbol;
    uint256 public nbOfholder;
    uint256 public totalSupply;

    // struct Bank {
    //     Account [] accounts;
    // }

    struct Account {
        address payable compte;
        uint256 depot;
    }

    mapping(address => Account) accounts;

    // Map des adresses
    mapping(address => uint) public balances;

    address [] public holders;

    // Constructeur pour assigner les tokens au owner du contrat
    constructor(string memory _name, string memory _symbol, uint _totalSupply, uint _nbOfholder) public {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        balances[msg.sender] = totalSupply;
        nbOfholder = _nbOfholder;
    }

    function transfer(address _to, uint tokens) public returns (bool success){
        require(balances[msg.sender] >= tokens, "Pas assez de fonds...");
        balances[msg.sender] -= tokens;
        balances[_to] += tokens;
        if(balances[_to] == tokens){
            holders.push(_to);
            nbOfholder = holders.length;
            newAccount(_to, 0);
        }
        return true;
    }

    function newAccount(address compte, uint256 depot) public {
        Account storage account = accounts[compte];
        account.depot = depot;
    }

    function getHolders() public view returns (address [] memory) {
        return holders;
    }

    function tokenTransaction(address _from, address _to, uint256 tokens) public returns (bool success){
        require(balances[_from] >= tokens, "Your balance is too low");
        balances[_from] -= tokens;
        balances[_to] += tokens;
        if(balances[_to] == tokens){
            holders.push(_to);
            nbOfholder = holders.length;
        }
        return true;
    }


    function deposit(address _to, uint256 tokens) public returns (bool success){
        require(balances[_to] >= tokens, "Your balance is too low");
        balances[_to] -= tokens;
        accounts[_to].depot += tokens;
        return true;
    }

    function retire(address _to, uint256 tokens) public returns (bool success){
        require(accounts[_to].depot >= tokens, "Your balance is too low");
        balances[_to] += tokens;
        accounts[_to].depot -= tokens;
        return true;
    }


    function getDepot(address _to) public view returns (uint256){
        return accounts[_to].depot;
    }

    function getNbHolder() public view returns (uint256){
        return nbOfholder;
    }

    function getName() public view returns (string memory){
        return name;
    }

    function getSymbol() public view returns (string memory){
        return symbol;
    }

    function getTotalSupply() public view returns (uint256){
        return totalSupply;
    }

    function getBalance(address _balanceAddress) public view returns (uint){
        return balances[_balanceAddress];
    }

    function initBalance(uint128 _valeur) public returns (bool success){
        balances[msg.sender] = _valeur;
        return true;
    }
}
