import './App.css';
import { useEffect, useCallback, useState } from 'react';

function App() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'http://localhost:9000/notifications'
      );
      const data = await response.json();
      setNotifications(data);
      setIsLoading(false);
      setFetched(true);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setFetched(true);
    }
  }, []);

  useEffect(() => {
    if (notifications.length === 0 && !isLoading && !fetched) {
      fetchData();
    }
  }, [fetchData, notifications, isLoading, fetched]);

  return (
    <div className="App">
      <header className="App-header">
        <h4>Notifications:</h4>
        {Array.isArray(notifications) && notifications.length > 0 ? (
          <ul>
            {notifications.map(({ subject, message }, index) => (
              <li
                key={`${subject}-${index}`}
              >{`Subject: ${subject} -- Message: ${message}`}</li>
            ))}
          </ul>
        ) : (
          <p>No notifications found.</p>
        )}
      </header>
    </div>
  );
}

export default App;
