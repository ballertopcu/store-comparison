import React from 'react'
import Utils from '../../Utils/Utils';
import styles from './Search.module.css'

export const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <span>{Utils.getIcon('search')}</span>
      <input type="text" placeholder="Search" className={styles.search}/>
    </div>
  );
}
