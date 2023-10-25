import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import Covid from './pages/Covid';
import Footer from './components/Footer';
import About from './pages/About';
import Ourservices from './pages/Ourservices';
import Contactus from './pages/Contactus';
import Casestudy from './pages/Casestudy';
import Commercial from './pages/Commercial';
import img1 from './assets/CP1-3.png'
import img2 from './assets/packaging-printing.png'
import img3 from './assets/Retail.png'
import {table1,table1_li,table1_head,table2, table2_li,table2_head, table3, table3_li, table3_head} from './pages/content'
import Commercialexp from './pages/Commercialexp';
import Packaging from './pages/Packaging';
import Pos from './pages/Pos';
import Openings from './pages/Openings';
import Registration from './pages/Registration';
import Employess from './pages/Employess';
import Csr from './pages/Csr';
import Privacy from './pages/Privacy';
import News from './pages/News';
import Faq from './pages/Faq';
import Popcontact from './components/Popcontact';
import Admin from './pages/Admin';
import { useNavigate } from 'react-router-dom'
import Login from './pages/Login';
import Test from './pages/Test';


function App() {
  const [show, setShow] = useState(false);
  const [access, setAccess] = useState(false)
  const navigate = useNavigate();

  const settingAccess = (val) => {
    setAccess(val)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App" style={{backgroundColor:"#F5F5F5"}}>
        <Header/>
      <Popcontact show={show} handleClose={handleClose} />
        <Routes>
            <Route path='/' element={<Home handleShow={handleShow} />} />
            <Route path='/faq' element={<Faq/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/privacy-policy' element={<Privacy/>} />
            <Route path='/csr' element={<Csr/>} />
            <Route path='/employees-engagement' element={<Employess/>} />
            <Route path='/commercial-printing-exp' element={<Commercialexp/>} />
            <Route path='/packaging-printing-exp' element={<Packaging/>} />
            <Route path='/case-studies' element={<Casestudy/>} />
            <Route path='/pos-exp' element={<Pos/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/openings' element={<Openings/>} />
            <Route path='/commercial-printing' element={<Commercial  handleShow={handleShow}  img1={img1} table1={table1} table1_head={table1_head} table1_li={table1_li}  />} />
            <Route path='/packaging-printing' element={<Commercial handleShow={handleShow} img1={img2} table1={table2} table1_head={table2_head} table1_li={table2_li} />} />
            <Route path='/pos' element={<Commercial table1={table3}  handleShow={handleShow}img1={img3} table1_head={table3_head} table1_li={table3_li} />} />
            <Route path='/covid' element={<Covid/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/Our-services' element={<Ourservices/>} />
            <Route path='/Contact-us' element={<Contactus/>} />
            <Route path='/admin' element={<Admin access={access} />} ></Route>
            <Route path='/login' element={<Login settingAccess={settingAccess} />} ></Route>
            <Route path='/test' element={<Test />} ></Route>
        </Routes>
        <Footer/>
      
    </div>
  );
}

export default App;
