import React from 'react'

interface UserData {
    firstName: string,
    lastName: string, 
    age: number
}

interface UserNameSinglePropProps {
    userData: UserData
}

export default function UserNameSingleProp({ userData } : UserNameSinglePropProps ) {
  return (
    <div>{ userData.firstName }, { userData.lastName }, age: { userData.age }</div>
  )
}
