export function Topics({data}) {
    return (
        <>
            <nav>
                <ul>
                    {data.map((obj, idx) => <li key={idx}><a href={obj.href}>{obj.title}</a></li>)}
                </ul>
            </nav>
        </>
    )
}