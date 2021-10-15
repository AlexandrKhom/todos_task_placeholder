import React from 'react';
import logo from './logo.svg';
import styles from './Logo.module.css';

export function Logo() {

  return (
    <div className={styles.headerWrapper}>
      <img src={logo} className={styles.logo} alt="logo"/>
    </div>
  );
}
