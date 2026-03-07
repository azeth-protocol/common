/** Shared EIP-712 type definitions for AzethFactory.createAccountWithSignature.
 *  Used by both the SDK (signing) and the server (verification). Single source of truth. */

/** EIP-712 domain parameters for AzethFactory */
export const AZETH_FACTORY_DOMAIN = {
  name: 'AzethFactory',
  version: '1.1',
} as const;

/** EIP-712 typed data structure for CreateAccount signatures.
 *  Note: protocols, tokens, and agentURI are pre-hashed to bytes32 before signing
 *  because the contract uses keccak256(abi.encodePacked(...)) for dynamic arrays. */
export const CREATE_ACCOUNT_TYPES = {
  CreateAccount: [
    { name: 'owner', type: 'address' },
    { name: 'salt', type: 'bytes32' },
    { name: 'guardrails', type: 'Guardrails' },
    { name: 'protocolsHash', type: 'bytes32' },
    { name: 'tokensHash', type: 'bytes32' },
    { name: 'agentURIHash', type: 'bytes32' },
    { name: 'nonce', type: 'uint256' },
  ],
  Guardrails: [
    { name: 'maxTxAmountUSD', type: 'uint256' },
    { name: 'dailySpendLimitUSD', type: 'uint256' },
    { name: 'guardianMaxTxAmountUSD', type: 'uint256' },
    { name: 'guardianDailySpendLimitUSD', type: 'uint256' },
    { name: 'guardian', type: 'address' },
    { name: 'emergencyWithdrawTo', type: 'address' },
  ],
} as const;
