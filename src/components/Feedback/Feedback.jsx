import s from './Feedback.module.css';

export default function Feedback({feedback, totalFeedback, positiveFeedback}) {
  return (
      <ul>
          {Object.keys(feedback).map(key => (<li key={key} className={s.liItem}>{key}: {feedback[key]}</li>))}
          <li className={s.liItem}>Total: {totalFeedback}</li>
          <li className={s.liItem}>Positive: {positiveFeedback}%</li>
      </ul>
  );
}