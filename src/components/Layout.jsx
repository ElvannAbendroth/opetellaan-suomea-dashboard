import React from "react";

import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Dashboard"
    };
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />

        <Content />

        <Footer />
      </div>
    );
  }
}

export default Layout;
