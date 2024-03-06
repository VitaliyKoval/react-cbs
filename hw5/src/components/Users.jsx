import { useRef, useState } from "react";

export function Users() {

    const name = useRef();
    const lastName = useRef();
    const email = useRef();

    const [users, setUsers] = useState([]);

    const btnHandler = () => {
        setUsers([...users, {
            name: name.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
        }]);
        name.current.value = "";
        lastName.current.value = "";
        email.current.value = "";
    }

    return (
        <>
            <label>Name
                <input type="text" ref={name}/>
            </label>
            <label>Last name
                <input type="text" ref={lastName}/>
            </label>
            <label>Email
                <input type="email" ref={email}/>
            </label>
            <button onClick={btnHandler}>Click</button>
            <ul>
                {users.map((user, idx) => <li key={idx}>{user.name} {user.lastName} {user.email}</li>)}
            </ul>
        </>
    )
}