import './App.css';
import RolePage from './pages/RolePage';
import { Route, Routes } from "react-router-dom";
import UserLogPage from './pages/UserLogPage';
import Index from './pages/index';
import Layout from './LayoutRoute';
import AdminGrid from './components/AdminGrid';
import AllStudents from './components/AllStudents';
import Chat from './components/ChatGlobal';
import StudentRegisterPage from './pages/StudentRegisterPage';
import TeacherRegisterPage from './pages/TeacherRegisterPage';
import CoursesComponent from './components/TeacherCourses';
import UserProfile from './components/profile';
import StudentCourses from './components/StudentCourses';
import AllTeachers from './components/AllTeachers';
import CoursesAvailable from './components/CoursesAvailable';




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
            path='AnyaTutorsMERN_Front/studentRegister'
            element={<StudentRegisterPage />}
          />
          <Route
            path='AnyaTutorsMERN_Front/teacher'
            element={<Layout><CoursesComponent /></Layout>}
          />
          <Route
            path='AnyaTutorsMERN_Front/teacherRegister'
            element={<TeacherRegisterPage />}
          />
          {/* Inside the application */}
          <Route
            path='AnyaTutorsMERN_Front/ListStudents'
            element={<Layout><AllStudents /></Layout>}
          />
          <Route
            path='AnyaTutorsMERN_Front/ListTeachers'
            element={<Layout><AllTeachers /></Layout>}
          />
          <Route
            path='AnyaTutorsMERN_Front/student'
            element={<Layout><CoursesAvailable /></Layout>}
          />
          <Route
            path="AnyaTutorsMERN_Front/admin"
            element={<Layout><AdminGrid /></Layout>}
          />
          <Route
            path='AnyaTutorsMERN_Front/chat'
            element={<Layout><Chat /></Layout>}
          />
          <Route
            path='AnyaTutorsMERN_Front/profile'
            element={<Layout><UserProfile /></Layout>}
          />
          <Route
            path='AnyaTutorsMERN_Front/studentCourses'
            element={<Layout><StudentCourses /></Layout>}
          />

        </Routes>

      </div>
    </>
  );
}

export default App;
