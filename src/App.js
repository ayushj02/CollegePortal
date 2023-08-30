import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import FacultyHome from './components/Faculty/FacultyHome';
import FacultyLogin from './components/Faculty/FacultyLogin';
import FacultyRegister from './components/Faculty/FacultyRegister';
import Notices from './components/Faculty/Notices';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import StudentList from './components/StudentList';
import TimeTable from './components/TimeTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Landing/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/dashboard' exact element={<Dashboard/>}/>
        <Route path='/timetable' exact element={<TimeTable/>}/>
        
        <Route path='/facultyRegister' exact element={<FacultyRegister/>}/>
        <Route path='/facultyLogin' exact element={<FacultyLogin/>}/>
        <Route path='/facultyHome' exact element={<FacultyHome/>}/>
        <Route path='/Notices' exact element={<Notices/>}/>
        <Route path='/StudentList' exact element={<StudentList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
