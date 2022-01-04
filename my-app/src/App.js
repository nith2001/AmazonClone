import { React } from 'react';
// import { } from 'reactstrap';
import NavigationBar from './components/NavigationBar';
import MainPage from './pages/MainPage';


export default function App() {

  function setSearch(searchQuery, categoryFilter) {
    console.log(searchQuery);
    console.log(categoryFilter);
  }

  return (
    <>
      <NavigationBar handleSearch={setSearch}/>
      <MainPage />
    </>
  )
}

