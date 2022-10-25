import { useState } from 'react';
import './App.css';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import Checkedoutvehicles from './components/vehicle-manager/Checkedoutvehicles';
import Parkedvehicle from './components/vehicle-manager/Parkedvehicle';
import{BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
 
  const [vehicles,setVehicles]=useState([])
  const [checkedOut,setCheckedOut]=useState([])
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<><Navbar/><Mainpage vehicles={vehicles} setVehicles={setVehicles} /></>}/>
      <Route path='/parkedvehicles' element={<><Navbar/><Parkedvehicle vehicles={vehicles} setVehicles={setVehicles} checkedOut={checkedOut} setCheckedOut={setCheckedOut}/></>}/>
      <Route path='/checkedoutvehicles' element={<><Navbar/><Checkedoutvehicles checkedOut={checkedOut} setCheckedOut={setCheckedOut}/> </>}/>
    
    
    
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
