import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      const newFeedback = { ...prevFeedback };
      newFeedback[feedbackType] = prevFeedback[feedbackType] + 1;
      return newFeedback;
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });

    setShowFeedback(false);
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("savedFeedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    handleShowFeedback();
    window.localStorage.setItem("savedFeedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const handleShowFeedback = () => {
    if (totalFeedback > 0) {
      setShowFeedback((prevState) => true);
    }
  };

  return (
    <>
      <Description />
      <Options
        handleClick={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={resetFeedback}
      />
      {showFeedback ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
