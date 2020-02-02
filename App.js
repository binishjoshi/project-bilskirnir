import React, { useState } from 'react';

import HomeStack from './navigation/homeStack';
import SignInStack from './navigation/signInStack';

export default function App() {
  const[signedIn, setSignedIn] = useState(false);
  return(
    signedIn ? <HomeStack /> : <SignInStack />
  );
};