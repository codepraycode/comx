import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface InputWrapperProps extends PropsWithChildren {
    error?: string;
    id?: string;
    className?: string;
}

export const InputWrapper: FC<InputWrapperProps> = (props) => {
    return (
        <div
            style={{ position: "relative" }}
            id={props.id}
            className={clsx("form-input-wrapper", props.className)}
        >
            {props.children}
            <FormError message={props.error} />
        </div>
    );
};

export const FormError = ({ message }: { message?: string }) => {
    return <p className="form-input-error">{message}</p>;
};
