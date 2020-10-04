import * as React from "react";

export interface RegisterProps { }

export interface RegisterState {
  val: string;
  pageMode: string;
  Name: string;
  Phone: number | undefined;
  email: string;
  form: object;
}

enum pageMode {
  STEP1 = "STEP1",
  STEP2 = "STEP2",
  STEPFINAL = "STEPFINAL",
}

export class Register extends React.Component<RegisterProps, RegisterState> {
  state = {
    val: "",
    pageMode: pageMode.STEP1,
    Name: "",
    Phone: 0,
    email: '',
    form: {
      name: "",
      phone: "",
    }
  };

  private NextHandler = () => {
    this.setState({
      ...this.state,
      Name: "",
      pageMode: pageMode.STEP2,
    });

  };
  private PrevHandler = () => {
    this.setState({
      ...this.state,
      pageMode: pageMode.STEP1,
      Phone: undefined,
    });
  };
  private FinishHandler = () => {
    console.log(this.state.form);

  };
  // private keyUpHandler(e) {
  //   if (e.keyCode === 13) {

  //   }
  // }
  private onChangeHandler1 = (e: any) => {
    this.setState({
      ...this.state,
      Name: e.target.value,
      form: {
        name: e.target.value
      }
    });
  }
  private onChangeHandler2 = (e: any) => {
    this.setState({
      ...this.state,
      Phone: e.target.value,
      form: {
        phone: e.target.value,
      }
    });
  };

  private FirstStep = () => {
    return (
      <>
        <input
          type="text"
          value={this.state.Name}
          placeholder="enter your name"
          onChange={this.onChangeHandler1}
        // onKeyUp={() => this.keyUpHandler()}
        />
        <button
          // disabled = {}
          onClick={() => {
            this.NextHandler();
          }}
        >
          Next Step
        </button>
      </>
    );
  };

  private SecondStep = () => {
    return (
      <>
        <input
          value={this.state.Phone}
          placeholder="enter your phone number"
          onChange={this.onChangeHandler2}
        // onKeyUp={() => this.keyUpHandler()}
        />
        <button
          // disabled = {}
          onClick={() => {
            this.PrevHandler();
          }}
        >
          Previous Step
        </button>
        <button
          onClick={() => {
            this.FinishHandler();
          }}
        >
          Finish
        </button>
      </>
    );
  };

  render() {
    return (
      <>
        {(() => {
          switch (this.state.pageMode) {
            case pageMode.STEP1:
              return this.FirstStep();
            case pageMode.STEP2:
              return this.SecondStep();
            default:
              return undefined;
          }
        })()}
      </>
    );
  }
}
