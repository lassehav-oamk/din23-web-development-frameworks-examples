import { useState, useEffect} from 'react'
import Ex102UserFilter from './Ex102UserFilter'
import Ex102UserList from './Ex102UserList'

export default function Ex102UserListFilter() {

    const [filterValue, setFilterValue] = useState('');
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data.users);
                setUserData(data.users);
            });
    }, []);

    /*const userData = [
        {
            firstName: 'Bruce',
            lastName: 'Wayne'
        },
        {
            firstName: 'Clark',
            lastName: 'Kent'
        },
        {
            firstName: 'Diana',
            lastName: 'Prince'
        }
    ];*/

    function receiveFilterValueFromChild(newFilterValue : string) {
        setFilterValue(newFilterValue);
    }

    function userDataFilterLogic(user) {
        if(filterValue == '') {
            return true;
        }

        if(filterValue == user.lastName) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <h1>Ex10.2 User List Filter</h1>

            <Ex102UserFilter giveFilterValueToParent={receiveFilterValueFromChild}/>
            <Ex102UserList users={ userData.filter(userDataFilterLogic) }/>
        </div>
    )
}
