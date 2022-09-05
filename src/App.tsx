import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/navigation-bar';



import UserDetail from './pages/user-detail';
import UserList from './pages/users-list';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route
          path='/users'
          element={<div></div>}
        > */}
          <Route index element={<UserList />} />
          <Route path='users/:userId' element={<UserDetail />} />
          {/* </Route> */}
          <Route
            path="*"
            element={
              <UserList />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
