import React from 'react';
import { Header }  from './Header'; 
import Comments from './Comments';
import './App.css';

function App() {
  return (
   
    <div>
    <Header/>
      <Comments/>
   
    <footer className='footer'>
        <small>© 2022 BenAoun development. All rights reserved.</small>
    </footer>
</div>
  );
}

export default App;
