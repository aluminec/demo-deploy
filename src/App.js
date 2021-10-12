import React, { useState } from 'react';
import Welcome from './components/Welcome';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return <Welcome loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
}

export default App;
