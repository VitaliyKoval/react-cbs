import { useState, useEffect } from "react";

export function Comments() {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);

    return (
        <>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => <li key={comment.id}>{comment.name}</li>)}
            </ul>
        </>
    )
}