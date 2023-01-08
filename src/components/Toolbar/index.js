import { Button } from '../Button'
import React from 'react'
import styles from './Toolbar.module.css'

export const Toolbar = ({handlers}) => {
  return (
    <div className={styles.toolbar}>
      {handlers.map((item, index) => {
        const {text, ...btnProps} = item
        return <Button key={index} {...btnProps}>{text}</Button>
      })}
    </div>
  )
}
