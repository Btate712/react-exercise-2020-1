# React Exercise #1

This is an exercise in creating a React component that will conditionally render the word
"loading" if the value passed in as props is not defined. This is one solution to rendering
components while waiting for asyncronous actions such as getting data from an API to complete.

## Installation:

Fork and clone this repository and run the command "npm install" to install all dependencies.

## Exercise:

In the file "src/components/user/user.js", create a component named "User" that accepts a prop
"user" which will either be undefined or an object with the following structure:
```
{
  name: "admin",
  id: 1,
  posts: [
    {
      date: "2/2/2020",
      title: "My First Post",
      content: "blah, blah, blah..."
    },{
      date: "2/3/2020",
      title: "Another Post",
      content: "more words..."
    }
  ]
}
```

The user can have any number of posts stored in the posts array.

If the "user" prop is defined, User should render as follows:
```
  <h1>User Name: admin</h1>
  <h2>User ID: 1</h2>
  <h2>Posts:</h2>
  <ul>
    <li>My First Post - 2/2/2020</li>
    <li>Another Post - 2/3/2020</li>
  </ul>
```

## Running the tests

Enter "npm test" in the console to run the tests. When all tests pass, the exercise is complete.

## My solution

If you'd like to see the solution I wrote, it's stored in the repository under the branch "solution".