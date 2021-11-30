import './App.css';
import React from 'react';
import {
  BrowserRouter, 
  Routes, 
  Route,
  Link, useParams
} from 'react-router-dom' 

import { Provider } from 'react-redux' 
import { store } from './store';
import SignIn from './users/SignIn';

let NoImplemented = ()=>{
  return <h1>Not implemented yet</h1>
}

let Error404 = ()=>{
  return <Link to='/'>Regresar al inicio</Link>
}

let VideoID = ()=>{
  let { id } = useParams()
  return <p> {id}</p>
}
function App() {
  return (
    <BrowserRouter>
    <Provider store= {store}>
        <Routes>

          <Route path='/' element={<NoImplemented />} />

          <Route path='/usuarios'>
            <Route path='registro' element={<NoImplemented />} />
            <Route path='login' element={<SignIn />} />
            <Route path=':id' element={<NoImplemented />} />
            <Route path=':id/videos' element={<NoImplemented />} />
          </Route>

          <Route path='/videos'>
            <Route path='nuevo' element={<NoImplemented />} />
            <Route path=':id' element={<VideoID />} />
          </Route>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
