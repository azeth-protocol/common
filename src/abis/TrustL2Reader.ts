export const TrustL2ReaderAbi = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "_owner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "ROLLUP_TYPE_ARBITRUM",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ROLLUP_TYPE_OP_STACK",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "TRANSFER_DELTA_USD_BASE_SLOT",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "acceptOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "evictProvenDelta",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "account0",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "account1",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getAggregateNetPaidUSD",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "chainIds",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [
      {
        "name": "totalNetPaidUSD",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getChainConfig",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct ITrustL2Reader.L2ChainConfig",
        "components": [
          {
            "name": "chainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "stateRootSource",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "reputationModule",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "rollupType",
            "type": "uint8",
            "internalType": "uint8"
          },
          {
            "name": "gameType",
            "type": "uint32",
            "internalType": "uint32"
          },
          {
            "name": "active",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProvenDelta",
    "inputs": [
      {
        "name": "account0",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "account1",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct ITrustL2Reader.ProvenDelta",
        "components": [
          {
            "name": "usdDelta",
            "type": "int256",
            "internalType": "int256"
          },
          {
            "name": "l2BlockNumber",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "provenAt",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getProvenNetPaidUSD",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "netPaidUSD",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRegisteredChainIds",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "l2Chains",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "stateRootSource",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "reputationModule",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "rollupType",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "gameType",
        "type": "uint32",
        "internalType": "uint32"
      },
      {
        "name": "active",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pendingOwner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "proveL2UsdDelta",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "account0",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "account1",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "stateRootProof",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "accountProof",
        "type": "bytes[]",
        "internalType": "bytes[]"
      },
      {
        "name": "storageProof",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registerL2Chain",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "stateRootSource",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "reputationModule",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "rollupType",
        "type": "uint8",
        "internalType": "uint8"
      },
      {
        "name": "gameType",
        "type": "uint32",
        "internalType": "uint32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setL2ChainActive",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "active",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "L2ChainActiveUpdated",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "active",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "L2ChainRegistered",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "stateRootSource",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "reputationModule",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "rollupType",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
      },
      {
        "name": "gameType",
        "type": "uint32",
        "indexed": false,
        "internalType": "uint32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "L2DeltaEvicted",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "account0",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "account1",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "L2DeltaProven",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "account0",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "account1",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "usdDelta",
        "type": "int256",
        "indexed": false,
        "internalType": "int256"
      },
      {
        "name": "l2BlockNumber",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferStarted",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "ArbitrumPathNotYetValidated",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ChainAlreadyRegistered",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ChainNotActive",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "ChainNotRegistered",
    "inputs": [
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "EmptyChildReference",
    "inputs": []
  },
  {
    "type": "error",
    "name": "EmptyLeafValue",
    "inputs": []
  },
  {
    "type": "error",
    "name": "EmptyNodePath",
    "inputs": []
  },
  {
    "type": "error",
    "name": "EmptyProof",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidAccountRLP",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidAddress",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidBlockHeader",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidBlockHeaderRLP",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidNodeItemCount",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidNodeReference",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidOutputRootVersion",
    "inputs": [
      {
        "name": "version",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ]
  },
  {
    "type": "error",
    "name": "InvalidPairOrdering",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidProof",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidProofNodeHash",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidStateRootLength",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidStateRootProofLength",
    "inputs": [
      {
        "name": "length",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "InvalidStorageRootLength",
    "inputs": []
  },
  {
    "type": "error",
    "name": "KeyTooLongForLeaf",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NothingToEvict",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OwnableInvalidOwner",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "OwnableUnauthorizedAccount",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "PathExceedsKey",
    "inputs": []
  },
  {
    "type": "error",
    "name": "PathMismatch",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ProofEndedBeforeValue",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ProofOutdated",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RLPEmptyInput",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RLPExpectedString",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RLPListDataTruncated",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RLPNonCanonicalLength",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RLPNotAList",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RLPOffsetOutOfBounds",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RLPTruncatedLongLength",
    "inputs": []
  },
  {
    "type": "error",
    "name": "RLPUint256Overflow",
    "inputs": []
  },
  {
    "type": "error",
    "name": "StorageValueTooLarge",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnsupportedRollupType",
    "inputs": [
      {
        "name": "rollupType",
        "type": "uint8",
        "internalType": "uint8"
      }
    ]
  },
  {
    "type": "error",
    "name": "ValueNotFoundInBranch",
    "inputs": []
  }
] as const;
