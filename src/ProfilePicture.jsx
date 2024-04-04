import React from 'react';
import img from './assets/profile.jpg';

function ProfilePicture() {
  return (
    <img className="profile-picture" src={img} alt="Profile" width="100" height="100" />
  );
}

export default ProfilePicture;