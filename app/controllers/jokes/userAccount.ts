import type { LoaderArgs } from "@remix-run/node"
import { getUser, getUserId } from "~/utils/session.server"

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request)
  const userId = await getUserId(request)
  console.log(user, userId)
  return { user, userId }
}
