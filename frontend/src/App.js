import './App.css';
import { Route,Routes} from 'react-router-dom';
import Homepage from '../src/pages/Homepage.js'
// import Chatpage from '../src/pages/Chatpage.js'
import ChatPage from "../src/components/Chatpage/index.js";
import Calendar from "../src/components/calenderPage/calender.js";
import Home from "./components/calls/index";
import AddEvent from '../src/components/calenderPage/addEvent.js'
// import GoogleCalendarConnect from '../src/components/auth/Auth.js'
// import GoogleCalendarRedirect from '../src/components/auth/redirect.js'
import ChatProvider from './Context/ChatProvider.js';
function App() {
 
  return (
  <>
  <ChatProvider>
  {/* <GoogleCalendarConnect/> */}
  {/* <GoogleCalendarRedirect/> */}
    {/* <Calls /> */}
    <div><Routes>

    {/* <Route path="/google/redirect" element={<GoogleCalendarRedirect />} /> */}
        <Route path ='/' Component={Homepage }/>
        {/* <Route path ='/chats' Component={ Chatpage}/> */}
        <Route path ='/calendar' Component={Calendar }/>
        <Route path ='/addEvent' Component={ AddEvent }/>
        <Route path="/app" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      </div>
      <div id="calendar"></div>
    
      </ChatProvider>
  
  </>

  ); 

}

export default App;
