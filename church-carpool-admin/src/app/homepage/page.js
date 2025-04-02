import Card from "@/components/Card";
import FormWrapper from "@/components/FormWrapper";
import { SiRider } from "react-icons/si";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import Link from "@/components/Link";
export default function HomePage() {
  return (
    <FormWrapper>
      <div
        style={{ border: "1px solid var(--color-secondary)", padding: "20px" }}
      >
        <Card>
          <SiRider style={{ fontSize: "50px" }} />
          <h1>I need a Ride</h1>
        </Card>
        <Card>
          <BsFillTaxiFrontFill style={{ fontSize: "50px" }} />
          <h1>I am  a Driver</h1>
        </Card>
        <Card>
          <RiAdminFill style={{ fontSize: "50px" }} />
          <h1>Administrator</h1>
        </Card>
        <p style={{ padding: "10px", textAlign: "center" }}>
          Have an Account?
          <Link href="#"> Click Here</Link>
        </p>
      </div>
    </FormWrapper>
  );
}
