import { React, useState } from 'react';
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
import SearchPage from "./pages/SearchPage";

export default function App() {

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <NavigationBar setSearch={setSearch} setCategory={setCategory} />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/orders" element={ <OrdersPage /> }/>
        <Route path="/profile" element={ <ProfilePage /> }/>
        <Route
          path="/searchresults"
          element={ <SearchPage search={search} category={category}/> }
        />
        <Route path="*" element={ <h1>There's nothing here!</h1> } />
      </Routes>
      <Outlet />
    </>
  )
}

