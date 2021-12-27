// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract User {
	mapping (address => bool) public isUser;
    event userAdded(string info, address useraddress, string firstname, string lastname, string pesel);

	struct User {
	    string firstname;
	    string lastname;
	    string pesel;
	}
	    
	mapping (address => User) public usersmapping;
	address[] public usersAdd;

	function addUser(address _useraddress, string memory _firstname, string memory _lastname, string memory pesel) public {
	    isUser[_useraddress] = true;
	    usersmapping[_useraddress].firstname = _firstname;
	    usersmapping[_useraddress].lastname = _lastname;
	    usersmapping[_useraddress].pesel = pesel;
	    usersAdd.push(_useraddress);
	            
	    emit userAdded('User has been added. ', _useraddress, _firstname, _lastname, pesel);
	}
}