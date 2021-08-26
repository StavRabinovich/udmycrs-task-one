import React from 'react';
import classes from './Topbar.module.css'

const Topbar = () => {
  return(
    <header>
      <nav className={classes.Topbar}>
        <img src="https://www.newskarnataka.com/storage/photos/shares/amazon_mns_05012021.jpg" alt="Amazon Logo"></img>
      </nav>
    </header>
  ); 
}
export default Topbar;