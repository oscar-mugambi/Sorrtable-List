import React from "react";
import "./style.css";
import { Spring, Transition, animated } from "react-spring/renderprops";

export default function TimeTravel({ upState, back, users }) {
  const timeTravelData = upState.length ? (
    <div className="timeTravel">
      <div className="actions">
        <span className="actionsHead">List of actions committed</span>
      </div>
      <div className="data">
        {upState.map((state, i) => {
          return (
            <div className="dataContainer" key={i}>
              <span className="listItem">{state.action}</span>
              <span
                className="btnTravel"
                onClick={() => {
                  back(i);
                }}
              >
                &nbsp;Time Travel
              </span>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="timeTravel">
      <p>Click the scroll arrows to start time travelling</p>
    </div>
  );

  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => <div className={props}>{timeTravelData}</div>}
    </Spring>
  );
}
