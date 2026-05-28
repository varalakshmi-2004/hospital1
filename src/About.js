import React from 'react';
const people = [
  {
    name: 'B.Sai Pranusha',
    email: '23a81a05e5@svec.org.in',
    phone: '+91-555-123-4567'
  },
  {
    name: 'M.Pujitha',
    email: '23a81a05g8@svec.org.in',
    phone: '+91-123-234-5678'
  },
  {
    name: 'K.Divya Padmaja',
    email: '23a81a05f9@svec.org.in',
    phone: '+91-555-123-6789'
  },
  {
    name: 'A.Meghana Beyanka',
    email: '23a81a05d8@svec.org.in',
    phone: '+91-555-456-1234'
  },
   {
    name: 'Y.Bhavani sri',
    email: '23a81a05j8@svec.org.in',
    phone: '+91-946-456-1234'
  },
  {
    name: 'Y.Durga Naga Vara lakshmi',
    email: '23a81a05j9@svec.org.in',
    phone: '+91-555-567-5678'
  },
   {
    name: 'J.Kyathi srihitha',
    email: '23a81a05f8@svec.org.in',
    phone: '+91-529-567-5678'
  }
];

function About() {
  const appStyle = {
    padding: '20px',
    fontFamily: 'Arial',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
    textShadow: '1px 1px 2px black'
  };

  const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: 'auto'
  };

  return (
    <div style={appStyle}>
      <div style={contentStyle}>
        <h1>About Our Website</h1>
        <p>
        Welcome to our simple health and wellness website. Our goal is to provide clear and useful instructions 
  to help people manage their health more effectively. We offer guidance and tips based on various common 
  health conditions — such as diabetes, high blood pressure, obesity, and more — with easy-to-follow 
  recommendations on diet, hydration, lifestyle, and daily routines. In addition to this, we also recommend trusted hospitals and healthcare centers to support your health journey.

        </p>

        <h2>Contact Information</h2>
        {people.map((person, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{person.name}</h3>
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;