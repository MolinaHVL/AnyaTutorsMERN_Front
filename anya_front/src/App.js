import './App.css';
import NavBar from './components/NavBar';
import RolePage from './pages/RolePage';
import { Route, Routes } from "react-router-dom";
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import Index from './pages/Index';
import UserLogPage from './pages/UserLogPage';
import UserRegisterPage from './pages/UserRegisterPage';


/**
 * Este es el componente principal de la aplicación.
 * Contiene una barra de navegación y rutas que muestran diferentes páginas 
 * según la URL actual. Las páginas disponibles son:
 * - LoginPage: una página de inicio de sesión.
 * - RolePage: una página que permite al usuario seleccionar su rol (estudiante o profesor).
 * - StudentPage: una página para estudiantes.
 * - TeacherPage: una página para profesores.
 * 
 * Este componente utiliza React Router para definir las rutas y mostrar las páginas.
 */


function App() {

  return (
    <>
      <NavBar />
      <div className="App" >
        <Routes>
          <Route
            exact path='/'
            element={<Index />}
          />
          <Route
            exact path='/role'
            element={<RolePage />}
          />
          <Route
            exact path='/UserLogIn'
            element={<UserLogPage />}
          />
          <Route
            exact path='/UserRegister'
            element={<UserRegisterPage />}
          />
          <Route
            path='/student'
            element={<StudentPage />}
          />
          <Route
            path='/teacher'
            element={<TeacherPage />}
          />
        </Routes>

      </div>
    </>
  );
}

export default App;
