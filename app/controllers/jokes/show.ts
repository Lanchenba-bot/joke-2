import type { LoaderArgs } from "@remix-run/node"
import { db } from "~/utils/db.server"
import { getUser, getUserId } from "~/utils/session.server"

export const loader = async ({ request, params }: LoaderArgs) => {
  const userId = await getUserId(request)
  const user = await getUser(request)
  const joke = await db.joke.findFirst({
    where: { id: params.id },
  })

  if (!joke) {
    throw new Error("Joke not found")
  }
  const comments = await db.comment.findMany({
    orderBy: { createdAt: "desc" },
    where: { jokeId: joke.id, parentId: null },
    include: { jokester: true, childComments: true },
  })
  return { joke, comments, userId, user }
}
