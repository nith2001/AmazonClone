import React from 'react';
// import { } from 'reactstrap';
import NavigationBar from './components/NavigationBar';
import MainPage from './components/MainPage';


function App() {
  return (
    <>
      <NavigationBar />
      <h1 className='text-center m-4'>Here are some products you might like!</h1>
      <MainPage />
    </>
  )
}

export default App;
