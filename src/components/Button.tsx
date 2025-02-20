'use client';
import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { useMainContext } from "./layout/MainWrapper";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "lg" | "md" | "fit";
    variation?: "green" | "black" | "red" | "light";
    outline?: boolean;
    link?: string;

    noImplemented?: boolean;    
};

export function Button(props: ButtonProps) {

    const {children, className, size, variation, outline, link, noImplemented, ...rest} = props;

    const { messageApi } = useMainContext();
    
    const sizeClass = `btn-sz-${size}`;
    const variationClass = `btn-var-${variation}`;
    const outlinedClass = `btn--outlined`;

    const classname = clsx(
        "btn",
        { [sizeClass]: Boolean(size) },
        { [variationClass]: Boolean(variation) },
        { [outlinedClass]: Boolean(outline) },
        className
    );


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function indicateNotImplemented(e?:any) {
        if (noImplemented) {
            if (e) e.preventDefault();

            messageApi.open({
                type: "warning",
                content: "No Implemented!",
            });
        }
    }

    if (link) {
        return (
            <Link
                href={link}
                className={classname}
                onClick={indicateNotImplemented}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={classname}
            {...rest}
            onClick={indicateNotImplemented}
        >
            {children}
        </button>
    );
}
