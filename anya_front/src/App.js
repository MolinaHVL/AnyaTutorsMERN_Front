import './App.css';
import RolePage from './pages/RolePage';
import { Route, Routes } from "react-router-dom";
import TeacherPage from './pages/TeacherPage';
import UserLogPage from './pages/UserLogPage';
import UserRegisterPage from './pages/UserRegisterPage';
import UserRegisterStep1 from './pages/UserRegisterStep1';
import Index from './pages/index';
import Layout from './LayoutRoute';
import AdminGrid from './components/AdminGrid';
import TeacherList from './components/Body Section/TeacherList';
import AllStudents from './components/AllStudents';
import Chat from './components/ChatGlobal';




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
      <div className="App" >
        <Routes>
          {/* Pages outside the application. */}
          <Route
            exact path='/AnyaTutorsMERN_Front'
            element={<Index />}
          />
          <Route
            path='AnyaTutorsMERN_Front/role'
            element={<RolePage />}
          />
          <Route
            path='AnyaTutorsMERN_Front/userLogIn'
            element={<UserLogPage />}
          />
          <Route
            path='AnyaTutorsMERN_Front/userRegister'
            element={<UserRegisterPage />}
          />
          <Route
            path='AnyaTutorsMERN_Front/teacher'
            element={<TeacherPage />}
          />
          <Route
            path='AnyaTutorsMERN_Front/userRegisterS1'
            element={<UserRegisterStep1 />}
          />
          {/* Inside the application */}
          <Route
            path='AnyaTutorsMERN_Front/ListStudents'
            element={<Layout><AllStudents /></Layout>}
          />
          <Route
            path='AnyaTutorsMERN_Front/student'
            element={<Layout><TeacherList /></Layout>}
          />
          <Route
            path="AnyaTutorsMERN_Front/admin"
            element={<Layout><AdminGrid /></Layout>}
          />
          <Route
            path='AnyaTutorsMERN_Front/chat'
            element={<Layout><Chat /></Layout>}
          />
        </Routes>

      </div>
    </>
  );
}

export default App;
