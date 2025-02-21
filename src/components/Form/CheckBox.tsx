"use client";

import { PropsWithChildren } from "react";
import { InputWrapper } from "./InputWrapper";
import { ILabel, RequiredInputProps, SelectOption } from "./forms.types";
import { Checkbox, CheckboxProps } from "antd";
// import { Label } from "./Label";

type CheckBoxProps = RequiredInputProps & {

}

type SelectCheckBoxProps = Omit<RequiredInputProps, "id"> & {
    options: SelectOption[];
    id: string;
    label: string;
};

export function CheckBox(props: CheckBoxProps & PropsWithChildren) {
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

export function SingleCheckBox(props: SelectCheckBoxProps) {
    const { error, options, name, id, label, onChange } = props;

    // const onChange: CheckboxProps["onChange"] = (e) => {
    //     console.log(`checked = ${e.target.checked}`);
    // };

    return (
        <InputWrapper error={error}>

            <p className="form-input-label">{label}</p>
            
            <div className="form-option-wrapper mt-1">
                {options.map((option, index) => {
                    return (
                        <OptionSelector
                            name={name}
                            value={option.value}
                            label={option.label}
                            key={index}
                            id={id + '-' + option.value}
                            onChange={onChange ? onChange : ()=>{}}
                        />
                    );
                })}
            </div>
        </InputWrapper>
    );
}


type OptionSelectorProps = {
    name: string;
    value: string;
    label?: ILabel;
    id: string;
    onChange: (value:string)=>void;
}

function OptionSelector(props: OptionSelectorProps) {
    return (
        <label htmlFor={props.id} className="form-option-item">
            <input
                type="radio"
                name={props.name}
                value={props.value}
                id={props.id}
                onChange={()=>props.onChange(props.value)}
            />

            <span className="text-capitalize">{props.label ?? props.value}</span>
        </label>
    )
}