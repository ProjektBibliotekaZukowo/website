import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";

class Template extends React.Component {
  render() {
    console.log("Radek", this.props);
    const { children, data } = this.props;

    return (
      <Container>
        <Navigation data={data} />
        {children}
      </Container>
    );
  }
}

export default Template;
