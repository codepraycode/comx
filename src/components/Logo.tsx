import clsx from "clsx";
import Image from "next/image";

type LogoProp = {
    center?: boolean;
}

export default function Logo(props: LogoProp) {
    return (
        <div className={clsx("logo", {"logo--center": props.center})}>
            <Image
                src={"/images/logos/logo.png"}
                alt="Com-X Logo"
                about="Com-X by codepraycode"
                height={100}
                width={161}
            />
        </div>
    )
}