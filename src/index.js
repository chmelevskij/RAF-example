import React from "react";
import ReactDOM from "react-dom";
import { throttle } from "lodash";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScrollRaf = throttle(this.handleScrollRaf.bind(this));
    this.handleScroll = throttle(this.handleScroll.bind(this), 100);
  }
  handleScrollRaf() {
    console.log("raf");
  }
  handleScroll() {
    console.log("setTimeout");
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollRaf);
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="App" style={{ minHeight: "1000vh" }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
