// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract SmartContract {
	mapping (address => bool) public isPatient;
    event patientAdded(address patientaddress, string firstname, string lastname, string pesel);
    event recordAdded(uint fileCounter, string hash, string name, string description, uint time, address owner, address uploader);

	struct Patient {
	    string firstname;
	    string lastname;
	    string pesel;
	}
	    
	mapping (address => Patient) public patientmapping;
	address[] public patientAdd;

	function addUser(address _patientaddress, string memory _firstname, string memory _lastname, string memory _pubKey, bytes memory _sign) public {
	    isPatient[_patientaddress] = true;
	    patientmapping[_patientaddress].firstname = _firstname;
	    patientmapping[_patientaddress].lastname = _lastname;
	    patientmapping[_patientaddress].pubKey = _pubKey;
	    patientAdd.push(_patientaddress);
	            
	    emit userAdded(_patientaddress, _firstname, _lastname, _pubKey);
	}

	struct File {
	    uint id;
	    string hash;
	    string name;
	    string description;
	    uint date;
	    address owner;
	    address payable uploader;
	    bytes doctorSign;
	}
	
	uint fileCounter = 0;    
	mapping (uint => File) public filemapping;
	address[] public fileAdd;

	

	function addRecord(string memory _hash, string memory _name, string memory _description, address _owner, bytes memory _sign) public {
		require (bytes(_hash).length > 0);
		require (bytes(_name).length > 0);
		require (bytes(_description).length > 0);
		require(msg.sender!=address(0));
		require(_owner!=address(0));
		fileCounter = fileCounter + 1;
		filesmapping[fileCounter] = File(fileCounter, _hash, _name, _description, now, _owner, msg.sender, _sign);
		emit recordAdded(fileCounter, _hash, _name, _description, now, _owner, msg.sender, _sign);
		
	}
	
	function share(){

	}


}