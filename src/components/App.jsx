import { Component } from 'react';
import styles from './App.module.css'
import Statistic from './Statistics/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notifications';
import Feedbacks from './FeedBacks/Feedbacks';

export default class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

    // отображение общего количества собранных отзывов из всех категорий
  countTotalFeedback =() =>{
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

 // процент положительных отзывов
 countPositiveFeedbackPercentage =() => {
  return `${Math.round((this.state.Good / this.countTotalFeedback()) * 100) || 0}`;
};

  render() {
    let total = this.countTotalFeedback();
    const { Good, Neutral, Bad } = this.state;
    return (
      <section className={styles.section}>
        <Section title='Please leave feedback'>
          <Feedbacks options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}></Feedbacks>
        </Section>
        <Section title='Statistics'>
          {total === 0 ? (<Notification message="There is no feedback" />) : (
              <Statistic
                Good={Good}
                Neutral={Neutral}
                Bad={Bad}
                total={this.countTotalFeedback()}
                positiveStats={this.countPositiveFeedbackPercentage()}
              />
          )}
        </Section>
      </section>
  );
  } 
};