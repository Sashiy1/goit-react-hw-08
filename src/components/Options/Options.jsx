import css from "../Options/Options.module.css"

const Options = ({ handleClick, handleReset, totalFeedback }) => {
  return (
    <div>
      <button className={css.optionButton} onClick={() => handleClick("good")}>Good</button>
      <button className={css.optionButton} onClick={() => handleClick("neutral")}>Neutral</button>
      <button className={css.optionButton} onClick={() => handleClick("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className={css.optionButton} onClick={() => handleReset()}>Reset</button>
      )}
    </div>
  );
};

export default Options;
