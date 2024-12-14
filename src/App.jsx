import './App.css';
import {useEffect, useState} from 'react';
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = window.localStorage.getItem("saved-feedback");

        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }

        return resetFeedback();
    });

    const totalFeedback = Object.values(feedback).reduce((acc, value) => acc + value, 0);
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

    const updateFeedback = feedbackType => {
        setFeedback(prevState => ({...prevState, [feedbackType]: prevState[feedbackType] + 1}));
    }

    const resetFeedback = () => {
        setFeedback({good: 0, neutral: 0, bad: 0});
    }

    useEffect(() => {
        window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
    }, [feedback]);

    return (
        <>
            <Description/>
            <Options feedback={feedback} updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
            {totalFeedback === 0 ? <Notification /> :<Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>}
        </>
    )
}

export default App
