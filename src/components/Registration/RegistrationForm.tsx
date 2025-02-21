"use client";
import { useState } from "react";
import { Button } from "../Button";
import { SingleCheckBox } from "../Form/CheckBox";
import FormWrapper from "../Form/FormWrapper";
import { Label } from "../Form/Label";
import TextInput from "../Form/TextInput";


export default function RegistrationForm() {
    const [section, setSection] = useState<"individual" | "corporate">(
        "individual"
    );
    
    return (
        <form className="form-wrapper" autoComplete="off">
            <SingleCheckBox
                id="category"
                label="Select select the category that best describes you"
                name="category"
                options={[
                    {
                        label: "Individual",
                        value: "individual",
                    },
                    {
                        label: "Corporate",
                        value: "corporate",
                    },
                ]}
                onChange={(e) => setSection(e)}
            />

            <br />

            <fieldset hidden={section !== "individual"}>
                <FormWrapper>
                    <Label htmlFor="firstname" text="Your First Name">
                        <TextInput
                            name="firstname"
                            id="firstname"
                            placeholder="Enter your First Name"
                        />
                    </Label>

                    <br />

                    <Label htmlFor="lastname" text="Your Last Name">
                        <TextInput
                            name="lastname"
                            id="lastname"
                            placeholder="Enter your Last Name"
                        />
                    </Label>
                </FormWrapper>

                <br />

                <Label htmlFor="email" text="Your Email">
                    <TextInput
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                    />
                </Label>
            </fieldset>

            <fieldset hidden={section !== "corporate"}>
                <Label htmlFor="company" text="Company Name">
                    <TextInput
                        name="company"
                        id="company"
                        placeholder="Enter your company name"
                    />
                </Label>
                <br />
                <FormWrapper>
                    <Label htmlFor="firstname" text="Your First Name">
                        <TextInput
                            name="firstname"
                            id="firstname"
                            placeholder="Enter your First Name"
                        />
                    </Label>

                    <br />

                    <Label htmlFor="lastname" text="Your Last Name">
                        <TextInput
                            name="lastname"
                            id="lastname"
                            placeholder="Enter your Last Name"
                        />
                    </Label>
                </FormWrapper>

                <br />
            </fieldset>

            <br />

            <div className="form-cta-wrapper">
                <br />
                <Button
                    size="lg"
                    variation="red"
                    outline
                    title="NEXT STEP"
                    noImplemented
                >
                    NEXT STEP
                </Button>
            </div>
        </form>
    );
}