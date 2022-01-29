// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract SmartContract {
	
	mapping (address => bool) public isDoctor;

    event patientAdded(
    	address patientaddress,
    	string firstname,
    	string lastname,
    	string pubKey
    );

    event recordAdded(
    	uint yourFilesCounter, 
    	string hash, 
    	string name,
    	string description,
    	uint time,
    	address owner,
    	address uploader
    );

    event recordShared(
    	string hash, 
    	uint time,
    	address owner,
    	address provider
    );

	

	modifier OnlyPatient(){
        require(isPatient[msg.sender] == true);
        _;
    }

	struct Doctor {
		string firstname;
	    string lastname;
	    string pubKey;
	    string specialization;
	}

	modifier OnlyDoctor(){
        require(isDoctor[msg.sender] == true);
        _;
    }

	constructor() public {
		isDoctor[0x39f573c0f078847939AAEeEDca6BEe1cFE772086] = true;
	    doctormapping[0x39f573c0f078847939AAEeEDca6BEe1cFE772086].firstname = "Dr";
	    doctormapping[0x39f573c0f078847939AAEeEDca6BEe1cFE772086].lastname = "Dre";
	    doctormapping[0x39f573c0f078847939AAEeEDca6BEe1cFE772086].pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDc1gwzDAB4caggM2YfNZCmu1fAv/lF0lWgaOq3wvHyLtw2Thgu56yWpQCp/DNEy4IsgBt0cOSP0SSTNGP1V134gJBqitsnorZe0dRiO/6AaSZC/mFAQEg8ah/HRsgPC3GQyWv7RYMCi3qap+q1M8nDONEfNBCPibeACyx9MDzvAwIDAQAB";
	    doctormapping[0x39f573c0f078847939AAEeEDca6BEe1cFE772086].specialization = "Cardiologist";
	    doctorAdd.push(0x39f573c0f078847939AAEeEDca6BEe1cFE772086);

	    isDoctor[0x69fD5F300FAac374A89a4C785D6941C33e97d2E6] = true;
	    doctormapping[0x69fD5F300FAac374A89a4C785D6941C33e97d2E6].firstname = "Dr";
	    doctormapping[0x69fD5F300FAac374A89a4C785D6941C33e97d2E6].lastname = "Oetker";
	    doctormapping[0x69fD5F300FAac374A89a4C785D6941C33e97d2E6].pubKey = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKQg3vULtr05OVkd1PVsbVmxMJiMw0rJQjc/sgEMzoKCD4w91U+eljCnKYGLMmJvvYKFNFQBDvO3qTcV3apeil0CAwEAAQ==";
	    doctormapping[0x69fD5F300FAac374A89a4C785D6941C33e97d2E6].specialization = "Pediatrician";
	    doctorAdd.push(0x69fD5F300FAac374A89a4C785D6941C33e97d2E6);

	    isDoctor[0xAFfa5DEb9b4aA5F1d3d722b82D64079fFa0e8bC2] = true;
	    doctormapping[0xAFfa5DEb9b4aA5F1d3d722b82D64079fFa0e8bC2].firstname = "Dr";
	    doctormapping[0xAFfa5DEb9b4aA5F1d3d722b82D64079fFa0e8bC2].lastname = "Gerard";
	    doctormapping[0xAFfa5DEb9b4aA5F1d3d722b82D64079fFa0e8bC2].pubKey = "MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAdVLn/yPGs79jD81sbsvYlzD028swyvON6O/4DKGo8l/Fsn7lRS/SKn8ZUBNCM9XUWti4C2OvWKaE2PHTvF0vNQIDAQAB";
	    doctormapping[0xAFfa5DEb9b4aA5F1d3d722b82D64079fFa0e8bC2].specialization = "Immunologist";
	    doctorAdd.push(0xAFfa5DEb9b4aA5F1d3d722b82D64079fFa0e8bC2);
	}
	


	
	mapping (address => Doctor) public doctormapping;
	address[] public doctorAdd;

	struct Patient {
	    string firstname;
	    string lastname;
	    string pubKey;
        mapping (uint => File) yourfiles;
        mapping (uint => SharedFile) sharedWithYou;
        uint yourFilesCounter;
        uint sharedWithYouCounter;
	}
	
	mapping (address => bool) public isPatient;
	mapping (address => Patient) public patientmapping;
	address[] public patientAdd;

	function addPatient(address _patientaddress, string memory _firstname, string memory _lastname, string memory _pubKey) public {
	    isPatient[_patientaddress] = true;
	    patientmapping[_patientaddress].firstname = _firstname;
	    patientmapping[_patientaddress].lastname = _lastname;
	    patientmapping[_patientaddress].pubKey = _pubKey;
        patientmapping[_patientaddress].yourFilesCounter = 0;
        patientmapping[_patientaddress].sharedWithYouCounter = 0;
	    patientAdd.push(_patientaddress);
	            
	    emit patientAdded(_patientaddress, _firstname, _lastname, _pubKey);
	}

	mapping (address => bool) canView;


	struct SharedFile {
	    string hash;
	    string name;
	    string description;
	    uint date;
	    address owner;
	    string key;
	}


	function share(uint id, string memory hash, string memory name, string memory description, address provider, string memory key) public{
		require(msg.sender == filemapping[id].owner);

        uint counter = patientmapping[provider].sharedWithYouCounter;
		patientmapping[provider].sharedWithYouCounter = counter + 1;
        patientmapping[provider].sharedWithYou[counter] = SharedFile(hash, name, description, block.timestamp, msg.sender, key);
        
        emit recordShared(hash, block.timestamp, msg.sender, provider);
    }

	struct File {
	    uint id;
	    string hash;
	    string name;
	    string description;
	    uint date;
	    address owner;
	    address uploader;
	    string key;
	}
	
	uint public id = 0;    
	mapping (uint => File) public filemapping;
	

	function addRecord(string memory _hash, string memory _name, string memory _description, address _owner, string memory key) public {
		require (bytes(_hash).length > 0);
		require (bytes(_name).length > 0);
		require (bytes(_description).length > 0);
		require (msg.sender!=address(0));
		require (_owner!=address(0));
		uint counter = patientmapping[_owner].yourFilesCounter;
		patientmapping[_owner].yourFilesCounter = counter + 1;

		id = id + 1;
        patientmapping[_owner].yourfiles[counter] = File(id, _hash, _name, _description, block.timestamp, _owner, msg.sender, key);
        
        
		filemapping[id] = File(id, _hash, _name, _description, block.timestamp, _owner, msg.sender, key);
		emit recordAdded(id, _hash, _name, _description, block.timestamp, _owner, msg.sender);		
	}

    function getPatientFiles(address patientAddress, uint index) public  view  returns  (File memory) {
		File memory file = patientmapping[patientAddress].yourfiles[index];
		return file;
	}

	function getSharedWithYouFiles(address patientAddress, uint index) public  view  returns  (SharedFile memory) {
		SharedFile memory sharedFile = patientmapping[patientAddress].sharedWithYou[index];
		return sharedFile;
	}
}