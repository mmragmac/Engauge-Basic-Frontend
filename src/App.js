import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState(""); 
  const [putTitle, setPutTitle] = useState("");
  const [storyId, setStoryId] = useState("");


  // Example GET
  const getEducator = () => {
    fetch('http://localhost:8080/api/educator/hiPvfWj8aV/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  // Example POST
  const postStory = () => {
    fetch("http://localhost:8080/api/story/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "title": title,
        "description": description,
        "url": url
      })
    }).then((res) => {
        return res;
    }).then((data) => {
        console.log(data);
    })
    console.log(title);
    console.log(description);
    console.log(url);
  };


  //EXAMPLE PUT
  const putStory = () => {
    fetch("http://localhost:8080/api/story/IEkdYMRDkbEIRF4KqvNY", {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "title": putTitle
      })
    }).then((res) => {
        return res;
    }).then((data) => {
        console.log(data);
    })
  };

  const deleteStory = () => {
    fetch("http://localhost:8080/api/story/" + storyId, {
      method: 'DELETE',
    }).then((res) => {
        return res;
    }).then((data) => {
        console.log(data);
    })
  };

  return (
    <div className="App">
       <div><button onClick = {getEducator}>Get Clicc</button></div>

      <div>
       <input onInput={(text) => setDescription(text.target.value)}/>
       <input onInput={(text) => setUrl(text.target.value)}/>
       <input onInput={(text) => setTitle(text.target.value)}/>
       <button onClick = {postStory}>Post Clicc</button>
      </div>

      <div>
        <input onInput={(text) => setPutTitle(text.target.value)}/>
        <button onClick = {putStory}>Put Clicc</button>
      </div>

      <div>
        <input onInput={(text) => setStoryId(text.target.value)}/>
        <button onClick = {deleteStory}>Delet Clicc</button>
      </div>

    </div>

  );
}



export default App;
