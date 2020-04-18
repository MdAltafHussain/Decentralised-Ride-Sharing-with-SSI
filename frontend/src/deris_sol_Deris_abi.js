export const derisInterface = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "riderNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "pick",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "drop",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "escrow",
				"type": "uint256"
			}
		],
		"name": "RiderDetails",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "riderNumber",
				"type": "uint256"
			}
		],
		"name": "RiderPicked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "driverNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bills",
				"type": "uint256"
			}
		],
		"name": "cashMoney",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "riderNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			}
		],
		"name": "imHere",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "driveRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWaitingRiders",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "loc",
				"type": "string"
			}
		],
		"name": "informRider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "payDriver",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "riderNumber",
				"type": "uint256"
			}
		],
		"name": "pickRider",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "pick",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "drop",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "tripCost",
				"type": "uint256"
			}
		],
		"name": "rideRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userReset",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isUser",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			},
			{
				"internalType": "enum Deris.Status",
				"name": "state",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "currPairing",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "pickup",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dropoff",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "escrow",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paid",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]