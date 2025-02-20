
import clsx from "clsx";
import { PropsWithChildren } from "react";

export interface InputLabelProps extends PropsWithChildren {
    htmlFor: string;
    text?: string;
    className?: string;
}

export function Label(props: InputLabelProps) {
    return (
        <label
            htmlFor={props.htmlFor}
            className={clsx("form-input-label", props.className)}
        >
            <span className="text-capitalize font-input-label-text">
                <b>{props.text ?? props.htmlFor}</b>
            </span>
            <br />
            {props.children}
        </label>
    );
}
