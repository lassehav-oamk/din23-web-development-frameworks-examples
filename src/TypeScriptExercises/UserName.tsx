import React from 'react'

interface UserNameProps {
    firstName: string,
    lastName: string,
    age: number
}

export default function UserName({ firstName, lastName, age} : UserNameProps ) {
  return (
    <div>{ firstName }, { lastName }, age: { age }</div>
  )
}
