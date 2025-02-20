
import clsx from "clsx";
import { PropsWithChildren } from "react";

export interface InputLabelProps extends PropsWithChildren {
    htmlFor: string;
    text?: string;
    className?: string;
    captalize?: boolean;
}

export function Label({captalize=true, ...props}: InputLabelProps) {
    return (
        <label
            htmlFor={props.htmlFor}
            className={clsx("form-input-label", props.className)}
        >
            <span className={clsx({"text-capitalize": captalize}, "font-input-label-text")}>
                <b>{props.text ?? props.htmlFor}</b>
            </span>
            <br />
            {props.children}
        </label>
    );
}
