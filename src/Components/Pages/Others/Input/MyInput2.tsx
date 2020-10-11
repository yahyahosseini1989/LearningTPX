import * as React from 'react';

export interface MyInput2Props {
    onChange?: any;
    onBlur?: any;
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

    private testPattern() {
        let InputPattern = this.props.pattern;
        let InputValue = this.props.value;
        if (InputPattern?.test(InputValue)) {
            return true;
        } else {
            return false;
        }
    }

    private renderError() {
        let className = 'border-danger';
        if (this.testPattern() === false) {
            return (
                <small className={"form-text text-danger"}>
                    Not valid
                </small>
            )
        } else {
            return ""
        } 
    }

    render() {
        return (
            <>
                <label
                    className={"mt-2"}
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
                    onBlur={() => { this.renderError() }}
                />
                {this.renderError()}
            </>
        );
    }
}

export default MyInput2;