# React Learning 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of file
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and production bundles

# map method

remember: not using keys (not acceptable) <<< index as key <<<<< unique id (best practice)

# Two types of Export/Import

- Default Export/Import
  export default Component;
  import Component from "path";

- Named Export/Import
  export const Component;
  import { Component } from "path";

# React Hooks

(Normal JS utility Functions)

- useState() - Superpowerful state variables in react
- useEffect()

# Short Cut to create a component

- rafce

# Two types of Routing in web apps

- Client Side Routing -> this react is client side because we are not making any network call because all component are allready loaded
- Server Side Routing -> you make a network call and the page is coming from server

# Optimising

- Chunking
- Code Splitting
- Dynamic Bundling
- lazy loading
- on demand loading
- dynamic import

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# These both are equal in redux toolkit to use useSelector

- const cartItems = useSelector((store) => store.cart.items);
- const store = useSelector((store) => store);
  const cartItems = store.cart.items;

# Vanilla(older) Redux => DON'T MUTATE STATE, Returning was mandatory

- In older version of Redux we have to do
  like this:- const newState = [...state];
  newState.items.push(action.payload);
  return newState; // this returning is mandatory

# Redux Toolkit, Returning was not mandatory

- Redux Toolkit uses immer js package behind the scenes(BTS)

- In Redux Toolkit we directly mutating the state here
  like this:- state.items.push(action.payload);

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration -> npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install -> npm i -D @testing-library/jest-dom
