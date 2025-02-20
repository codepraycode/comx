"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, DatePickerProps, Input } from "antd";
import { RequiredInputProps } from "./forms.types";
import { InputWrapper } from "./InputWrapper";

export interface InputProps extends RequiredInputProps {
    email?: boolean;
    date?: boolean;
    multi?: boolean;
}

function BaseTextInput(props: InputProps & { withWrapper?: boolean }) {
    const {
        type = "text",
        error,
        onChange,
        onKeyDown,
        onBlur,
        withWrapper = true,
        name,
        ...restProps
    } = props;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) return onChange(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (onKeyDown) return onKeyDown(e);
    };

    const handleBlur = () => {
        if (onBlur) return onBlur();
    };

    const template = (
        <Input
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            status={error && "error"}
            className="form-input-text"
            type={type}
            // placeholder={placeholder}
            // value={value}
            // disabled={disabled}
            name={name}
            {...restProps}
            // required={required}
        />
    );

    if (withWrapper)
        return <InputWrapper error={error}>{template}</InputWrapper>;

    return template;
}

function EmailTextInput(props: RequiredInputProps) {
    return <BaseTextInput {...props} type="email" />;
}

function DateTextInput(props: any) {
    const onChange: DatePickerProps["onChange"] = (date, dateString) => {
        console.log(date, dateString);
    };

    // TODO: Display date of birth in words with age
    // TODO: Date string should be date only, not with time
    return (
        <InputWrapper error={props.error}>
            <DatePicker
                format="YYYY-MM-DD"
                onChange={onChange}
                className="form-input-text"
                {...props}
            />
        </InputWrapper>
    );
}

export default function TextInput(props: InputProps) {
    const { email, date, ...restProps } = props;

    if (email) {
        return <EmailTextInput {...restProps} />;
    }

    if (date) {
        return <DateTextInput {...restProps} />;
    }

    // if (multi) {
    //     return <MultiTextInput {...restProps} />;
    // }

    return <BaseTextInput {...restProps} />;
}
