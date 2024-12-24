import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({ name: '', image: '', email: '', password: '' });

  useEffect(() => {
    // Get all profiles on component mount
    axios.get('/profiles')
      .then(res => setProfiles(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = event => {
    console.log("event.target : ",event.target);
    setNewProfile({ ...newProfile, [event.target.name]: event.target });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('name', newProfile.name.value);
    formData.append('email', newProfile.email.value);
    formData.append('password', newProfile.password.value);
    formData.append('image', newProfile.image.files[0]);

    // Create a new profile

    axios.post('/profiles', formData)
      .then(res => setProfiles([...profiles, res.data]))
      .catch(err => console.error(err));

    setNewProfile({ name: '', image: '', email: '', password: '' });
  };

  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            <p>Name: {profile.name}</p>
            <img src={`http://localhost:3000/${profile.image}`} alt={profile.name} />
          </li>
        ))}
      </ul>
      <h2>Create a New Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={newProfile.name.value} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={newProfile.email.value} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={newProfile.password.value} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={handleChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Profile;
