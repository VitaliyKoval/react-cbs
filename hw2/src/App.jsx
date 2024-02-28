import './App.css'

function App() {
  function test() {
    return 'I am React';
  }

  function click() {
    console.log('click');
  }

  const users = [
    { name: 'Nataly', age: 25, email: 'nat@google.com' },
    { name: 'Andrey', age: 35, email: 'and@google.com' },
    { name: 'Sashko', age: 27, email: 'sash@google.com' },
    { name: 'Vitaliy', age: 45, email: 'vit@google.com' },
    { name: 'Olena', age: 29, email: 'olena@google.com' },
  ];

  const pStyle = {
    fontSize: '24px',
    color: 'red',
    textAlign: 'justify'
  }

  const classes = 'green-text';
  const x = 10;
  const htmlStr = '<h2>Hello my friend</h2>';

  return (
    <>
      <h1>{test()}</h1>
      <button onClick={click}>Click me</button>
      <button onClick={() => console.log('click')}>Click me</button>
      <ul style={{listStyleType:  'none'}}>
        {users.map((user, idx) => <li key={idx}>
          {user.name} {user.email} {user.age}
        </li>)}
      </ul>
      <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic temporibus vero facere reiciendis sapiente porro, culpa, sed ullam fugiat ipsum similique magnam quos aut velit molestias dolore quam nemo!</p>
      <p className={classes}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus vitae hic fugit delectus magnam cum officia molestiae, maiores labore reprehenderit odit, harum esse ad mollitia. Cum incidunt magnam non.</p>

      {/* {x === 10 && (<>
        <h2> Hello world</ h2>
        <h2> Hello world</ h2>
      </>)} */}

      {x !== 10 ? (<>
        <h2> Hello world</ h2>
        <h2> Hello world</ h2>
      </>) :
        (<h2>False</h2>)}
      
      <form onSubmit={(e) => { e.preventDefault(); console.log('Submit'); }} method='GET'>
        <label htmlFor="HTML">HTML</label><br />
        <input type="submit" value="Submit" />
      </form>

      <div>{htmlStr}</div>
      <div dangerouslySetInnerHTML={{__html: htmlStr }}></div>

      <input type='text' readOnly value={'value'}></input>
      <input type='text' readOnly={false}></input>
    </>
  )
}

export default App
