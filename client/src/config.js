export const USER_ADDRESS = '0x8BDd7ad4CBa803e901C6C81270ae9855E64b7176'

export const USER_ABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "info",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "useraddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "firstname",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "lastname",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "pesel",
          "type": "string"
        }
      ],
      "name": "userAdded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isUser",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "usersAdd",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "usersmapping",
      "outputs": [
        {
          "internalType": "string",
          "name": "firstname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lastname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "pesel",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_useraddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_firstname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_lastname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "pesel",
          "type": "string"
        }
      ],
      "name": "addUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]