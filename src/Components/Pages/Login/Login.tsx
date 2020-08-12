import * as React from "react";

interface LoginProps {}

interface LoginState {}

interface Ix {
  x: {
    phone?: number | undefined;
    name: string;
  };
}

export class Login extends React.Component<LoginProps, LoginState> {
  private mammad = () => {
    let x: any = {
      phone: 2,
      // name: "saeed",
    };
    this.abbas(x);
  };
  private abbas = (x: Ix) => {
    console.log(x);
  };

  componentDidMount = () => {
    this.mammad();
  };

  render() {
    return <></>;
  }
}
