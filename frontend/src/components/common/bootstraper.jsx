import React, { Component, Children } from "react";

class Bootstraper extends Component {

  componentDidMount() {
  }

  bootstrap() {
    return Promise.all(this.props.actions.map(action => action()));
  }

  render() {
    const childrenWithProps = Children.map(this.props.children,
      child => React.cloneElement(child, {
        result: this.state.result,
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default Poller;
