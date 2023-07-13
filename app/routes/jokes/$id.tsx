import { Link, useLoaderData } from "@remix-run/react"

import React, { useState } from "react"
import { resourceLoader, resourceAction } from "~/controllers/jokes"

export const action = resourceAction
export const loader = resourceLoader

const JokeRoute = () => {
  const { joke, comments, userId } = useLoaderData<typeof loader>()
  const [parentId, setParentId] = React.useState("")
  const [view, setView] = useState(false)
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{joke.content}</p>

      <Link to=".">{joke.name}</Link>
      {/* delete-joke section */}
      {userId === joke.jokesterId && (
        <div className="edit-and-delete-jokes">
          <form method="post">
            <button
              type="submit"
              className="delete-button"
              name="delete-joke"
              value={joke.id}>
              delete post
            </button>
          </form>

          {/* edit-joke section */}

          <button
            onClick={() => setView(!view)}
            className="bg-purple-600 rounded px-2 py-1 mt-4">
            {!view ? <span>edit post</span> : <span>close</span>}
          </button>

          {view && (
            <form method="post" className="edit-joke">
              <div>
                <label>
                  Edit Joke:{" "}
                  <input
                    name="edit-joke"
                    type="text"
                    defaultValue={joke.content}
                  />
                </label>
              </div>
              <button type="submit" className="button">
                update
              </button>
            </form>
          )}
        </div>
      )}

      <div className="bg-[#00000011] p-4 rounded-lg">
        {/* comment section */}
        <form method="post">
          <div>
            <label>
              Comment: <input name="comment" type="text" />
            </label>
          </div>
          <button type="submit" className="button">
            post
          </button>
        </form>

        {comments.length !== 0 && (
          <div
            className="commentbox "
            style={{ overflowY: "scroll", maxHeight: "500px" }}>
            <p>Comments</p>

            {comments.map(
              (comment: any, index: any) =>
                comment.content.length !== 0 && (
                  <div
                    key={index}
                    className="comments border border-[#FFFFFF33]">
                    <span>{comment.jokester.username} </span>
                    <p>{comment.content}</p>

                    <div className="delete-comment-section ">
                      {userId === comment.commenterId && (
                        <form method="post" className="comment-form">
                          <button
                            type="submit"
                            className="delete-button-comment"
                            name="delete-comment"
                            value={comment.id}>
                            delete
                          </button>
                        </form>
                      )}
                      {comment.childComments &&
                        comment.childComments.map((reply: any) => (
                          <div
                            className="bg-[#FFFFFF33] p-5 mt-2 rounded"
                            key={reply.id}>
                            {/* <span>{comment.jokester.username} </span> */}
                            <p>{reply.content}</p>

                            <form method="post" className="comment-form">
                              {(reply.commenterId === userId ||
                                comment.commenterId === userId) && (
                                <button
                                  type="submit"
                                  className="delete-button-comment"
                                  name="delete-comment"
                                  value={reply.id}>
                                  delete
                                </button>
                              )}
                            </form>
                          </div>
                        ))}
                      <div className="mt-2">
                        {!parentId ? (
                          <button
                            className="bg-purple-600 px-2 py-1 rounded"
                            type="button"
                            onClick={() => setParentId(comment.id)}>
                            Reply
                          </button>
                        ) : (
                          <button
                            className="bg-red-600 px-2 py-1 rounded"
                            type="button"
                            onClick={() => setParentId("")}>
                            Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    {parentId === comment.id && (
                      <form
                        method="post"
                        className="mt-2 bg-slate-500 p-5 rounded ">
                        <div>
                          <label>
                            Replying to {comment.jokester.username}:{" "}
                            <input name="comment" type="text" />
                          </label>
                        </div>
                        <input type="hidden" name="parentId" value={parentId} />
                        <button type="submit" className="button">
                          reply
                        </button>
                      </form>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default JokeRoute
