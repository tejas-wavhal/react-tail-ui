import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args: any) => <Button {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Button",
};

export const Ghost: any = Template.bind({});
Ghost.args = {
  variant: "ghost",
  children: "Ghost Button",
};

export const Success: any = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success Button",
};

export const Danger: any = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger Button",
};