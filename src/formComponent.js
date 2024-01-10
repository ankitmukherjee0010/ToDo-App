import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './reduxActions';
import './index.css';

function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '' || city.trim() === '' || country.trim() === '') {
      alert('Please fill in the required details.');
      return;
    }
    dispatch(addItem({ name, city, country }));
    setName('');
    setCity('');
    setCountry('');
  };

  return (
    <div className="form-container">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
      <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default Form
