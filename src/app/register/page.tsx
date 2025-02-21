import Card from "@/components/Card";
import { MainWrapper } from "@/components/layout/MainWrapper";
import Logo from "@/components/Logo";
import RegistrationForm from "@/components/Registration/RegistrationForm";
// import { Popover, Steps, StepsProps } from "antd";



export default function RegisterPage() {
    return (
        <MainWrapper>
            <br />
            <Logo center />

            <section className="auth-wrapper">
                <Card center className="auth-card-display">
                    <div className="text-center">
                        <h1>Register new account</h1>
                        <p className="mt-1">
                            Sign up for an account and start trading today
                        </p>
                    </div>

                    <br />
                    <br />

                    <RegistrationForm/>
                    
                </Card>

                {/* <ProgressFeedback/>                 */}
            </section>
        </MainWrapper>
    );
}
