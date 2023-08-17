import React from "react";
import styles from '../Statistics/Statistic.module.css';
import PropTypes from 'prop-types';

export default function Statistic({Good, Neutral, Bad, total, positiveStats}) {
    return (
        <div className={styles.list}>
            <ul>
                <li className={styles.item}><p>Good: {Good}</p></li>
                <li className={styles.item}><p>Neutral: {Neutral}</p></li>
                <li className={styles.item}><p>Bad: {Bad}</p></li>
                <li className={styles.item}><p>Total: {total}</p></li>
                <li className={styles.item}><p>Positive Feedback: {positiveStats}%</p></li>
            </ul>
        </div>
    )
}
Statistic.propTypes = {
    Good:PropTypes.number.isRequired,
    Neutral:PropTypes.number.isRequired,
    Bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positiveStats:PropTypes.number.isRequired,
}