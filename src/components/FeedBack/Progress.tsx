"use client";
import { Steps, StepsProps } from "antd";


const DotItem: StepsProps["progressDot"] = (dot, { status, index }) => {
    
    
    console.debug(dot, status, index);
    return (
        <div className="progress-dot">
            {/* {dot} */}
        </div>
    )
};

export default function ProgressFeedback() {
    return (
        <Steps
            progressDot={DotItem}
            className="auth-progress-bar"
            current={2}
            responsive

            items={[
                {
                    title: "",
                    description: "",
                },
                {
                    title: "",
                    description: "",
                },
                {
                    title: "",
                    description: "",
                },
                {
                    title: "",
                    description: "",
                },
            ]}
        />
    );
}