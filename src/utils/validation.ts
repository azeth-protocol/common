import { SUPPORTED_CHAINS, type SupportedChainName } from '../constants/chains.js';

/** All supported chain names, derived from SUPPORTED_CHAINS at runtime */
const VALID_CHAIN_NAMES = new Set(Object.keys(SUPPORTED_CHAINS));

/** Map of chain aliases to canonical chain names */
const CHAIN_ALIASES: Record<string, SupportedChainName> = {
  'base': 'base',
  'basesepolia': 'baseSepolia',
  'base-sepolia': 'baseSepolia',
  'ethereumsepolia': 'ethereumSepolia',
  'ethereum-sepolia': 'ethereumSepolia',
  'eth-sepolia': 'ethereumSepolia',
  'sepolia': 'ethereumSepolia',
  'ethereum': 'ethereum',
  'eth': 'ethereum',
  'mainnet': 'ethereum',
};

/** Map of chain IDs to canonical chain names */
const CHAIN_ID_MAP: Record<number, SupportedChainName> = Object.fromEntries(
  Object.entries(SUPPORTED_CHAINS).map(([name, config]) => [config.id, name as SupportedChainName]),
);

/** Resolve a chain alias (case-insensitive) to a canonical SupportedChainName.
 *  Returns undefined if the alias is not recognized.
 */
export function resolveChainAlias(input: string): SupportedChainName | undefined {
  // Try exact match first
  if (VALID_CHAIN_NAMES.has(input)) return input as SupportedChainName;
  // Try lowercase alias
  return CHAIN_ALIASES[input.toLowerCase()];
}

/** Resolve a chain ID to a canonical SupportedChainName.
 *  Returns undefined if the chain ID is not recognized.
 */
export function chainIdToName(chainId: number): SupportedChainName | undefined {
  return CHAIN_ID_MAP[chainId];
}

/** Validate an Ethereum address (0x-prefixed, 40 hex chars) */
export function isValidAddress(address: string): address is `0x${string}` {
  return /^0x[0-9a-fA-F]{40}$/.test(address);
}

/** Validate and return a typed Ethereum address, or throw */
export function validateAddress(address: string): `0x${string}` {
  if (!isValidAddress(address)) {
    throw new Error('Invalid Ethereum address format');
  }
  return address;
}

/** Check if an address is the zero address */
export function isZeroAddress(address: string): boolean {
  return address === '0x0000000000000000000000000000000000000000';
}

/** Validate a private key format (0x-prefixed, 64 hex chars) */
export function isValidPrivateKey(key: string): boolean {
  return /^0x[0-9a-fA-F]{64}$/.test(key);
}

/** Validate and return a typed private key, or throw */
export function validatePrivateKey(key: string): `0x${string}` {
  if (!isValidPrivateKey(key)) {
    throw new Error('Invalid private key format. Must be 0x-prefixed followed by 64 hex characters.');
  }
  return key as `0x${string}`;
}

/** Validate a chain name against supported chains */
export function isValidChainName(chain: string): chain is SupportedChainName {
  return VALID_CHAIN_NAMES.has(chain);
}

/** Validate and return a typed chain name, or throw.
 *  Accepts aliases (e.g. 'base-sepolia', 'eth-sepolia', 'sepolia').
 */
export function validateChainName(chain: string): SupportedChainName {
  const resolved = resolveChainAlias(chain);
  if (!resolved) {
    const valid = Array.from(VALID_CHAIN_NAMES).join(', ');
    throw new Error(`Invalid chain "${chain}". Must be one of: ${valid}`);
  }
  return resolved;
}

/** Validate a bytes32 hex string (0x-prefixed, 64 hex chars) */
export function isValidBytes32(value: string): boolean {
  return /^0x[0-9a-fA-F]{64}$/.test(value);
}

/** Validate a URL, optionally requiring HTTPS */
export function isValidUrl(url: string, requireHttps = false): boolean {
  try {
    const parsed = new URL(url);
    if (requireHttps && parsed.protocol !== 'https:') return false;
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
    if (!parsed.hostname) return false;
    return true;
  } catch {
    return false;
  }
}

/** Validate a BigInt is within uint256 range */
export function isValidUint256(value: bigint): boolean {
  return value >= 0n && value < 2n ** 256n;
}
