import { React } from 'react';
// import { } from 'reactstrap';
import NavigationBar from './components/NavigationBar';
import MainPage from './pages/MainPage';
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {

  function setSearch(searchQuery, categoryFilter) {
    console.log(searchQuery);
    console.log(categoryFilter);
  }

  return (
    <>
      <NavigationBar handleSearch={setSearch}/>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/orders" element= { <OrdersPage /> }/>
        <Route path="/profile" element= { <ProfilePage /> }/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Outlet />
    </>
  )
}

