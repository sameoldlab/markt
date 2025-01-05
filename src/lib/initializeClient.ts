import { BrowserOAuthClient, type OAuthSession } from '@atproto/oauth-client-browser';
import { BSKY_CLIENT_METADATA } from './atprotoClientMetadata';

export const client = new BrowserOAuthClient({
  // leaks data to bsky.social
  handleResolver: 'https://bsky.social',
  clientMetadata: undefined,// BSKY_CLIENT_METADATA,
  //defaults
  responseMode: 'fragment',
  fetch: window.fetch,
  plcDirectoryUrl: 'https://plc.directory'
  // socket://bundle-id/callback
});
