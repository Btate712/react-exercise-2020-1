import React from 'react';

const User = ({user}) => {
  let renderedContent;
  console.log(user);
  if (user) {
    renderedContent = ( 
      <>
        <h1>User Name: {user.name}</h1>
        <h2>User ID: {user.id}</h2>
        <h2>Posts:</h2>
        <ul>
        {user.posts.map((post, index) => (<li key={index}>{post.title} - {post.date}</li>))}
        </ul>
      </>
    );
  }

  return(
    <>
      {user ? renderedContent : (<h2>loading...</h2>)}
    </>
  )
}

export default User;