import React from 'react';
import './App.css';

function App() {
// function Open(){
//    let nav=document.getElementsByClassName("naviname")
//    nav.style.display="block"
// }
  return (
    <div className='navigation'>
      <div className='navi'>
        <h3>Ashok Naveen Kumar</h3>
        <nav className='naviname'>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skill'>Skill</a></li>
            <li><a href='#project'>Project</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
        {/* <div>
          <img onClick={()=>{Open()}} src='./menu.png'></img>
        </div> */}
      </div>
    </div>
  )
}

export default App
