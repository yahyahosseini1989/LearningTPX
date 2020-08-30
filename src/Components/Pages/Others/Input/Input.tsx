import * as React from 'react';

export interface InputProps {
    onChange?: () => void;
    placeholder?: string;
    required?: boolean;
    type: string;
    className?: string;
    label?: string;
    name: string;
    disabled?: boolean;
}
export interface InputState { }

class Input extends React.Component<InputProps, InputState> {
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
                    name={this.props.name}
                    className={this.props.className}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    onChange={this.props.onChange}
                    disabled={this.props.disabled}
                />
            </>
        );
    }
}

export default Input;