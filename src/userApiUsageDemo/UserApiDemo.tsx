import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
}

export default function UserApiDemo() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    function createNewUser() {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify({
                name: 'Dummy User'
            }),
            headers: {
                "Content-Type": "application/json",
            } 
        })
    }

    return (
        <div>
            <h1>Example App using our own API</h1>
            <button onClick={ createNewUser }>Create new Dummy User</button>
            <div>List of users</div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
}
