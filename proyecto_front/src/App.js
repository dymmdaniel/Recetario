import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import Inicio from './pages/Inicio/Inicio';

import Recetas from './components/Recetas/Recetas';
import Receta from './components/Recetas/Ver_Receta/Receta';
import CrearReceta from './components/Recetas/Crear_Receta/Crear_Receta';

import Menus from './components/Menus/Menus';
import Menu from './components/Menus/Menu/Menu';
import CrearMenu from './components/Menus/Crear_Menu/Crear_Menu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>} exact></Route>
          <Route path='/login' element={<Login/>} exact></Route>
          <Route path='/registro' element={<Registro/>} exact></Route>
          <Route path='/recetas' element={<Recetas/>} exact></Route>
          <Route path='/receta/:_id' element={<Receta/>} exact></Route>
          <Route path='/crear-receta' element={<CrearReceta/>} exact></Route>
          <Route path='/menus' element={<Menus/>} exact></Route>
          <Route path='/menu/:_id' element={<Menu/>} exact></Route>
          <Route path='/crear-menu' element={<CrearMenu/>} exact></Route>
          {/* <Route path='/editar/:_id' element={<EditarUsuario/>} exact></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
