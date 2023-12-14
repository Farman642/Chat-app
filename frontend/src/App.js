// import logo from './logo.svg';
import './App.css';
// import Calls from "./components/calls"
// import LoginSignup from "./components/Assets/Login-Signup/LoginSignup"
import { Route,Routes} from 'react-router-dom';
import Homepage from '../src/pages/Homepage.js'
import Chatpage from '../src/pages/Chatpage.js'

function App() {
  return (
  <div>
    {/* <Calls /> */}
    <Routes>
        <Route path ='/' Component={Homepage }/>
        <Route path ='/chats' Component={ Chatpage}/>
      </Routes>
      
  
  </div>

  ); 
}

export default App;
