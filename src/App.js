import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Users from "./Components/Users";
import TimeTravel from "./Components/TimeTravel";
import "./App.css";

export default class App extends Component {
  state = {
    users: [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
          "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body:
          "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body:
          "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      },
    ],
  };

  secondState = {
    prevActions: [],
  };

  thirdState = {
    timeTravel: [],
  };

  swapUp = (id) => {
    if (id !== 1) {
      const users = this.state.users;
      const movingItem = users[id - 1];
      users.splice(id - 1, 1);
      users.splice(id - 2, 0, movingItem);
      movingItem.id = id - 1;
      users[id - 1].id = id;
      this.setState(users);
    }
    return;
  };

  swapDown = (id) => {
    if (id !== 5) {
      const users = this.state.users;
      const movingItem = users[id - 1];
      users.splice(id - 1, 1);
      users.splice(id, 0, movingItem);
      users[id - 1].id = id;
      movingItem.id = id + 1;
      this.setState(users);
    }
  };

  timeTravelUp = (user) => {
    const id = user.id + 1;
    const actions = this.secondState.prevActions;
    actions.unshift({
      action:
        "Moved post " +
        user.title +
        " from index " +
        id +
        " to index " +
        user.id,
    });
    this.secondState.prevActions = actions;
  };

  timeTravelDown = (user) => {
    const id = user.id - 1;
    const actions = this.secondState.prevActions;
    actions.unshift({
      action:
        "Moved post " +
        user.title +
        " from index " +
        id +
        " to index " +
        user.id,
    });
    this.secondState.prevActions = actions;
  };

  back = () => {
    const reverse = this.thirdState.timeTravel[0].a;
    const id = this.thirdState.timeTravel[0].b;
    if (reverse === "up") {
      console.log(this.thirdState.timeTravel);
      this.swapDown(id);
    }
    if (reverse === "down") {
      console.log(this.thirdState.timeTravel);
      this.swapUp(id);
      console.log(id);
    }
  };

  reserve = (a, b) => {
    this.thirdState.timeTravel.unshift({ a, b });
    return b;
  };

  render() {
    return (
      <div className="header">
        <div className="clip"></div>
        <h1 className="title">Sortable Post List</h1>
        <CSSTransition timeout={300} appear={true} classNames="fade">
          <div className="container">
            <Users
              users={this.state.users}
              swapDown={this.swapDown}
              swapUp={this.swapUp}
              timeTravelUp={this.timeTravelUp}
              timeTravelDown={this.timeTravelDown}
              back={this.back}
              reserve={this.reserve}
            />

            <TimeTravel
              upState={this.secondState.prevActions}
              back={this.back}
              users={this.state.users}
            />
          </div>
        </CSSTransition>
      </div>
    );
  }
}
