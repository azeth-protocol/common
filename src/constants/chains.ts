/** Per-chain infrastructure URLs and metadata.
 *
 *  Resolution order for RPC:
 *    1. Explicit `AzethKitConfig.rpcUrl` value
 *    2. Per-chain env var (AZETH_RPC_URL_BASE_SEPOLIA, etc. — see RPC_ENV_KEYS in utils/chains.ts)
 *    3. Chain default from this table (`rpcDefault`)
 *
 *  Resolution order for bundler/paymaster:
 *    1. Explicit config value
 *    2. Environment variable (`AZETH_BUNDLER_URL`, `AZETH_PAYMASTER_URL`)
 *    3. Chain default from this table (bundlerBaseUrl + PIMLICO_API_KEY from env)
 *    4. Error with actionable setup instructions
 */
export interface ChainConfig {
  readonly id: number;
  readonly name: string;
  /** Default public RPC endpoint (always available) */
  readonly rpcDefault: string;
  /** Bundler base URL template — append `?apikey=<KEY>` at runtime.
   *  Undefined = no default template (must provide full URL via env/config). */
  readonly bundlerBaseUrl?: string;
  /** Paymaster base URL template — same pattern as bundlerBaseUrl. */
  readonly paymasterBaseUrl?: string;
}

export const SUPPORTED_CHAINS = {
  base: {
    id: 8453,
    name: 'Base',
    rpcDefault: 'https://mainnet.base.org',
    bundlerBaseUrl: 'https://api.pimlico.io/v2/8453/rpc',
  },
  baseSepolia: {
    id: 84532,
    name: 'Base Sepolia',
    rpcDefault: 'https://sepolia.base.org',
    bundlerBaseUrl: 'https://api.pimlico.io/v2/84532/rpc',
  },
  ethereumSepolia: {
    id: 11155111,
    name: 'Ethereum Sepolia',
    rpcDefault: 'https://11155111.rpc.thirdweb.com',
    bundlerBaseUrl: 'https://api.pimlico.io/v2/11155111/rpc',
  },
  ethereum: {
    id: 1,
    name: 'Ethereum',
    rpcDefault: 'https://eth.merkle.io',
    bundlerBaseUrl: 'https://api.pimlico.io/v2/1/rpc',
  },
} as const satisfies Record<string, ChainConfig>;

export type SupportedChainName = keyof typeof SUPPORTED_CHAINS;

/** Build a full bundler URL from the chain's base URL and an API key.
 *  Returns undefined if either is missing.
 *
 *  @param chainName - Chain to look up (e.g. 'baseSepolia')
 *  @param apiKey - Pimlico API key (from PIMLICO_API_KEY env var)
 */
export function getBundlerUrl(chainName: SupportedChainName, apiKey?: string): string | undefined {
  const chain = SUPPORTED_CHAINS[chainName];
  if (!chain?.bundlerBaseUrl || !apiKey) return undefined;
  return `${chain.bundlerBaseUrl}?apikey=${apiKey}`;
}

/** Build a full paymaster URL from the chain's base URL and an API key.
 *  Returns undefined if either is missing.
 *
 *  Pimlico uses the same endpoint for both bundler and paymaster RPCs —
 *  the differentiation is at the RPC method level (`pm_sponsorUserOperation`
 *  vs `eth_sendUserOperation`), not the URL level.
 *
 *  @param chainName - Chain to look up (e.g. 'baseSepolia')
 *  @param apiKey - Pimlico API key (from PIMLICO_API_KEY env var)
 */
/** Build the Azeth server bundler proxy URL from a server URL.
 *
 *  Used as a fallback when no PIMLICO_API_KEY is available — the Azeth server
 *  proxies bundler requests using its own API key (testnet only).
 *
 *  @param serverUrl - Azeth server URL (e.g. 'https://api.azeth.ai')
 *  @param chainId - Optional chain ID to route to the correct bundler (e.g. 11155111 for Eth Sepolia)
 */
export function getServerBundlerUrl(serverUrl: string, chainId?: number): string {
  const base = `${serverUrl.replace(/\/$/, '')}/api/v1/bundler/rpc`;
  return chainId ? `${base}?chainId=${chainId}` : base;
}

export function getPaymasterUrl(chainName: SupportedChainName, apiKey?: string): string | undefined {
  const chain = SUPPORTED_CHAINS[chainName];
  if (!chain?.bundlerBaseUrl || !apiKey) return undefined;
  // Pimlico shares the same v2 endpoint for both bundler and paymaster
  return `${chain.bundlerBaseUrl}?apikey=${apiKey}`;
}
