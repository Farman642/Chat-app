import React, { useEffect ,useState} from 'react';
import { useNavigate } from "react-router-dom";

const GoogleCalendarRedirect = () => {

    const [code, setCode] = useState('');
  const [scope, setScope] = useState('');

  useEffect(() => {
    // Extract query parameters from the URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const codeParam = urlSearchParams.get('code');
    const scopeParam = urlSearchParams.get('scope');

    // Update state with the extracted values
    setCode(codeParam || '');
    setScope(scopeParam || '');
  }, []);
  
    
    const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action you want with the input value
    console.log('Form submitted with input value:', inputValue);
 
    // Perform any action you want with the code and scope values
    console.log('Form submitted with code:', code, 'and scope:', scope);
  };
    const navigate = useNavigate();
    useEffect(() => {
      const handleRedirect = async () => {
        try {
          // Get the authorization code from the query parameters
          const code = await new URLSearchParams(window.location.search).get('code');
  
          // Make a request to your backend to exchange the code for access tokens
          const response = await fetch(`http://localhost:4000/google/redirect?code=${code}`);
          const data = await response.json();
  
          console.log('Google Calendar connection successful:', data);
          navigate('/schedule_event')
        } catch (error) {
          console.error('Error handling Google Calendar redirect:', error);
        }
      };
  
      handleRedirect();
      
    }, [navigate]);

    return (
      <div>
        <h2>Handling Google Calendar Redirect...</h2>
        

        <form onSubmit={handleSubmit}>
        <label>
          Enter something:
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  };
  
  export default GoogleCalendarRedirect;