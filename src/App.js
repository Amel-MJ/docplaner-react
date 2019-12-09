import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './componente/navbar.js'

const menu=[
  {title:'About us',url:"/about-us",className:"is-current"},
  {title:'Career',url:"/career" },
  {title:'Departments',
  
  drop:
  [{title:"Marketing & PR", url:"/department?dep=marketing"},
  {title:"Customer Success & Sales",url:"/department?dep=customer"},
  {title:"IT, Product, Design & UX",url:"/department?dep=it"},
  {title:"Finance & Administration",url:"/department?dep=customer"},
  {title:"HR & more",url:"/department?dep=hr"}]}]

  

function App() {
  return (
    <div className="App">
      <Navbar x={menu}/>
      
    </div>
  );
}

export default App;
