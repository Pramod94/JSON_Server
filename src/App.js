import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/employees')
      .then(res => {
        setPost(res.data);
        console.log(res.data);
      })
  }, [])

  return (
    <div className="App">
      <h3>JSON Server</h3>
      <div>
        {post && post.map(item => <p key={item.id}>{item.name}</p>)}
      </div>
    </div>
  );
}

export default App;
