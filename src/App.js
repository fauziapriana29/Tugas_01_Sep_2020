import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar.jsx'
import Form from './Component/Form/Form.jsx'
import Table from './Component/Table/Table';

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Form />
      <br/>
      <Table/>
    </div>
  );
}

export default App;
