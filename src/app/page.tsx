import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { MainWrapper } from "@/components/layout/MainWrapper";
import Logo from "@/components/Logo";



export default function Home() {
    
    return (
        <MainWrapper>
            <br />
            <Logo center />

            <section className="auth-wrapper">
                <Card center className="auth-card-display">
                    <h1>Sign in to ComX</h1>
                    <p className="mt-1">Welcome to ComX</p>

                    <br />
                    <br />

                    <Button
                        size="lg"
                        variation="green"
                        title="Sign in"
                        link="/sign-in"
                        noImplemented
                    >
                        Sign in
                    </Button>
                </Card>

                <Card center className="auth-card-display">
                    <h1>Create an Account</h1>
                    <p className="mt-1">Join the Family</p>

                    <br />
                    <br />

                    <Button
                        size="lg"
                        variation="black"
                        title="Register"
                        noImplemented
                    >
                        Register
                    </Button>
                </Card>
            </section>
        </MainWrapper>
    );
}
