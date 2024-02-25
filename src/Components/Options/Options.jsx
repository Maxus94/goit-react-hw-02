import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <ul className={css.buttonsList}>
      <li>
        <button
          className={css.feedbackButton}
          onClick={() => updateFeedback("good")}
          type="button"
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.feedbackButton}
          onClick={() => updateFeedback("neutral")}
          type="button"
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.feedbackButton}
          onClick={() => updateFeedback("bad")}
          type="button"
        >
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li>
          <button
            className={css.feedbackButton}
            onClick={resetFeedback}
            type="button"
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
