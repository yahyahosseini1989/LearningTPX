import React from "react";
import Alert from 'react-bootstrap/Alert'
import Button from "react-bootstrap/esm/button";

export interface TestProps {}

export interface TestState {}

class Test extends React.Component<TestProps, TestState> {
  state = { AlertShow: true }
  render() {
    return (
      <>
      <Alert show={this.state.AlertShow} variant="success">
        <Alert.Heading>Hey there...</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
        <button onClick={() => (this.state.AlertShow)} >
            Close me y'all!
          </button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
    );
  }
}

export default Test;
