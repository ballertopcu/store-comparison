import { Button } from '../Button'
import React from 'react'
import { useSelector } from 'react-redux'
import Utils from '../../Utils/Utils'
import styles from './Content.module.css'

export const Content = () => {
  const { text, icon, key } = useSelector((state) => state.page);
  return (
    <div className={styles.content}>
      <div className={styles.information}>
        <div className={styles.topBar}>
          <h3 className={styles.pageTitle}>
            {Utils.getIcon(icon, 30)}
            {text}
          </h3>
          <div className={styles.actions}>
            <Button icon="import">Import</Button>
            <Button icon="export">Export</Button>
            <Button icon="mail">Automations</Button>
          </div>
          <div className={styles.onlyIcons}>
            <Button icon="import"/>
            <Button icon="export"/>
            <Button icon="mail"/>
          </div>
        </div>
        <div className={styles.allSessions}>
          <Button divider={true} noPadding={true} style={{height: '25px'}}>
            Performance Report
          </Button>
          <Button divider={true} disabled={true} noPadding={true} style={{height: '25px'}}>
            All Sessions
          </Button>
          <Button endIcon="plus" style={{ color: "#0284c7", height: '25px' }} noPadding={true}>
            Add
          </Button>
        </div>
      </div>
      {Utils.getPage(key)}
    </div>
  );
};
