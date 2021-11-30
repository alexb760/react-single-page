import './App.css';
import React from 'react';
import {
  BrowserRouter, 
  Routes, 
  Route,
  Link, 
  useParams,
  Outlet,
  useNavigate
} from 'react-router-dom' 

import { Provider, useDispatch, useSelector } from 'react-redux' 
import { store } from './store';
import SignIn from './users/SignIn';
import { logOut } from './store/user';

const UsuariosOutlet = ()=>{
  let user = useSelector(state => state.user.user)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let doLogOut = ()=> {
    dispatch(
      logOut()
    )
   navigate('/')
  }
  return(
    <div>
    {
      user && <button onClick={ doLogOut }>Cerrar Sesion</button>
    }
    <Outlet/>
    </div>
  )
}

let NoImplemented = ()=>{
  let navigate = useNavigate()
  let goLogin = ()=> {
    navigate('/usuarios/login')
  }
  return <div>
    <button onClick={goLogin}> LogIn</button>
  </div>
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

            <Route path='/usuarios' element={ <UsuariosOutlet /> }>
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
