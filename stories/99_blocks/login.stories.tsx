import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";

const LoginCard = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Login</CardTitle>
      <CardDescription>
        Enter your credentials to access your account.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="flex flex-col gap-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="privacy-policy" />
            <label
              htmlFor="privacy-policy"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept the Privacy Policy
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms-of-service" />
            <label
              htmlFor="terms-of-service"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the Terms of Service
            </label>
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Sign In</Button>
    </CardFooter>
  </Card>
);

const meta: Meta<typeof LoginCard> = {
  title: "Blocks/LoginCard",
  component: LoginCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof LoginCard>;

export const Default: Story = {};
