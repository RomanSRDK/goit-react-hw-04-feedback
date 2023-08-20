import { useState } from 'react';
import styles from './App.module.css'
import Statistic from './Statistics/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notifications';
import Feedbacks from './FeedBacks/Feedbacks';

export default function Component() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setState = ({target}) => {
    switch (target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const onLeaveFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / onLeaveFeedback()) * 100);
  };

  let total = onLeaveFeedback();

  return (
    <section className={styles.section}>
      <Section title="Please leave feedback">
        <Feedbacks
          options={['good', 'neutral', 'bad']}
          buttonIncrement={setState}
        ></Feedbacks>
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={onLeaveFeedback()}
            positiveStats={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </section>
  );
}