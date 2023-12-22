const GoogleCalendarConnect = () => {
  const handleConnect = async () => {
    try {
      // Make a request to your backend to get the Google Calendar OAuth2 URL
      const response = await fetch('http://localhost:4000/google');
      const { url } = await response.json();

      // Redirect the user to the Google Calendar OAuth2 URL
      window.location.href = url;
    } catch (error) {
      console.error('Error connecting to Google Calendar:', error);
    }
  };

  return (
    <div>
      <h2>Connect to Google Calendar</h2>
      <button onClick={handleConnect}>Connect</button>
    </div>
  );
};

export default GoogleCalendarConnect;


// export default GoogleAuthButton;





