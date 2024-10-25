import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import MyClass from './components/ClassComponent';
import Example from './components/Example/Example';
import Example2 from './components/Example/Example2';
import Form from './components/Form/Form';
import Login from './components/Login/Login';
import Fragment from './components/Fragment/Fragment';
import ComponentA from './components/ContextAPI/ComponentA';
import ComponentB from './components/ContextAPI/ComponentB';
import React, { useState, useEffect } from 'react';
import Counter from './components/ReactHooks/Counter';
import Counter2 from './components/ReactHooks/Counter2';
import FetchData from './components/FetchData/FetchData';

import ComponentA2 from './components/ContextHook/ComponentA2';
import RederceHook from './components/ReducerHook/RederceHook';
import DataFetching from './components/FetchData/DataFetching';
import UpdateForm from './components/Articles/UpdateForm';
import Articles from './components/Articles/Articles';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
export const myContext = React.createContext()

export const my2ndContext = React.createContext();


function App() {
  const [editArticle, setEditArticle] = useState(null);
  const [token, setToken, removeToken] = useCookies(['mytoken']);
  const navigate = useNavigate();
  const handleCreate = () => {
    setEditArticle({title:"", description:""});
  }
  const handleLogout = () => {
    removeToken('mytoken')
  }
  useEffect(() => {
    if(!token['mytoken'])
      navigate('/login')
  }, [token])


  


  // function handleShowEmail() {
  //   alert("Inside app.js: ");
  // }
  return (
    <div className="bg-dark text-white p-3 min-vh-100 w-100">
      {/* <myContext.Provider value="This si value from context">
        <ComponentA></ComponentA>
      </myContext.Provider>
      <Profile/>
      <Example names = {['Python', 'Java', 'Javascript']}></Example>
      <Example2 names = {['C++', 'GO', 'Python', 'Java', 'Javascript']}></Example2> */}

      {/* <Counter/>
      <Counter2/> */}

      {/* <FetchData></FetchData> */}

      {/* <my2ndContext.Provider value={"This is value from 2nd context"}>
        <ComponentA2 />
      </my2ndContext.Provider> */}
      {/* <RederceHook></RederceHook> */}

      {/* <DataFetching/> */}
      <div className="row">
        <div className="col">
          <h1 className=''>django & reactjs blog app</h1>

        </div>
        <div className="col">
          <button className="btn btn-danger" onClick={handleLogout}>Log out</button>
          <button className='btn btn-primary' onClick={handleCreate}>Add article</button>
        </div>

        <Articles />
        {editArticle ?
          <div>
            <UpdateForm article={editArticle} />
            <button onClick={() => setEditArticle(null)}>cancel</button>
          </div>
          : null}


        <br />


      </div>



    </div>
  );
}

export default App;
