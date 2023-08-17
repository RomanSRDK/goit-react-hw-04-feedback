import PropTypes from 'prop-types';
import styles from '../Notification/Notifications.module.css'; 


const Notification = ({ message }) => {
    return (
        <p className={styles.p}>{message}</p>
    )
}

Notification.propTypes = {
    message:PropTypes.string.isRequired,
}
export default Notification