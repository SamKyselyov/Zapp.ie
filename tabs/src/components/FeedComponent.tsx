import { FunctionComponent, useCallback, useState } from 'react';
import styles from './FeedComponent.module.css';
import FeedList from './FeedList';
import React from 'react';

const FeedComponent: FunctionComponent = () => {
  const [timestamp, setTimestamp] = useState(
    Math.floor(Date.now() / 1000 - 7 * 24 * 60 * 60),
  );
  const [activePeriod, setActivePeriod] = useState(7); // Set default to 7-days

  const handlePeriodClick = (days: number) => {
    setTimestamp(Math.floor(Date.now() / 1000 - days * 24 * 60 * 60));
    setActivePeriod(days);
  };

  return (
    <div className={styles.feedcomponent}>
      <div className={styles.tabs}>
        <div className={styles.tab}>
          <div className={styles.base}>
            <div className={styles.stringBadgeIconStack}>
              <b className={styles.stringTabTitle}>Feed</b>
            </div>
            <div className={styles.borderPaddingStack}>
              <div className={styles.borderBottom} />
            </div>
          </div>
        </div>
        <div className={styles.tab1}>
          <div className={styles.base1}>
            <div className={styles.stringBadgeIconStack}>
              <div className={styles.stringTabTitle}>Leaderboard</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pivotPointsdoubleFull60}>
        <div
          className={
            activePeriod === 7 ? styles.daysActive : styles.daysInactive
          }
          onClick={() => handlePeriodClick(7)}
          style={{ fontWeight: activePeriod === 7 ? 'bold' : 'normal' }}
        >
          7 days
        </div>
        <div
          className={
            activePeriod === 30 ? styles.daysActive : styles.daysInactive
          }
          onClick={() => handlePeriodClick(30)}
          style={{ fontWeight: activePeriod === 30 ? 'bold' : 'normal' }}
        >
          30 days
        </div>
        <div
          className={
            activePeriod === 60 ? styles.daysActive : styles.daysInactive
          }
          onClick={() => handlePeriodClick(60)}
          style={{ fontWeight: activePeriod === 60 ? 'bold' : 'normal' }}
        >
          60 days
        </div>
      </div>
      <FeedList timestamp={timestamp} />
    </div>
  );
};

export default FeedComponent;