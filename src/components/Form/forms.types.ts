/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";


export type ILabel = string | ReactNode;


export interface RequiredInputProps {
    id?: string;
    error?: string;
    name: string;
    required?: boolean;
    placeholder?:string;

    onChange?: (value: any) => void;
    onEnter?: (value: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyDown?: (e?:any) => void;

    type?:string;

}


export type SelectOption = {
    label: ILabel,
    value: string,
    image?: string,
    desc?: string,
    id?: string;
}