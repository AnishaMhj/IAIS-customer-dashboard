import React, {useState} from 'react';

// import Hello from './sayHello';
import Tweet from './Tweet';
import Header from './Header'

function App() {

    // const [isRed, setRed] = useState(false); const [count, setCount] =
    // useState(0); const increment = () => {   setCount(count + 1);
    // setRed(!isRed); }

    const [users, setUsers] = useState([
        {
            name: 'ani',
            message: 'hey'
        }, {
            name: 'avi',
            message: 'bb'
        }, {
            name: 'josh',
            message: 'ur'
        }, {
            name: 'may',
            message: 'late'
        }
    ]);

    return (

        // <div className="app">   <h1 className={isRed ? 'red' : ''}>Change my
        // color</h1>   <button onClick={increment}>Increment</button>
        // <h1>{count}</h1>

        /* <Tweet name="ani" message="hey" />
      <Tweet name="avi" message="bb" />
      <Tweet name="josh" message="ur"/>
      <Tweet name="may" message="late" /> */

        // <div className="app">     {users.map(user =>(     <Tweet name={user.name} />
        // ))} </div>

        /************* Header ****************** */
        <div>
            <Header/>
        </div>

    );
}

export default App;