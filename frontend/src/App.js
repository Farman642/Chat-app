
// import logo from './logo.svg';
import './App.css';
// import Calls from "./components/calls"
// import LoginSignup from "./components/Assets/Login-Signup/LoginSignup"
import { Route,Routes} from 'react-router-dom';
import Homepage from '../src/pages/Homepage.js'
import Chatpage from '../src/pages/Chatpage.js'
import ChatPage from "../src/components/Chatpage";
import Home from "./components/calls/index";

function App() {
  return (
  <div>
    {/* <Calls /> */}
    <Routes>
        <Route path ='/' Component={Homepage }/>
        <Route path ='/chats' Component={ Chatpage}/>
        <Route path="/app" element={<Home />} />
            <Route path="/chat" element={<ChatPage />} />
      </Routes>
      
  
  </div>

  ); 

}

export default App;
