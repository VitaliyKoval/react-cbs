export function ChildComponent({data}) {
  return (
    <div>
      <h2>Child component</h2>
          <p>{data.name} {data.age}</p>
    </div>
  )
}