import Image from "next/image";
import styles from "./page.module.css";
import Stack from "@/components/Stack";
import Box from "@/components/Box";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Switcher from "@/components/Switcher";
import FormWrapper from "@/components/FormWrapper";
import TextArea from "@/components/TextArea";

export default function Home() {
  return (
    <FormWrapper>
      <Box padding={"zero"}>
        <Stack gap={"s1"}>
          <h1>Request a ride</h1>
          <Box padding={"zero"} height={400}>
            <Stack gap={"s1"}>
              <div>
                <Stack gap={"s-2"}>
                  <Label htmlFor="email">Name</Label>
                  <Input type="text" name="name" />
                </Stack>
              </div>

              <div>
                <Stack gap={"s-2"}>
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="email" name="email" />
                </Stack>
              </div>

              <div>
                <Stack gap={"s-2"}>
                  <Label htmlFor="phone">Phone</Label>
                  <Input type="phone" name="phone" />
                </Stack>
              </div>

              <div>
                <Stack gap={"s-2"}>
                  <Label htmlFor="church">Church</Label>
                  <Input type="text" name="church" />
                </Stack>
              </div>

              <div>
                <Switcher>
                  <Stack gap={"s-2"}>
                    <Label htmlFor="adults_number">Number of Adults</Label>
                    <Input type="number" name="adults_number" />
                  </Stack>
                  <Stack gap={"s-2"}>
                    <Label htmlFor="children_number">Number of Children</Label>
                    <Input type="number" name="children_number" />
                  </Stack>
                </Switcher>
              </div>

              <div>
                <Stack gap={"s-2"}>
                  <Label htmlFor="address">Address</Label>
                  <Input type="text" name="address" />
                </Stack>
              </div>

              <div>
                <Stack gap={"s-2"}>
                  <Label htmlFor="comments">Comments </Label>
                  <TextArea name={"comments"} />
                </Stack>
              </div>
            </Stack>
          </Box>

          <div>
            <Stack gap={"s-2"}>
              <p>
                By creating an account you agree to the{" "}
                <a>terms and conditions</a>
              </p>
              <Button>Request Ride</Button>
            </Stack>
          </div>
        </Stack>
      </Box>
    </FormWrapper>
  );
}
