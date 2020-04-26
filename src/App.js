import React from 'react';
import User from './components/user/user';
import './App.css';

function App() {
  return (
    <div className="App">
      <User user={{
        name: "Bob", 
        id: 1, 
        posts: [
          {
            title: "Post 1",
            date: "2/2/2020",
            content: "blah, blah, blah"
          },{
            title: "Post 2",
            date: "2/3/2020",
            content: "more words..."
          },{
            title: "Post 3",
            date: "2/4/2020",
            content: "getting tired of making this stuff up..."
          }
        ]
      }}/>
    </div>
  );
}

export default App;
