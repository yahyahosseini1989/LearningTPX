import * as React from "react";

export interface LoginProps {}

export interface LoginState {
  val: string;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state = {
    val: "",
  };

  private onchangeHandler = (e: any) => {
    this.setState({
      ...this.state,
      val: e.target.value,
    });
  };
  private submitHandler = () => {
    alert(this.state.val);
  };
  private onblurHandler = () => {
    if (this.state.val == "") {
      return <span>Please Fill The Input</span>;
    }
    else{
      return <br />;
    }
  };
  private resetHandler() {
    this.setState({val : ''})
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.val}
          onChange={this.onchangeHandler}
          onBlur={this.onblurHandler}
        />
        {this.onblurHandler()}

        <button // reset BTN
          onClick={()=>{this.resetHandler()}}
        >
          reset
        </button>

        <button // submit BTN
          disabled={this.state.val == "" ? true : false}
          onClick={() => {
            this.submitHandler();
          }}
        >
          submit
        </button>
      </>
    );
  }
}
