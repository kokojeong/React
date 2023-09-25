import React, {useState} from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";
import '../css/new.css'

// css
// import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';  

// membership
import Register from './register';

import MyPage from './MyPage';


const App =()=> {
  const [name, setName] = useState('');
  const [mode, setMode] = useState('login'); //login, info


  //name change 
  const usechangeName =(n)=>{
    setName(n)
  }
  //mode change
  const usechangeMode =(m) =>{
    setMode(m)
  }

  const userData = {
    id : 'ahj1234',
    password: '1234',
    name : '안혜정'
  }
  const navigate = useNavigate();

  const chagneRegister =(n)=>{
    setName(n)
    setMode('register')
    navigate('/register')
    
  }
  const changeMode=(e)=>{
    e.preventDefault();
    setMode('info');
    navigate('/Throttle');
  }

  const userChang =(e)=>{
    e.preventDefault()
    setMode('login')
    navigate('/')
    alert('회원가입 되었습니다')
  }





  return (
    <div className="App">
        <HeaderAdmin userName={userData.name} name={name}/>
          <Routes>
            <Route path='/' element={<LoginForm userData={userData} changeMode={changeMode} setName={setName} />} />
            <Route path='/MyPage' element={<MyPage name={name} navigate={navigate} />} />
            <Route path='/Register'element={<Register userChang ={userChang} />} />
          </Routes>
        <Footer/>
        </div>
  );
}

export default App;