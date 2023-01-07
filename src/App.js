import logo from './logo.svg';
import './App.css';
import {Home} from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Certificate}  from './certificate';
import { Education}  from './education';
import  {Skill}  from './skill';
import  {Contact}  from './contact';

function App() {
  return (
    
    <div className='div1'>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Home/>,<Certificate/>,<Education/>,<Skill/>,<Contact/>]}></Route>
        <Route path='/certification' element={<Certificate/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/skills' element={<Skill/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
