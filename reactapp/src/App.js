import React, { useState } from 'react';
import './App.css';
import fb from './firebase/firebaseConfig';

export default function App () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    fb.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("route to vue app.");
        window.history.pushState(null, "/vueapp", "/vueapp");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app-main">
      <h1>React App</h1>
      <label for="email">Email</label>
      <input
        name="email"
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <label for="password">Password</label>
      <input
        name="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      ></input>

      <button onClick={onSubmit}>Register</button>
    </div>
  );
}
