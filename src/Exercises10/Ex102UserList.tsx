import React from 'react'

interface User {
    firstName: string,
    lastName: string,
}

export default function Ex102UserList({ users }: { users: User[] }) {

  return (
    <div>
        {
            users.map(user => <div>{user.firstName} {user.lastName}</div>)
        }
    </div>
  )
}
