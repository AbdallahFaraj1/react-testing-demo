import { useState } from 'react';
import './App.css';
function App() {
  let div;
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username === 'abdallah' && state.password === '12345') {
      setState({ ...state, authenticated: true });
    } else {
      setState({ ...state, authenticated: false });
    }
  };

  if (state.authenticated === undefined) {
    div = '';
  } else {
    if (state.authenticated === true) {
      div = <p className="valid">The credentials are correct</p>;
    } else {
      div = <p className="error">The credentials are not correct</p>;
    }
  }

  return (
    <div className="app">
      <form className="modal" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="username"
            name="username"
            id="username"
            className="input"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <button className="button" disabled={state.password && state.username ? false : true}>
            Sign In
          </button>
        </div>
      </form>
      {div}
    </div>
  );
}

export default App;
