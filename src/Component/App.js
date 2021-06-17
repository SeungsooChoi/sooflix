import React from "react";
import Router from "Component/Router";
import Header from "Component/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
