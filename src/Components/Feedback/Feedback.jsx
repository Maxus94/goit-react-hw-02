import css from "./Feedback.module.css";

const Feedback = ({ values: { good, neutral, bad }, totalFeedback }) => {
  return (
    <ul className={css.feedbacList}>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{totalFeedback}</span>
      </li>
      <li>
        Positive:{" "}
        <span>{Math.round(((good + neutral) / totalFeedback) * 100)}%</span>
      </li>
    </ul>
  );
};

export default Feedback;
