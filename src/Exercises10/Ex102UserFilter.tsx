import { useState } from 'react'

export default function Ex102UserFilter({ giveFilterValueToParent }: { giveFilterValueToParent: (filterValue: string) => void }) {

    const [filterValue, setFilterValue] = useState('');

    function filterClicked() {
        console.log('Filter clicked');
        
        giveFilterValueToParent(filterValue);
    }

    return (
        <div>
            <input 
                type="text" 
                value={filterValue} 
                onChange={(event => setFilterValue(event.target.value))} 
            /> 
            <button onClick={ filterClicked }>
                Filter
            </button>
        </div>
    )
}
