import { redirect } from "@remix-run/node"
import { db } from "~/utils/db.server"
import { requireUserId } from "~/utils/session.server"

type ensureUserPresentArgs = {
  request: Request
}
export const ensureUserPresent = async ({ request }: ensureUserPresentArgs) => {
  const userId = await requireUserId(request)

  const user = await db.user.findFirst({ where: { id: userId } })

  if (!user) throw redirect("/login")

  return { user }
}
