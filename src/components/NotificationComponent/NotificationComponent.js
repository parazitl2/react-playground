import styles from './Notification.module.css';

export const NotificationComponent = ({ render, buttons, isUrgent }) => {
  return (
    <div className={styles.notification}>
      <div>
        {render(isUrgent)}
      </div>
      <div>
        {buttons}
      </div>
    </div>
  );
};