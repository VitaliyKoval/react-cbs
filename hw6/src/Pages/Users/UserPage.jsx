import { Link, useLoaderData } from "react-router-dom"

export default function UserPage() {
    const user = useLoaderData();

    return (
        <div className="Main user-page">
            <div>
                <Link to="/users">Back</Link>
            </div>
            <h2>User: {user.name}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    )
}