import { UserData  } from './UserNameTypes'

interface UserNameExternallyTypedProps {
    userData: UserData
}

export default function UserNameExternallyTyped({ userData } : UserNameExternallyTypedProps ) {
    return (
        <div>
            <h1>UserNameExternallyTyped</h1>
            { userData.firstName }, { userData.lastName }, age: { userData.age }
        </div>
    )
}
