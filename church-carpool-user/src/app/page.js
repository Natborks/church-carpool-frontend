"use client";
import React from "react";
import Stack from "@/components/Stack";
import Box from "@/components/Box";
import Input from "@/components/Input";
import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import Card from "@/components/Card/Card";
import Center from "@/components/Center";
import { ChevronLeft } from "react-feather";
import TextArea from "@/components/TextArea";
import { useMutation } from "@tanstack/react-query";
import { requestRide } from "@/api/requestRideAPI";

export default function Home() {
  const [animated, setAnimated] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: 0,
    noOfAdults: 0,
    noOfChildren: 0,
    address: "",
  });

  React.useEffect(() => {
    setAnimated(true);
  }, [step]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setForm({
      ...form,
      [name]: type == "number" ? parseInt(value) : value,
    });
  };

  const mutation = useMutation({
    mutationFn: requestRide,
    onSuccess: () => {
      // Invalidate and refetch
      console.log("success");
      setForm({});
    },
  });

  const handleContinue = () => {
    const nextStep = step < 3 ? step + 1 : 3;

    if (step == 3) {
      mutation.mutate(form);
    }
    setStep(nextStep);
    setAnimated(false);
  };

  const handleBack = () => {
    const prevStep = step > 1 ? step - 1 : 1;
    setStep(prevStep);
    setAnimated(false);
  };

  return (
    <Center>
      <FormWrapper>
        <Card>
          {step > 1 && (
            <div>
              <button style={{ display: "flex", alignItems: "center" }}>
                <ChevronLeft size={28} /> <span onClick={handleBack}>Back</span>
              </button>
            </div>
          )}

          <Stack gap={"s3"}>
            <Center>
              <Box padding={"s-4"}>
                <h1>CMFI</h1>
              </Box>
            </Center>
            <div
              style={{
                animation: animated ? "fade-in 800ms" : undefined,
              }}
            >
              <Stack gap={"s0"}>
                <Stack gap={"s0"}>
                  <h2>Request a ride</h2>
                  <p>Fill the Form Below to Request a Ride</p>
                </Stack>
                <Stack gap={"s0"}>
                  {step == 1 && (
                    <>
                      <Input
                        placeholder={"Name"}
                        onChange={handleChange}
                        name={"name"}
                      />
                      <Input
                        placeholder={"Email Address"}
                        onChange={handleChange}
                        name={"email"}
                      />
                    </>
                  )}
                  {step == 2 && (
                    <>
                      <div>
                        <Stack gap={"s-2"}>
                          <Input
                            placeholder={"Pickup Address"}
                            onChange={handleChange}
                            name={"address"}
                            value={form.address}
                          />
                          <span></span>
                        </Stack>
                      </div>

                      <div>
                        <Stack gap={"s-2"}>
                          <Input
                            placeholder={"Number of Adults"}
                            onChange={handleChange}
                            name={"noOfAdults"}
                          />
                          <span>How many adults are you coming with?</span>
                        </Stack>
                      </div>

                      <div>
                        <Stack gap={"s-2"}>
                          <Input
                            placeholder={"Number of Children"}
                            onChange={handleChange}
                            name={"noOfChildren"}
                          />
                          <span>
                            How many childern under the age of 10 are you coming
                            with?
                          </span>
                        </Stack>
                      </div>
                    </>
                  )}
                  {step == 3 && (
                    <Stack gap={"s-3"}>
                      <TextArea placeholder={"Additional Information"} />
                      <span>Additional Information</span>
                    </Stack>
                  )}
                  <Button onClick={handleContinue}>Continue</Button>
                </Stack>
              </Stack>
            </div>

            <p>Privacy</p>
          </Stack>
        </Card>
      </FormWrapper>
    </Center>
  );
}
