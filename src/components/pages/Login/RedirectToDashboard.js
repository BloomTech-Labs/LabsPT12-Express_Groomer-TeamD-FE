import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Redirect } from 'react-router-dom';
import { getProfileData } from '../../../api';

function RedirectToDashboard() {
  const { authState, authService } = useOktaAuth();
  const [path, setPath] = useState('');
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUser(null);
    } else {
      authService.getUser().then(info => {
        console.log(info);
        getProfileData(authState, info.sub).then(res => {
          setUser(res);
          if (res.is_groomer) setPath('/GroomerDash');
          else setPath('/userDash');
        });
      });
    }
  }, [authState, authService]);

  return path ? <Redirect to={path} /> : <div>Loading</div>;
}

export default RedirectToDashboard;
