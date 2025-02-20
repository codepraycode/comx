import { Button } from "@/components/Button";
import Card from "@/components/Card";
import ErrorFeedback from "@/components/FeedBack/Error";
import { Label } from "@/components/Form/Label";
import TextInput from "@/components/Form/TextInput";
import { MainWrapper } from "@/components/layout/MainWrapper";
import Logo from "@/components/Logo";

export default function OtpValidationPage() {
    return (
        <MainWrapper>
            <br />
            <Logo center />

            <section className="auth-wrapper">
                <Card
                    center
                    className="auth-card-display auth-card-display--ext"
                >
                    <div className="text-center">
                        <h1>Password Reset</h1>
                        <p className="mt-1">
                            Reset your password to continue trading on ComX
                        </p>
                    </div>

                    <form
                        className="form-wrapper password-reset"
                        autoComplete="off"
                    >
                        <div>
                            <Label
                                htmlFor="code"
                                text="Enter the 4-digit code that was sent to name@mymail.com"
                            >
                                <TextInput
                                    name="code"
                                    id="code"
                                    placeholder="Enter Code"
                                />
                            </Label>

                            <p className="text-center text-info mt-1-2">
                                Resend Code
                            </p>
                        </div>


                        <ErrorFeedback message="OTP Code Invalid"/>

                        <div className="form-inline-wrapper form-cta-wrapper">
                            <Button
                                size="lg"
                                variation="black"
                                title="Back"
                                noImplemented
                                className="text-uppercase"
                                outline
                            >
                                Back
                            </Button>

                            <Button
                                size="lg"
                                // variation="light"
                                title="Proceed"
                                noImplemented
                                className="text-uppercase"
                                variation="red"
                                outline
                            >
                                Proceed
                            </Button>
                        </div>
                    </form>
                </Card>
            </section>
        </MainWrapper>
    );
}
