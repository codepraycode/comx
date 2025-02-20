"use client";

import { PropsWithChildren } from "react";
import { InputWrapper } from "./InputWrapper";
import { RequiredInputProps } from "./forms.types";
import { Checkbox, CheckboxProps } from "antd";

type CheckBoxProps = RequiredInputProps & {

}

export default function CheckBox(props: CheckBoxProps & PropsWithChildren) {
    const {children, error,} = props;

    const onChange: CheckboxProps["onChange"] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <InputWrapper error={error}>
            <Checkbox onChange={onChange}>
                {children}
            </Checkbox>
        </InputWrapper>
    );
}