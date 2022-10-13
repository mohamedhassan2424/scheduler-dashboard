import React, { Component } from "react";

class Panel extends Component {
  render() {
    const {label, value, onSelect } = this.props;
    //console.log("VALUE ", value)
    return (
      <section
        className="dashboard__panel" onClick={onSelect}>
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;