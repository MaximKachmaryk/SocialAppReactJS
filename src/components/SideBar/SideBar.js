import React from 'react';
import styles from './Sidebar.module.css';

function Friends(props) {
  return (
    <div className={styles['friends-container']}>
      <h1 className={styles['friends-title']}>My Friends</h1>
      <ul className={styles['friends-list']}>
        {props.friends.map((friend) => (
          <li className={styles['friend-item']} key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;
