"use client";
import Box from "@/components/Box";
import Center from "@/components/Center";
import Label from "@/components/Label";
import Stack from "@/components/Stack";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "@/components/Link";
import FormWrapper from "@/components/FormWrapper";
import { useState } from "react";


export default function CreateEvent() {
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: "",
    drivers: "",
  });

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {

    e.preventDefault();

    if (!formData.eventName || !formData.startDate || !formData.drivers) {
      alert("Please fill out all fields.");
      return;
    }
    
    fetch('https://fffa-193-149-173-107.ngrok-free.app/api/v1/church-carpool/event/command/create-event', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then((data) => {
    
        setFormData({ eventName: "", startDate: "", drivers: "" });
      
    })
    .catch((error) => {
      console.error("Error creating event:", error);
    })
      //redirect to view event page
  }

  return (
    <FormWrapper >
        <Stack gap={"s1"}>
        <h1>Create New Event</h1>
        <div>
          <Stack gap={"s-2"}>
            <Label htmlFor="eventName">Event Name</Label>
            <Input type="text" name="eventName" value = {formData.eventName} onChange = {handleChange} required/>
          </Stack>
        </div>

        <div>
          <Stack gap={"s-2"}>
            <Label htmlFor="startDate">Event Start Date</Label>
            <Input type="date" name="startDate" value = {formData.startDate} onChange = {handleChange} required/>
          </Stack>
        </div>

        <div>
          <Stack gap={"s-2"}>
            <Label htmlFor="drivers">Number of Drivers</Label>
            <Input type="number" name="drivers" value = {formData.drivers} onChange = {handleChange} required/>
          </Stack>
        </div>
        <Button onClick = {handleSubmit}> Create Event</Button>
      </Stack>
    </FormWrapper>
  );
}
