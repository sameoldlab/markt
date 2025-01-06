import { OAuthClient, type OAuthSession } from '@atproto/oauth-client';
import { BSKY_CLIENT_METADATA } from './atprotoClientMetadata';

export const client = new OAuthClient({
  // leaks data to bsky.social
  handleResolver: 'https://bsky.social',
  clientMetadata: undefined,// BSKY_CLIENT_METADATA,
  //defaults
  responseMode: 'query',
  fetch: window.fetch,
  plcDirectoryUrl: 'https://plc.directory'
  // socket://bundle-id/callback
});
