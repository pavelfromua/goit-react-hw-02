import s from './Options.module.css';

export default function Options({ feedback, updateFeedback, totalFeedback, resetFeedback}) {

    return (
        <div>
            {Object.keys(feedback).map(feedbackType => (<button key={feedbackType}
                                                                onClick={() => updateFeedback(feedbackType)} className={s.button}>{feedbackType}</button>))}
            {totalFeedback === 0 ? '' : <button key="reset" onClick={resetFeedback}
                                                className={s.button}>Reset</button>}
        </div>
    );
}