import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { githubLogin } = useParams();

  return (
    <div>
      <h2>GitHub username: {githubLogin}</h2>
    </div>
  );
}

export default UserProfile;
