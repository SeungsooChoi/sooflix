import React from "react";
import Router from "Component/Router";
import GlobalStyles from "Component/GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
