import React from 'react'

export default function SaveSuccess({ firstName, familyName, email}) {

    return (
        <div>Saved { firstName } { familyName } ({email})</div>
    )
}
