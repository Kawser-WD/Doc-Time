import './App.css';
import Main from './pages/Home/Main/Main';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Appoinment from './pages/Appoinment/Appoinment/Appoinment';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Payment from './pages/Payment/Payment';
import AddDoctor from './pages/Dashboard/AddDoctor/AddDoctor';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import Doctors from './pages/Dashboard/Doctors/Doctors';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/appointment" element={
        <PrivateRoute>
          <Appoinment/>
        </PrivateRoute>
      }/>
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      }>
      <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>}></Route>
      <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}></Route>
      <Route path={`/dashboard/addDoctor`} element={
      <AdminRoute> 
      <AddDoctor/>
      </AdminRoute>
      }></Route>
      <Route path={`/dashboard/doctors`} element={
      <AdminRoute> 
      <Doctors/>
      </AdminRoute>
      }></Route>
      <Route path={`/dashboard/makeAdmin`} element={
        <AdminRoute>
        <MakeAdmin></MakeAdmin>
        </AdminRoute>
      }></Route>
      </Route> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
