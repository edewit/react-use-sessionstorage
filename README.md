# react-use-sessionstorage

Fork of https://github.com/dance2die/react-use-localstorage but then uses session storage instead of local storage.

## How to use it

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import useLocalStorage from 'react-use-sessionstorage';

import './styles.css';

function App() {
  const [item, setItem] = useSessionStorage('name', 'Initial Value');

  return (
    <div className="App">
      <h1>Set Name to store in Local Storage</h1>
      <div>
        <label>
          Name:{' '}
          <input
            type="text"
            placeholder="Enter your name"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```
