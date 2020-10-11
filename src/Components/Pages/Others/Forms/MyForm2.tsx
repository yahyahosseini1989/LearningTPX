import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Pattern } from '../../../Config/Pattern';
import MyInput2 from '../Input/MyInput2';

export interface MyForm2Props {

}

export interface MyForm2State {
    InputValue: string | object;
}

class MyForm2 extends React.Component<MyForm2Props, MyForm2State> {

    state = {
        InputValue: {
            EmailInput: "",
            PassInput: "",
            PhoneInput: "",
        }
    }

    private notify() {
        toast.success('Awesome, Everything is good', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    }
    private error() {
        toast.error('Sorry, Something was wrong', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    }

    private ValidCheckButton() {
        console.log(this.state.InputValue);
        let x = this.state.InputValue.PhoneInput;
        if (this.state.InputValue.PhoneInput = x) {
            this.notify();
        } else {
            this.error();
        }
    }
    
    private inputHandle = (e: any, ElName: "EmailInput" | "PassInput" | "PhoneInput") => {
        this.setState({
            ...this.state,
            InputValue: {
                ...this.state.InputValue,
                [ElName]: e,
            }
        })
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-4 mb-2 text-center">
                            {/* <h1>This is my new form</h1> */}
                            <p>
                                I wanna to use form validation with RegExp, use keyUp and onBlur and use tostify alert.
                                <br />
                                If all of them was corect, show a viwe of thoose on a modal, else alert  the wrong.
                            </p>
                        </div>
                        <div className="col-12 mb-2">
                            <div className="card">
                                <div className="card-header">
                                    Please fill under filds.
                                </div>
                                <div className="card-body">
                                    <MyInput2
                                        onChange={(e: any) => { this.inputHandle(e.target.value, "EmailInput") }}
                                        value={this.state.InputValue.EmailInput}
                                        type={"email"}
                                        name={"email"}
                                        className={"form-control"}
                                        placeholder={"Enter Your E-Mail"}
                                        label={"Email"}
                                        pattern={Pattern.email}
                                    />
                                    <MyInput2
                                        onChange={(e: any) => { this.inputHandle(e.target.value, "PassInput") }}
                                        value={this.state.InputValue.PassInput}
                                        type={"text"}
                                        name={"pass"}
                                        className={"form-control"}
                                        placeholder={"Enter Your Password"}
                                        label={"Password"}
                                        pattern={Pattern.password}
                                    />
                                    <MyInput2
                                        onChange={(e: any) => { this.inputHandle(e.target.value, "PhoneInput") }}
                                        value={this.state.InputValue.PhoneInput}
                                        type={"text"}
                                        name={"phone"}
                                        className={"form-control"}
                                        placeholder={"Enter Your PhoneNumber"}
                                        label={"Phone"}
                                        pattern={Pattern.phone}
                                    />

                                    <button
                                        className={"btn btn-outline-success mt-3 mb-3"}
                                        type={"button"}
                                        onClick={() => { this.ValidCheckButton() }}
                                    >
                                        Check Inputs Validation
                                    </button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default MyForm2;