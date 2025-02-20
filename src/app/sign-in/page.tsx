import { Button } from "@/components/Button";
import Card from "@/components/Card";
import CheckBox from "@/components/Form/CheckBox";
import { Label } from "@/components/Form/Label";
import TextInput from "@/components/Form/TextInput";
import { MainWrapper } from "@/components/layout/MainWrapper";
import Logo from "@/components/Logo";

export default function SignInPage() {
    return (
        <MainWrapper>
            <br />
            <Logo center />

            <section className="auth-wrapper">
                <Card center className="auth-card-display">
                    <div className="text-center">
                        <h1>Sign in to ComX</h1>
                        <p className="mt-1">
                            Enter your login credentials below.
                        </p>
                    </div>

                    <br />
                    <br />

                    <form className="form-wrapper" autoComplete="off">
                        <Label htmlFor="email" text="Your Email">
                            <TextInput
                                name="email"
                                id="email"
                                placeholder="Enter your Email"
                            />
                        </Label>

                        <br />

                        <Label htmlFor="password" text="Your Password">
                            <TextInput
                                name="password"
                                id="password"
                                type="password"
                                placeholder="******"
                            />
                        </Label>

                        <br />

                        <div className="form-inline-wrapper">
                            <CheckBox name="signed-in">Stay Signed in</CheckBox>

                            <Button
                                link="/forgot-password"
                                noImplemented
                                variation="red"
                                size="fit"
                                outline
                            >
                                Forgot Password?
                            </Button>
                        </div>

                        <br />

                        <div className="form-cta-wrapper">
                            <Button
                                size="lg"
                                variation="green"
                                title="Sign in"
                                link="/sign-in"
                                noImplemented
                            >
                                Sign in
                            </Button>
                            <br />
                            <br />
                            <Button
                                size="lg"
                                // variation="light"
                                title="Back"
                                noImplemented
                            >
                                Back
                            </Button>
                        </div>
                    </form>
                </Card>
            </section>
        </MainWrapper>
    );
}