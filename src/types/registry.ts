import type { EntityType } from './participant.js';
import type { WeightedReputation } from './reputation.js';

/** Accepted payment method for a catalog entry.
 *  Providers can accept payments on multiple chains and tokens. */
export interface CatalogAccepts {
  /** CAIP-2 network identifier (e.g., "eip155:84532" for Base Sepolia) */
  network: string;
  /** ERC-20 token contract address on the specified network.
   *  Use "0x0000000000000000000000000000000000000000" for native ETH. */
  asset: `0x${string}`;
  /** Human-readable token symbol for display (e.g., "USDC", "ETH") */
  symbol?: string;
}

/** HTTP methods supported by catalog entries */
export type CatalogMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/** A single offering in a service provider's catalog.
 *
 *  Multi-service providers list their offerings here, each with its own
 *  path, pricing, capabilities, and accepted payment methods.
 *
 *  Catalogs are OFF-CHAIN — served from the provider's endpoint (e.g.,
 *  `GET {endpoint}/.well-known/azeth-catalog.json`). They may be included
 *  in the initial tokenURI as a snapshot/fallback, but are NOT updated
 *  on-chain. Providers update their catalog by updating their endpoint.
 *
 *  Design rationale:
 *  - Catalogs are operational (change frequently) vs identity (change rarely).
 *  - x402 V2 has no catalog/directory standard — its Discovery extension
 *    is facilitator-facing, not agent-facing.
 *  - Google A2A x402 targets single resources per task, no catalog concept.
 *  - This schema fills the gap: structured enough for autonomous agent
 *    routing, lightweight enough for off-chain provider responses. */
export interface CatalogEntry {
  /** Display name for this offering */
  name: string;
  /** URL path relative to the provider's base endpoint.
   *  Supports path parameters in curly braces (e.g., "/{coinId}").
   *  The full URL is constructed as `${endpoint}${path}`. */
  path: string;
  /** HTTP method. Defaults to "GET" when omitted. */
  method?: CatalogMethod;
  /** What this offering does */
  description?: string;
  /** Listed price (e.g., "$0.01/request", "Free", "$10/month").
   *  Informational — actual settlement price comes from the x402 402 response. */
  pricing?: string;
  /** Response content type. Defaults to "application/json" when omitted. */
  mimeType?: string;
  /** Capabilities specific to this catalog entry for granular smart_pay matching.
   *  If omitted, the entry inherits from the parent service's capabilities. */
  capabilities?: string[];
  /** Path parameter descriptions. Keys are parameter names (matching `{param}` in path),
   *  values are human-readable descriptions with valid options.
   *  Example: `{ "coinId": "bitcoin, ethereum, solana, usd-coin" }` */
  params?: Record<string, string>;
  /** Whether this endpoint requires x402 payment. Defaults to true when omitted.
   *  Set to false for free endpoints (health checks, listings, metadata). */
  paid?: boolean;
  /** Accepted payment methods for this offering. Each entry specifies a
   *  network + asset pair the provider will accept.
   *  If omitted, inherits from the x402 402 response at call time. */
  accepts?: CatalogAccepts[];
}

/** Maximum number of entries in a service catalog (practical limit for API responses) */
export const CATALOG_MAX_ENTRIES = 20;

/** Maximum path length for a catalog entry */
export const CATALOG_MAX_PATH_LENGTH = 512;

/** Valid HTTP methods for catalog entries */
export const CATALOG_METHODS: readonly CatalogMethod[] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] as const;

export interface RegistryEntry {
  tokenId: bigint;
  owner: `0x${string}`;
  entityType: EntityType;
  name: string;
  description: string;
  capabilities: string[];
  /** Service endpoint URL. Optional for infrastructure nodes. */
  endpoint?: string;
  /** Listed service price (e.g., "$0.01/request"). Informational — actual
   *  settlement price comes from the x402 402 response at transaction time. */
  pricing?: string;
  /** Off-chain service catalog for multi-service providers. Each entry describes
   *  one offering with its own path, pricing, and description. Populated from the
   *  provider's endpoint, not from on-chain storage. Optional — single-service
   *  providers use the top-level endpoint and pricing instead. */
  catalog?: CatalogEntry[];
  active: boolean;
  /** Payment-weighted reputation score (0-100). Populated when discovery
   *  is called with sortByReputation or minReputation. */
  reputation?: number;
}

export interface DiscoveryParams {
  capability?: string;
  entityType?: EntityType;
  /** Exact case-insensitive name match (NOT substring). */
  name?: string;
  /** Filter by owner address (case-insensitive). Returns all entries for this owner. */
  owner?: `0x${string}`;
  minReputation?: number;
  /** When true, results are sorted by reputation score (highest first).
   *  Triggers reputation lookup even when minReputation is not set. */
  sortByReputation?: boolean;
  limit?: number;
  offset?: number;
}

/** Registry entry enriched with cache metadata */
export interface CachedRegistryEntry extends RegistryEntry {
  /** When this entry was cached (unix ms) */
  cachedAt: number;
  /** Cached weighted reputation (may be stale within TTL) */
  reputationScore?: WeightedReputation;
  /** How this entry entered the cache.
   *  Note: distinct from DiscoveryWithFallbackResult.source ('server'|'on-chain')
   *  and SyncStats.source ('full'|'incremental') — this describes the cache ingestion path. */
  source: 'full-sync' | 'event' | 'manual';
}

/** Statistics from a cache sync operation */
export interface SyncStats {
  totalEntries: number;
  newEntries: number;
  updatedEntries: number;
  removedEntries: number;
  /** Duration in milliseconds */
  duration: number;
  source: 'full' | 'incremental';
  errors: number;
}

/** Current state of the registry cache */
export interface CacheStats {
  totalEntries: number;
  lastFullSyncAt: number;
  lastIncrementalSyncAt: number;
  /** Milliseconds since cache was started */
  uptimeMs: number;
  isRunning: boolean;
  isSyncing: boolean;
  reputationCacheSize: number;
}
