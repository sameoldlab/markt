import { agent } from "$lib/agent.svelte"
import { client as ATClient } from "$lib/initializeClient"
import type { ClientInit } from "@sveltejs/kit"

export const init: ClientInit = async () => {
  const result = await ATClient.init()
  ATClient.addEventListener('updated', console.log)
  ATClient.addEventListener('deleted', console.warn)
  console.log(result)

  if (result) {
    const { session, state } = result
    agent.load(session)
    if (state != null) {
      console.log(
        `${session.sub} was successfully authenticated (state: ${state})`,
      )
    } else {
      console.log(`${session.sub} was restored (last active session)`)
    }
  }
}
