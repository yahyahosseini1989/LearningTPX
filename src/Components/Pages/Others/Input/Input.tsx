import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';

export interface InputProps {
    onChange?: any;
    placeholder?: string;
    required?: boolean;
    type: string;
    className?: string;
    label?: string;
    name: string;
    disabled?: boolean;
    pattern?: RegExp;
    value?: any;
    submit?: any;
}
export interface InputState { }

class Input extends React.Component<InputProps, InputState> {

    // componentDidMount(){
    //     this.testPattern();
    // }
    private hendleButton() {
        toast.success(`عملیات با موفقیت انجام گردید`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        toast.error("عملیات با مشکل مواجه شد", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
    }
    private testPattern() {
        let checkValidate = this.props.pattern;
        let Value = this.props.value;

        if (checkValidate?.test(Value)) {
            return true;
        } else {
            return false;
        }
    }

    private renderError() {
        if (this.testPattern() === false) {
            return <em>eshtebah vared kardi</em>
        } else {
            return ""
        }
    }


    render() {
        return (
            <>
                <label
                    htmlFor={this.props.name}
                >
                    {this.props.label}
                </label>

                <input
                    id={this.props.name}
                    value={this.props.value}
                    name={this.props.name}
                    className={this.props.className}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    onChange={this.props.onChange}
                    disabled={this.props.disabled}
                />
                <div>
                    <p className="text-danger">
                        {this.renderError()}
                    </p>
                </div>
                <ToastContainer/>
            </>
        );
    }
}

export default Input;