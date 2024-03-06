import { useEffect, useState } from "react"

export function MyComponent() {

    const [count, setCount] = useState(0);

    const myHandler = () => {
        setCount(prev => prev + 1);
    }

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <>
            <h2>{count}</h2>
            <button onClick={myHandler}>Update</button>
            <br/>
        </>
    )
}