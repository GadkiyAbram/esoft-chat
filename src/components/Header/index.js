import React from 'react';
import './style.css';

const Header = (props) => {

  return(
    <header className="header">
        <div style={{display: 'flex'}}>
          <div>
            <img className="esoft_logo" src='https://techvillage.ru/assets/thumbs/270x200/5b12bc7a8bbdb.png' style={{ height: 50, width: 50, margin: 5 }} />
          </div>
          <div className="logo">ESOFT Chat</div>
        </div>
          <div style={{margin: '20px 0', color: '#fff', fontWeight: 'bold'}}>
          </div>
    </header>
   )

 }

export default Header