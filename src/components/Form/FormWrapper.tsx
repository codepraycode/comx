import { PropsWithChildren } from "react";

type FormWrapperProps = PropsWithChildren & {};

export default function FormWrapper(props: FormWrapperProps) {
    return (
        <div className="form-display-wrapper">
            {props.children}
        </div>
    )
}