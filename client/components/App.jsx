import React from 'react'
import { Link, Outlet } from 'react-router-dom'



function App () {
  return (
    <>
      <div>
        <h1>Book Exchange</h1>

        <nav>
          <Link to = "books">Books</Link> | { "" }
          <Link to = "requests">Requests</Link> | { "" }
          <Link to = "trades">Trades</Link> | { "" }
          <Link to = "users">Users</Link> | { "" }
        </nav>
        <nav>
          <Link to = "login">Login</Link> | { "" }
        </nav>

        <Outlet />
      </div>
    </>
  )
}

export default App
