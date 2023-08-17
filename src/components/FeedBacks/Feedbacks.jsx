import PropTypes from 'prop-types';
import styles from '../FeedBacks/Feedbacks.module.css';

const Feedbacks = ({ options, onLeaveFeedback }) => {
    return (<div className={styles.container}>
        {options.map((feedback, index) => {
            return (<button className={styles.button} type='button' key={index} name={feedback} onClick={onLeaveFeedback}>{feedback}</button>)
        })}

    </div>);
};
Feedbacks.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
   
}

export default Feedbacks