import Box from "@/components/Box";
import Center from "@/components/Center";
import Label from "@/components/Label";
import Stack from "@/components/Stack";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "@/components/Link";
import FormWrapper from "@/components/FormWrapper";
export default function () {
  return (
    <FormWrapper>
      <Stack gap={"s1"}>
        <h1>Sign In</h1>
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
        <p>
          <Link href="#"> Forgot Password?</Link>
        </p>
        <Button>Sign In</Button>
      </Stack>
    </FormWrapper>
  );
}
