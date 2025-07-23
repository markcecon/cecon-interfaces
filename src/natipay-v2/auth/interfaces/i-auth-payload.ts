import { EAuthType } from '../enums/auth-type.enum';
import { EPermissionLevel } from '../enums/permission-level.enum';

export interface INatipayV2AuthPayload {
  // JWT Standard Fields
  iss: string; // Issuer
  aud: string | string[]; // Audience
  exp: number; // Expiration
  iat: number; // Issued At
  jti: string; // JWT ID

  // Custom Fields
  userId: string;
  accountHolderId: string;
  accountIds: string[];
  deviceId: string | null;
  deviceInfo: {
    type: 'MOBILE' | 'WEB' | 'API';
    os: string;
    version: string;
    fingerprint: string;
  } | null;

  // Banking Specific
  authType: EAuthType;
  permissionLevel: EPermissionLevel;
  sessionId: string;
  ipAddress: string;
  userAgent: string;

  // Security
  mfaVerified: boolean;
  lastPasswordChange: Date;
  riskScore: number;

  // Metadata
  sandbox: boolean;
  version: string;
}
