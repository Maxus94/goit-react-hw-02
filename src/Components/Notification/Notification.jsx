import css from "./Notification.module.css";

const Notification = ({ notificationText }) => {
  return <p className={css.notificationText}>{notificationText}</p>;
};

export default Notification;
