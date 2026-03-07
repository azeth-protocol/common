import type { Chain } from 'viem';
import { base, baseSepolia, sepolia, mainnet } from 'viem/chains';
import { SUPPORTED_CHAINS, type SupportedChainName } from '../constants/chains.js';

/** Map a SupportedChainName to the corresponding viem Chain object.
 *
 *  Centralises the chain resolution logic so every package
 *  uses the same mapping and new chains only need to be added here.
 */
export function resolveViemChain(chainName: SupportedChainName): Chain {
  switch (chainName) {
    case 'base':
      return base;
    case 'baseSepolia':
      return baseSepolia;
    case 'ethereumSepolia':
      return sepolia;
    case 'ethereum':
      return mainnet;
  }
}

/** Per-chain RPC environment variable names.
 *  Used by server, MCP server, CLI, and provider to resolve custom RPC endpoints.
 *  New chains only need to be added here.
 *
 *  Resolution order (implemented by each package's runtime layer):
 *    1. Per-chain env var (AZETH_RPC_URL_BASE_SEPOLIA, AZETH_RPC_URL_ETH_SEPOLIA, etc.)
 *    2. Chain default from SUPPORTED_CHAINS[chain].rpcDefault (always available)
 */
export const RPC_ENV_KEYS: Record<SupportedChainName, string> = {
  base: 'AZETH_RPC_URL_BASE',
  baseSepolia: 'AZETH_RPC_URL_BASE_SEPOLIA',
  ethereumSepolia: 'AZETH_RPC_URL_ETH_SEPOLIA',
  ethereum: 'AZETH_RPC_URL_ETHEREUM',
};
