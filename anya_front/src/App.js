import './App.css';
import NavBar from './components/NavBar';
import RolePage from './pages/RolePage';
import { Route, Routes } from "react-router-dom";
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <NavBar />
      <div className="App" >
        <Routes>
          <Route
            exact path='/'
            element={<LoginPage />}
          />
          <Route
            exact path='/role'
            element={<RolePage />}
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
