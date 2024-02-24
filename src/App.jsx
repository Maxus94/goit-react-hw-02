import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Components/Description/Description";
import Options from "./Components/Options/Options";
import Feedback from "./Components/Feedback/Feedback";
import Notification from "./Components/Notification/Notification";

function App() {
  const [values, setValues] = useState(() => {
    const localValues = localStorage.getItem("feedbacks");
    if (localValues) {
      return JSON.parse(localValues);
    } else return { good: 0, neutral: 0, bad: 0 };
  });

  // const onLeaveFeedback = (option) => {
  //   setValues({
  //     ...values,
  //     [option]: values[option] + 1,
  //   });
  // };

  const totalFeedback = values.good + values.neutral + values.bad;

  useEffect(
    () => localStorage.setItem("feedbacks", JSON.stringify(values)),
    [values]
  );

  function updateFeedback(feedbackType) {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  }

  function resetFeedback() {
    setValues({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <div>
      <Description
        title="Sip Happens Café"
        information="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback values={values} totalFeedback={totalFeedback} />
      )}
      {totalFeedback === 0 && (
        <Notification notificationText="No feedback yet" />
      )}
    </div>
  );
}

export default App;
