// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract SmartContract {
	mapping (address => bool) public isPatient;

    event patientAdded(
    	address patientaddress,
    	string firstname,
    	string lastname,
    	string pubKey
    );
    event recordAdded(
    	uint fileCounter, 
    	string hash, 
    	string name,
    	string description,
    	uint time,
    	address owner,
    	address uploader
    );

	struct Patient {
	    string firstname;
	    string lastname;
	    string pubKey;
	}
	    
	mapping (address => Patient) public patientmapping;
	address[] public patientAdd;

	function addPatient(address _patientaddress, string memory _firstname, string memory _lastname, string memory _pubKey) public {
	    isPatient[_patientaddress] = true;
	    patientmapping[_patientaddress].firstname = _firstname;
	    patientmapping[_patientaddress].lastname = _lastname;
	    patientmapping[_patientaddress].pubKey = _pubKey;
	    patientAdd.push(_patientaddress);
	            
	    emit patientAdded(_patientaddress, _firstname, _lastname, _pubKey);
	}

	struct File {
	    uint id;
	    string hash;
	    string name;
	    string description;
	    uint date;
	    address owner;
	    address uploader;
	}
	
	uint fileCounter = 0;    
	mapping (uint => File) public filemapping;
	

	function addRecord(string memory _hash, string memory _name, string memory _description, address _owner) public {
		require (bytes(_hash).length > 0);
		require (bytes(_name).length > 0);
		require (bytes(_description).length > 0);
		require(msg.sender!=address(0));
		require(_owner!=address(0));
		fileCounter = fileCounter + 1;
		filemapping[fileCounter] = File(fileCounter, _hash, _name, _description, block.timestamp, _owner, msg.sender);
		emit recordAdded(fileCounter, _hash, _name, _description, block.timestamp, _owner, msg.sender);
		
	}
}