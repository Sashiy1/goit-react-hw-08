import css from "../Feedback/Feedback.module.css"

const Feedback = ({ feedback, totalFeedback }) => {
  return (
    <div>
      <p className={css.fbIdentificator}>Neutral: {feedback.neutral}</p>
      <p className={css.fbIdentificator}>Good: {feedback.good}</p>
      <p className={css.fbIdentificator}>Bad: {feedback.bad}</p>
      <p className={css.fbIdentificator}>Total: {totalFeedback}</p>
      <p className={css.fbIdentificator}>Positive: {Math.round((feedback.good / totalFeedback) * 100)}%</p>
    </div>
  );
};

export default Feedback;


