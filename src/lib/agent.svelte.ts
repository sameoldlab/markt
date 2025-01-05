import { Agent } from '@atproto/api';
import type { OAuthClient, OAuthSession } from '@atproto/oauth-client-browser';

const mkAgent = () => {
  let agent: Agent | null = $state(null)

  return {
    restore: async (did: string, client: OAuthClient) =>
      client.restore(did).then(session => {
        agent = new Agent(session)
      }),
    load: (session: OAuthSession) => agent = new Agent(session),
    get value() {
      return agent
    }
  }
};

export const agent = mkAgent()
