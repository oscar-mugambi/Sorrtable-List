import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";
import up from "./Icons/up.svg";
import down from "./Icons/down.svg";
import { Spring, Transition, animated } from "react-spring/renderprops";

export default function Items({
  users,
  swapDown,
  swapUp,
  timeTravelUp,
  timeTravelDown,
  back,
  reserve,
}) {
  return (
    <div>
      <TransitionGroup>
        {users.map((user, index) => (
          <CSSTransition
            key={"css" + index}
            in={true}
            timeout={100}
            appear={true}
            classNames={{
              appear: "example-appear",
              appearActive: "example-appear-active",

              enter: "example-enter",
              enterActive: "example-enter-active",
              enterDone: "example-enter-done",

              exit: "example-exit-active",
              exitActive: "example-exit-active",
              exitDone: "example-exit-done",
            }}
          >
            <div className="user" key={user.id}>
              <span className="transition">{user.title}</span>
              {user.id !== 1 ? (
                <img
                  className="iconUp"
                  alt="up"
                  src={up}
                  onClick={() => {
                    swapUp(user.id);
                    timeTravelUp(user);
                    reserve("up", user.id);
                  }}
                />
              ) : (
                <img
                  hidden
                  className="iconDown"
                  alt="down"
                  src={down}
                  onClick={() => {
                    swapDown(user.id);
                    timeTravelDown(user);
                    reserve("down", user.id);
                  }}
                />
              )}
              {user.id !== 5 ? (
                <img
                  className="iconDown"
                  alt="down"
                  src={down}
                  onClick={() => {
                    swapDown(user.id);
                    timeTravelDown(user);
                    reserve("down", user.id);
                  }}
                />
              ) : (
                <img
                  hidden
                  className="iconDown"
                  alt="down"
                  src={down}
                  onClick={() => {
                    swapDown(user.id);
                    timeTravelDown(user);
                    reserve("down", user.id);
                  }}
                />
              )}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
