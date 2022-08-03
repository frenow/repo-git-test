import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(()=> {
    fetch('https://api.github.com/users/frenow/repos')
    .then(response => response.json())
    .then(data => setRepos(data))
  }, []);

  const filteredRepos = search.length > 0 ? repos.filter(repo => repo.name.includes(search)) : [];

  return (
    <div className="App">
      <input
        name="search"
        type="text"
        placeholder="Buscar..."
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      {search.length > 0 ? (
      <ul>
      {filteredRepos.map(repo => {
        return (
          <li key={repo.name}>
            {repo.name}
          </li>
          )
        })}
      </ul>        
      ):(
        <ul>
        {repos.map(repo => {
          return (
            <li key={repo.name}>
              {repo.name}
            </li>
            )
          })}
        </ul>        
      )}
    </div>
  );
}

export default App;
