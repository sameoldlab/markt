import type { ClientMetadata } from "@atproto/oauth-client-browser"

const APP_URL = 'http://localhost:5199'
export const BSKY_CLIENT_METADATA: ClientMetadata = {
  client_id: `${APP_URL}/client-metadata.json`,
  client_name: "My App",
  client_uri: `${APP_URL}`,
  // logo_uri: `${APP_URL}/logo.png`,
  // tos_uri: `${APP_URL}/tos`,
  // policy_uri: `${APP_URL}/policy`,
  redirect_uris: ['http://127.0.0.1:5199/callback'],
  scope: "atproto",
  grant_types: ["authorization_code", "refresh_token"],
  response_types: ["code"],
  token_endpoint_auth_method: "none",
  application_type: "native",
  dpop_bound_access_tokens: true
} as const
