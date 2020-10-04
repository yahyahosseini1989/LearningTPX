import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import MyInput2 from '../Input/MyInput2';

export interface MyForm2Props {

}

export interface MyForm2State {

}

class MyForm2 extends React.Component<MyForm2Props, MyForm2State> {

    state = {

    }
    private ValidCheckButton() {
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

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-4 mb-2 text-center">
                            <h1>This is my new form</h1>
                            <p>I wanna to use form validation with RegExp, use keyUp and onBlur and use tostify alert.</p>
                        </div>
                        <div className="col-12 mb-2">
                            <div className="card">
                                <div className="card-header">
                                    Please fill under filds.
                                </div>
                                <div className="card-body">
                                    <MyInput2
                                        type={"email"}
                                        name={"email"}
                                        className={"form-control mb-3"}
                                        placeholder={"Enter Your E-Mail"}
                                        label={"Email"}
                                    />
                                    <MyInput2
                                        type={"password"}
                                        name={"pass"}
                                        className={"form-control mb-3"}
                                        placeholder={"Enter Your Password"}
                                        label={"Password"}
                                    />
                                    <MyInput2
                                        type={"text"}
                                        name={"phone"}
                                        className={"form-control mb-3"}
                                        placeholder={"Enter Your PhoneNumber"}
                                        label={"Phone"}
                                    />
                                    <ToastContainer />
                                    <button
                                        className={"btn btn-outline-success mt-3 mb-3"}
                                        type={"button"}
                                        onClick={() => { this.ValidCheckButton() }}
                                    >
                                        Check Inputs Validation
                                    </button>
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