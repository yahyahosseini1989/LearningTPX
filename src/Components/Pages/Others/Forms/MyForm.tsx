import React from 'react';
import Input from '../Input/Input';
import { Pattern } from '../../../Config/Pattern';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export interface MyFormProps {

}

export interface MyFormState {
    val: string;
    setValue: string | object;
    handleSubmit: boolean;
}

class MyForm extends React.Component<MyFormProps, MyFormState> {

    state = {
        val: "",
        setValue: {
            inputEmail: "",
            inputPhone: "",
            inputPass: "",
        },
        handleSubmit: false,
    }

    private handleChange = (e: any, ElName: "inputEmail" | "inputPhone" | "inputPass") => {
        console.log(e, ElName);
        this.setState({
            ...this.state,
            setValue: {
                ...this.state.setValue,
                [ElName]: e,
            }
        })
    };
    private handleSubmit() {
        this.hendleButton() 
    }

    private hendleButton() {
        // toast.success(`عملیات با موفقیت انجام گردید`, {
        //     position: "top-center",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        // });
        toast.error("اعمال با مشکل مواجه شد", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
        // let x = 0;
        // let y = x + " " +"mammad";
        // let z = `${x} mammad ${y}`;

        // console.log( z);
        
    }

    render() {
        return (
            <>
                <div className="container">
                    <h2>Register Form</h2>

                    <Input
                        onChange={(e: any) => { this.handleChange(e.target.value, "inputEmail") }}
                        value={this.state.setValue.inputEmail}
                        type={"text"}
                        className={"form-control"}
                        placeholder={"Enter your email"}
                        required={true}
                        label={"Email"}
                        name={"inputName"}
                        pattern={Pattern.email}
                    />

                    <Input
                        onChange={(e: any) => { this.handleChange(e.target.value, "inputPhone") }}
                        value={this.state.setValue.inputPhone}
                        type={"text"}
                        className={"form-control"}
                        placeholder={"Enter your phone"}
                        required={true}
                        label={"phone"}
                        name={"inputName"}
                        pattern={Pattern.phone}
                    />
                    <Input
                        onChange={(e: any) => { this.handleChange(e.target.value, "inputPass") }}
                        value={this.state.setValue.inputPass}
                        type={"text"}
                        className={"form-control"}
                        placeholder={"Enter your password"}
                        required={true}
                        label={"password"}
                        name={"inputName"}
                        pattern={Pattern.password}
                        submit={this.state.handleSubmit}
                    />

                    <button
                        
                        className="btn btn-success"
                        onClick={() => {this.handleSubmit()}}
                    >
                        ارسال
                    </button>

                </div>
            </>
        );
    }
}
export default MyForm;