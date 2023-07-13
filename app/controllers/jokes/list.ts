import type { LoaderArgs } from "@remix-run/node"
import { db } from "~/utils/db.server"
import { getUser, getUserId } from "~/utils/session.server"

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request)
  const userid = await getUserId(request)
  const jokes = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, jokesterId: true, name: true },
  })
  console.log(jokes)
  return { jokes, user, userid }
}
