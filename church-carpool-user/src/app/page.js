"use client";
import React from "react";
import Stack from "@/components/Stack";
import Box from "@/components/Box";
import Input from "@/components/Input";
import Card from "@/components/Card/Card";
import Center from "@/components/Center";
import { ChevronLeft } from "react-feather";
import TextArea from "@/components/TextArea";
import { useMutation } from "@tanstack/react-query";
import { requestRide } from "@/api/requestRideAPI";
import FormWrapper from "@/components/FormWrapper";
import Label from "@/components/Label";
import ButtonSecondary from "@/components/ButtonSecondary/ButtonSecondary";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary";

import FormHeader from "@/components/FormHeader/FormHeader";
import { useToast } from "@/hooks/useToast";
import ToastDemo from "@/components/Toast/Toast";

export default function Home() {
  const [animated, setAnimated] = React.useState(false);

  const {
    isOpen: isToastOpen,
    setIsOpen: setToastOpen,
    toatsMessage,
    setToastMessage,
  } = useToast();
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

      setToastOpen(true);
      setToastMessage({
        title: "Success",
        message: "Form submitted successfully",
      });
      setForm({});
    },
    onError: (error) => {
      setToastOpen(true);
      setToastMessage({ title: "Error", message: error.message });
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
      <Card className="">
        <FormWrapper>
          <FormHeader>
            <form onSubmit={(e) => e.preventDefault()}>
              <Stack gap={"s0"}>
                {step == 1 && (
                  <>
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder={"John Doe"}
                        onChange={handleChange}
                        name={"name"}
                        value={form.name}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                      />
                    </div>
                  </>
                )}
                {step == 2 && (
                  <>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        placeholder={"Pickup Address"}
                        onChange={handleChange}
                        name={"address"}
                        value={form.address}
                      />
                    </div>

                    <div>
                      <Label htmlFor="noOfAdults">Adults</Label>
                      <Input
                        id="noOfAdults"
                        placeholder={"Number of Adults"}
                        onChange={handleChange}
                        name={"noOfAdults"}
                        value={form.noOfAdults}
                      />
                      <span>How many adults are you coming with?</span>
                    </div>

                    <div>
                      <Label htmlFor="noOfChildren">Children</Label>
                      <Input
                        id="noOfChildren"
                        placeholder={"Number of Children"}
                        onChange={handleChange}
                        name={"noOfChildren"}
                        value={form.noOfChildren}
                      />
                      <span>
                        How many childern under the age of 10 are you coming
                        with?
                      </span>
                    </div>
                  </>
                )}
                {step == 3 && (
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <TextArea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      rows={4}
                    />
                    <span>Any extra accomodations you will be requesting</span>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "12px",
                  }}
                >
                  <ButtonSecondary onClick={handleBack}>Back</ButtonSecondary>
                  <ButtonPrimary type={"button"} onClick={handleContinue}>
                    Next
                  </ButtonPrimary>
                </div>
              </Stack>
            </form>
          </FormHeader>
        </FormWrapper>
      </Card>
      <ToastDemo
        open={isToastOpen}
        setOpen={setToastOpen}
        title={toatsMessage.title}
        message={toatsMessage.message}
      />
    </Center>
  );
}
