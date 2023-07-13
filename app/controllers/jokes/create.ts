import type { ActionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { ensureUserPresent } from "../controller-hooks/ensure-user-present"
import { db } from "~/utils/db.server"

export const action = async ({ request, params }: ActionArgs) => {
  const { user } = await ensureUserPresent({ request })

  const form = await request.formData()

  const content = form.get("comment")?.toString()

  const parentId = form.get("parentId")

  const jokeId = params.id

  if (!jokeId) throw redirect("/jokes")

  if (form.has("delete-joke")) {
    //TODO: jokes/id request-method  delete
    const jokeToDelete = await db.joke.findFirst({
      where: {
        id: jokeId,
        jokesterId: user.id,
      },
    })
    if (jokeToDelete) {
      await db.joke.delete({
        where: {
          id: jokeId,
        },
      })
    }
    throw redirect(`/jokes`)
  }

  if (form.has("delete-comment")) {
    //TODO: commnets/$id ,method: delete
    const commentId = form.get("delete-comment")
    await db.comment.delete({
      where: {
        id: commentId,
      },
    })
    return null
  }

  if (form.has("edit-joke")) {
    //TODO: jokes/:id method: put
    const updatedContent = form.get("edit-joke")
    await db.joke.update({
      where: {
        id: jokeId,
      },
      data: {
        content: updatedContent,
      },
    })
    return null
  }

  if (content && content.length > 0) {
    //TODO: jokes/id/comments method: post
    const comment = await db.comment.create({
      data: {
        jokeId,
        content,
        parentId,
        commenterId: user.id,
      },
    })
  }

  return null
}
