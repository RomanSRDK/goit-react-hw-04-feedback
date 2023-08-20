import PropTypes from 'prop-types';
import styles from '../FeedBacks/Feedbacks.module.css';

const Feedbacks = ({ options, buttonIncrement }) => {
    return (<div className={styles.container}>
        {options.map((feedback, index) => {
            return (<button className={styles.button} type='button' key={index} name={feedback} onClick={buttonIncrement}>{feedback}</button>)
        })}

    </div>);
};

Feedbacks.propTypes = {
    buttonIncrement: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
   
}

export default Feedbacks