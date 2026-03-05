export class AzethError extends Error {
  constructor(
    message: string,
    public readonly code: AzethErrorCode,
    public readonly details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = 'AzethError';
  }
}

export type AzethErrorCode =
  | 'BUDGET_EXCEEDED'
  | 'GUARDIAN_REJECTED'
  | 'INSUFFICIENT_BALANCE'
  | 'SESSION_EXPIRED'
  | 'PAYMENT_FAILED'
  | 'SERVICE_NOT_FOUND'
  | 'REGISTRY_ERROR'
  | 'NETWORK_ERROR'
  | 'INVALID_INPUT'
  | 'UNAUTHORIZED'
  | 'INTERNAL_ERROR'
  | 'CONTRACT_ERROR'
  | 'ACCOUNT_NOT_FOUND'
  | 'ACCOUNT_EXISTS'
  | 'AGREEMENT_NOT_FOUND'
  | 'INSUFFICIENT_PAYMENT'
  | 'RECIPIENT_UNREACHABLE'
  | 'SERVER_UNAVAILABLE';
