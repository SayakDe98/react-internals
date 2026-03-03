import './App.css'
import users from "./data/users.json"
import UserCard from './components/UserCard'
import React, { useMemo } from 'react'

function App({ filter }) {
  const filteredUsers = useMemo(() => users.filter(user => user?.['job-role'] === filter), [users, filter])

  return (
    <div>
     {filteredUsers?.map(user => (
        <UserCard key={user?.id} user={user} />
      ))}
    </div>
  )
}

export default React.memo(App)
