import * as React from 'react';

export interface MyInput2Props {
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

export interface MyInput2State {

}

class MyInput2 extends React.Component<MyInput2Props, MyInput2State> {

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
                <small
                    id={"emailHelp"}
                    className={"form-text text-muted"}
                    >
                    We'll never share your email with anyone else.
                </small>
            </>
        );
    }
}

export default MyInput2;