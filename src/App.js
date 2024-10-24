import react, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null)

  useEffect(() =>{
    fetch('https://monsters-of-grimthornforest-backend.onrender.com/')
    .then(response => response.json())
    .then(data => {setData(data)})
    .catch(error => {console.error("Error fetching data:", error)})
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data ? `A wherewolf is howling in the distant "${data.WhereWolf}"` : 'Loading...'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Monsters Bite! 
        </a>
        <div>Raaaaaaaawr!</div>
      </header>
    </div>
  );
}

export default App;
