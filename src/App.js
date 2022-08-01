import { useState } from "react"

import { PostList } from "./components/PostList"

import NewsAddForm from "./components/NewsAddForm";

import './App.css';

function App() {
  const postList = [
    { id: 1, title: "JS", description: "Used to create MERN Stack Apps" },

    { id: 2, title: "Python", description: "Used to create AI Programs" },

    { id: 3, title: "C++", description: "Used to create Desktop games" }
  ]

  const [ posts, setPosts ] = useState(postList);

  return (
    <div className="App">
      <NewsAddForm />
      <PostList posts={ posts } />
    </div>
  );
}

export default App;
