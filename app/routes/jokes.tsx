import type { LinksFunction } from "@remix-run/node"
import { Link, Outlet, useLoaderData } from "@remix-run/react"
import stylesUrl from "~/styles/jokes.css"
import stylesheet from "~/styles/tailwind.css"
import uppyMini from "@uppy/core/dist/style.min.css"
import uppyDrapDrop from "@uppy/drag-drop/dist/style.min.css"
import uppyDashboard from "@uppy/dashboard/dist/style.css"
import { listLoader } from "~/controllers/jokes"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: uppyMini },
  { rel: "stylesheet", href: uppyDrapDrop },
  { rel: "stylesheet", href: uppyDashboard },
]

export const loader = listLoader

export default function JokesRoute() {
  const { jokes, userid, user } = useLoaderData<typeof loader>()

  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
          {user ? (
            <div className="user-info">
              <span>{`Hi ${user.username}`}</span>
              <form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {jokes.map(({ id, name }) => (
                <li key={id}>
                  <Link to={id}>{name}</Link>
                </li>
              ))}
            </ul>
            <p>All my jokes:</p>
            <ul>
              {jokes.map(
                ({ id, jokesterId, name }) =>
                  userid === jokesterId && (
                    <li key={id}>
                      <Link to={id}>{name}</Link>
                    </li>
                  )
              )}
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
