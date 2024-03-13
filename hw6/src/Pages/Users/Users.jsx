import { Link, useLoaderData } from "react-router-dom";

export default function Users() {

    const usersData = useLoaderData();

    return (
        <div className="Main">
            <h1>Users</h1>
            <ul>
                {usersData.map(obj => <li key={obj.id}><Link to={`/users/${obj.username}`}>{obj.name}</Link></li>)}
            </ul>
        </div>
    )
}