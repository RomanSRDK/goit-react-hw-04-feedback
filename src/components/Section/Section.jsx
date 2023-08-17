import React from "react";
import styles from '../Section/Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
    return (
        <section>
            <h2 className={styles.title}>{title}</h2>
           
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}
