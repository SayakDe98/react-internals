import './App.css'
import users from "./data/users.json"
import UserCard from './components/UserCard'

function App({ filter }) {
  const filteredUsers = users.filter(user => user?.['job-role'] === filter)

  return (
    <div>
     {filteredUsers?.map(user => (
        <UserCard key={user?.id} user={user} />
      ))}
    </div>
  )
}

export default App
