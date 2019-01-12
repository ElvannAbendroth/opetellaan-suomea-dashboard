import React from "react";

class Title extends React.Component {
  state = {};
  render() {
    return <h1 class="navbar-brand">{this.props.title}</h1>;
  }
}

export default Title;
