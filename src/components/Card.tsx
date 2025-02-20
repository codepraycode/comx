import clsx from "clsx";
import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren & {
    className?:string;
    center?: boolean;
};

export default function Card(props: CardProps) {

    return (
        <section className={clsx("card-wrapper", {"card-wrapper--center": props.center}, props.className)}>
            {props.children}
        </section>
    )

}