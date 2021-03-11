import * as React from "react";

import "./config.css";
import GithubAPi from "./githubapi";

export default class Config extends React.Component {
  constructor(props) {
    super(props);
    this.state = { config: undefined };
    this.token = React.createRef();
    this.db_name = "sample.json";
  }

  saveDbFile() {
    var githubApi = new GithubAPi("overraider", "botdashboard", "db");
    githubApi.update(
      this.state.config.path,
      this.state.config.data,
      this.token.current.value,
      function(err, result, id) {
        if (!err) {
          console.log(result);
          console.log(id);
        }
      }
    );
  }

  loadDbFile() {
    var githubApi = new GithubAPi("overraider", "botdashboard", "db");
    githubApi.get(this.db_name, (err, res) => {
      if (res === null || res === undefined || res === "") {
        res = {
          description: "Config description",
          name: "my config",
          users: []
        };
      }

      let newState = { ...this.state };
      newState.config = {
        path: this.db_name,
        data: res.content
      };
      this.setState(newState);
    });
  }

  onChangeUserActiveState(userIndex) {
    let newState = { ...this.state };
    newState.config.data.users[userIndex].active = !newState.config.data.users[
      userIndex
    ].active;

    this.setState(newState);
  }

  onAddRole(event, userIndex) {
    if (event.keyCode === 13 && event.currentTarget.value !== "") {
      let newState = { ...this.state };
      newState.config.data.users[userIndex].roles.push(
        event.currentTarget.value
      );
      this.setState(newState);
      event.currentTarget.value = "";
    }
  }

  onAddUser(event) {
    if (event.keyCode === 13 && event.currentTarget.value !== "") {
      let newUser = {
        name: event.currentTarget.value,
        active: true,
        roles: []
      };

      let newState = { ...this.state };
      newState.config.data.users.push(newUser);
      this.setState(newState);
      event.currentTarget.value = "";
    }
  }

  renderFile(config) {
    return (
      <React.Fragment>
        <h1>
          Config name : {config.data.users.length}   {config.data.name} ({config.path})
        </h1>{" "}
        <p>{config.data.description}</p>
        <div className="userlist">
          <br />
          <ul className="grid-container">
            {config.data.users && config.data.users.length > 0
              ? config.data.users.map((user, userIndex) => {
                  let roles =
                    user.roles && user.roles.length > 0
                      ? user.roles.join(",")
                      : null;

                  return (
                    <p>
                      {user.name}
                      <br />
                      Is active :{" "}
       
                      <br />
                      Roles : {roles}
                      <br />
                      
                    </p>
                  );
                })
              : null}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        {this.state.config !== null && this.state.config !== undefined ? (
          this.renderFile(this.state.config)
        ) : (
          <React.Fragment>
           	<p>
          	{this.loadDbFile()}
          	 </p>
            <br />
          </React.Fragment>
        )}
      </div>
    );
  }
}
