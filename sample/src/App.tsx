import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const url = 'http://127.0.0.1/api/user';
  const [loading, setLoading] = useState(true);
  const [recs, setRecs] = useState([]);

  const Card = (data: any) => {
    return data.items.map((item: any) => (<div>{item.name}</div>));
  };

  const execSearchName = (e: any) => {
    if (e.target?.value?.length) {
      getApi(url + '?name=' + e.target.value);
    }
  }

  const getApi = (tmpUrl: string) => {
    fetch(tmpUrl)
      .then(res => res.json())
      .then((json: any) => {
        setRecs(json.res);
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={execSearchName} type="text"/>
        {
          loading
            ?
              (
                <img src={logo} className="App-logo" alt="logo" />
              )
            :
              (
                <div>
                  <Card items={recs} />
                </div>
              )
        }
      </header>
    </div>
  );
}

export default App;
