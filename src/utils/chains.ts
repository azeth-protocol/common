import type { Chain } from 'viem';
import { base, baseSepolia, sepolia, mainnet } from 'viem/chains';
import type { SupportedChainName } from '../constants/chains.js';

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
