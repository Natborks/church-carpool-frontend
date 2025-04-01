import Box from "@/components/Box";
import Center from "@/components/Center";
import Stack from "@/components/Stack";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import Cover from "@/components/Cover";
export default function SetPassword() {
  return (
    <FormWrapper>
      <Stack gap={"s1"}>
        <h1>Set Password</h1>
        <div>
          <Stack gap={"s-2"}>
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" name="email"></Input>
          </Stack>
        </div>
        <div>
          <Stack gap={"s-2"}>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password"></Input>
          </Stack>
        </div>
        <div>
          <Stack gap={"s-2"}>
            <Label htmlFor="password">Confirm Password</Label>
            <Input type="password" name="password"></Input>
          </Stack>
        </div>

        <Button>Create Password</Button>
      </Stack>
    </FormWrapper>
  );
}
