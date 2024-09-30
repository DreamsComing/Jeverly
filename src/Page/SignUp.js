import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({setLogedIn, setDateUser, closeSignUp, setCloseSignUp }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      password,
      age: parseInt(age, 10),
      gender,
    };



    // Reset the form
    setName('');
    setPassword('');
    setAge('');
    setGender('');

    if((newUser.name.trim() && newUser.password.trim()) && newUser.age > '18') {
        setCloseSignUp({
            visibility: 'hidden',
            opacity: 0,
            transform: `scale(${0})`,
          });
          setLogedIn({
            visibility: 'visible',
            opacity: 1,
            transform: `scale(${1})`,
          });
          setDateUser((prevUsers) => [...prevUsers, newUser]);
    }

  };

  const openLogin = () => {
    setCloseSignUp({
      visibility: 'hidden',
      opacity: 0,
      transform: `scale(${0})`,
    });
    setLogedIn({
      visibility: 'visible',
      opacity: 1,
      transform: `scale(${1})`,
    });
  };

  return (
    <div style={closeSignUp} className="signup-form">
      <div className='cancel'>
        <button onClick={openLogin}>x</button>
      </div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="gender">Gender</label>
          <div className='options'>
            <div className='male'>
              <input 
                type='radio'
                name='gender'
                id='male'
                onChange={() => setGender('Male')}
              />
              <label>Male</label>
            </div>
            <div className='female'>
              <input
                type="radio"
                name='gender'
                id='female'
                onChange={() => setGender('Female')}
              />
              <label>Female</label>
            </div>
            <div className='otherGender'>
              <input 
                type='radio' 
                name='gender' 
                id='other'
                onChange={() => setGender('Other')}
              />
              <label>Other</label>
            </div>
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
