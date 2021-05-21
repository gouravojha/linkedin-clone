import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { login, logout, selectUser } from './features/userSlice';
import Login from "./Login";
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if (userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          name:userAuth.displayName,
          photoURL:userAuth.photoURL,
        }))
      }
      else{
        dispatch(logout());
      }
    })
  },[dispatch])
  return (
    <>
      <Header />
      <div className="app">
        <div className="app__body">
          {!user ? (
            <Login />
          ) : (
            <>
            <Sidebar />
            <Feed />
            <Widgets/>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
